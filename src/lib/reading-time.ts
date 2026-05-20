const WORDS_PER_MINUTE = 220;

export function getReadingTimeFromWordCount(wordCount: number) {
  const safeWordCount = Math.max(0, wordCount);
  const minutes = Math.max(1, Math.ceil(safeWordCount / WORDS_PER_MINUTE));

  return `${minutes} min read`;
}
