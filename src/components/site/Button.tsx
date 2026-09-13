import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Button / LinkButton — one consistent interactive control.
 * Intent (primary/secondary) drives color; both share focus styles.
 */
type ButtonProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium " +
  "transition-[background-color,color,border-color] duration-200 " +
  "rounded-sm select-none";

const styles = {
  primary: "bg-ink text-paper hover:bg-ink-soft",
  secondary: "border border-line-strong text-ink hover:border-ink",
};

export function Button({
  children,
  href,
  download,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(base, styles[variant], className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        download={download}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}