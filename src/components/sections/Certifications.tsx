import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ExternalLinkIcon } from "@/components/site/icons";
import { certifications } from "@/content/portfolio";

/** Certifications — professional layout. No invented credential IDs. */
export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 sm:py-28"
      aria-labelledby="certifications-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading id="certifications-heading" index="07" title={certifications.heading} />
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 flex flex-col">
            {certifications.items.map((cert, i) => (
              <li key={i} className="border-t border-line py-6 last:border-b">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <p className="mt-1 text-ink-soft">{cert.org}</p>
                  </div>
                  {cert.date ? <p className="text-sm text-ink-faint">{cert.date}</p> : null}
                </div>
                {cert.credential && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-ink underline underline-offset-4 decoration-line-strong transition-colors hover:text-accent"
                  >
                    View credential
                    <ExternalLinkIcon size={15} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}