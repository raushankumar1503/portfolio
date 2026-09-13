import { Container } from "@/components/site/Container";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/site/icons";
import { footer, links, nav, profile } from "@/content/portfolio";

/**
 * Professional footer: identity, quick nav, contact links, and a
 * quiet closing statement on a deep-ink ground — the page's final
 * editorial beat.
 */
export function Footer() {
  const hasExternal =
    links.github.startsWith("http") || links.linkedin.startsWith("http");
  const phoneHref = `tel:${links.phone.replace(/[^+\d]/g, "")}`;

  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              {profile.name}
            </p>
            <p className="mt-3 max-w-sm text-sm text-paper/60">{profile.role}</p>
            <p className="mt-6 max-w-sm text-sm text-paper/50">{footer.closing}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
            <p className="text-xs text-paper/40">Navigate</p>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit text-paper/80 transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <p className="text-xs text-paper/40">Connect</p>
            <a
              href={`mailto:${links.email}`}
              className="inline-flex w-fit items-center gap-2 text-paper/80 transition-colors hover:text-paper"
            >
              <MailIcon size={16} />
              <span className="underline underline-offset-4 decoration-paper/30">
                {links.email}
              </span>
            </a>
            <a
              href={phoneHref}
              className="inline-flex w-fit items-center gap-2 text-paper/80 transition-colors hover:text-paper"
            >
              <PhoneIcon size={16} />
              <span className="underline underline-offset-4 decoration-paper/30">
                {links.phone}
              </span>
            </a>
            {links.github.startsWith("http") && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-paper/80 transition-colors hover:text-paper"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            )}
            {links.linkedin.startsWith("http") && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-paper/80 transition-colors hover:text-paper"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
            )}
            {!hasExternal && (
              <p className="text-xs text-paper/40">
                Add your GitHub &amp; LinkedIn URLs in <code>src/content/portfolio.ts</code>.
              </p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {footer.copyright}</p>
          <p className="text-paper/30">{profile.firstName} {profile.lastName}</p>
        </div>
      </Container>
    </footer>
  );
}
