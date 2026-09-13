/** Tiny class-merging helper (avoids the clsx/tailwind-merge dependency). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}