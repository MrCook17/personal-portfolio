export function SiteBackground() {
  return (
    <div aria-hidden="true" className="site-background">
      <div className="site-background__grid site-background__grid--top-bottom" />
      <div className="site-background__grid site-background__grid--sides" />
      <div className="site-background__fade" />
    </div>
  );
}
