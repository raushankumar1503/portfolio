import { cn } from "@/lib/cn";

/**
 * SectionHeading — consistent editorial header for every section.
 * Renders a structural index (the page is a real sequence, so the
 * numeral carries meaning), a display heading, and an optional lede.
 * No ALL-CAPS eyebrows, no em-dash fragments.
 */
export function SectionHeading({
  index,
  title,
  lede,
  className,
  id,
}: {
  index: string;
  title: string;
  lede?: string;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <span className="index-numeral text-sm text-ink-faint">{index}</span>
      <h2 id={id} className="mt-2 text-3xl sm:text-4xl">
        {title}
      </h2>
      {lede ? <p className="mt-4 text-ink-soft measure">{lede}</p> : null}
    </div>
  );
}