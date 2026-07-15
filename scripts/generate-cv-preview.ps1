$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Runtime.WindowsRuntime

[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFolder, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.CreationCollisionOption, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.FileAccessMode, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.IRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null

function Wait-WinRtOperation {
  param(
    [Parameter(Mandatory = $true)]
    $Operation,

    [Parameter(Mandatory = $true)]
    [Type] $ResultType
  )

  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq "AsTask" -and
      $_.IsGenericMethod -and
      $_.GetParameters().Count -eq 1 -and
      $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
    } |
    Select-Object -First 1

  $task = $method.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  $task.Wait()

  return $task.Result
}

function Wait-WinRtAction {
  param(
    [Parameter(Mandatory = $true)]
    $Action
  )

  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq "AsTask" -and
      -not $_.IsGenericMethod -and
      $_.GetParameters().Count -eq 1 -and
      $_.GetParameters()[0].ParameterType.Name -eq "IAsyncAction"
    } |
    Select-Object -First 1

  $task = $method.Invoke($null, @($Action))
  $task.Wait()
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$pdfPath = Join-Path $repoRoot "public/Charlie-Cook-CV.pdf"
$outputDir = Join-Path $repoRoot "public/cv"
$scale = 2

if (-not (Test-Path -LiteralPath $pdfPath)) {
  throw "CV PDF not found at $pdfPath"
}

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$pdfFile = Wait-WinRtOperation `
  -Operation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)) `
  -ResultType ([Windows.Storage.StorageFile])

$document = Wait-WinRtOperation `
  -Operation ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($pdfFile)) `
  -ResultType ([Windows.Data.Pdf.PdfDocument])

$outputFolder = Wait-WinRtOperation `
  -Operation ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync($outputDir)) `
  -ResultType ([Windows.Storage.StorageFolder])

for ($index = 0; $index -lt $document.PageCount; $index++) {
  $pageNumber = $index + 1
  $page = $document.GetPage([uint32] $index)
  $fileName = "charlie-cook-cv-page-$pageNumber.png"

  try {
    $outputFile = Wait-WinRtOperation `
      -Operation ($outputFolder.CreateFileAsync(
        $fileName,
        [Windows.Storage.CreationCollisionOption]::ReplaceExisting
      )) `
      -ResultType ([Windows.Storage.StorageFile])

    $stream = Wait-WinRtOperation `
      -Operation ($outputFile.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite)) `
      -ResultType ([Windows.Storage.Streams.IRandomAccessStream])

    try {
      $options = [Windows.Data.Pdf.PdfPageRenderOptions]::new()
      $options.DestinationWidth = [uint32] [Math]::Round($page.Size.Width * $scale)
      $options.DestinationHeight = [uint32] [Math]::Round($page.Size.Height * $scale)

      Wait-WinRtAction -Action ($page.RenderToStreamAsync($stream, $options))
    }
    finally {
      if ($stream) {
        $stream.Dispose()
      }
    }

    Write-Output "Generated public/cv/$fileName ($($options.DestinationWidth)x$($options.DestinationHeight))"
  }
  finally {
    if ($page) {
      $page.Dispose()
    }
  }
}
