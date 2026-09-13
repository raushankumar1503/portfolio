"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/site/Container";
import { nav, profile, links } from "@/content/portfolio";
import { cn } from "@/lib/cn";

/**
 * Fixed top navigation with an accessible mobile menu.
 * The desktop list appears inline; on small screens a button
 * toggles a full-height overlay menu with proper focus handling.
 * Non-anchor links (e.g., CV PDF) open in a new tab.
 */
export function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu when the Escape key is pressed.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const cvHref = links.resume;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            CV
          </a>
        </nav>

        {/* Mobile menu toggle (labelled, keyboard-accessible) */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-5 bg-ink transition-transform duration-200",
                open && "top-1/2 -translate-y-1/2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-5 bg-ink transition-transform duration-200",
                open && "bottom-1/2 translate-y-1/2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {/* Mobile overlay menu */}
      {open && (
        <motion.nav
          id="mobile-menu"
          aria-label="Primary mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-line bg-paper"
        >
          <Container className="flex flex-col py-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-lg text-ink last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border-t border-line py-4 text-lg text-ink"
            >
              CV
            </a>
          </Container>
        </motion.nav>
      )}
    </header>
  );
}
