import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/content/portfolio";

/** About — concise editorial statement on the owner's work and approach. */
export function About() {
  return (
    <section id="about" className="py-24 sm:py-28" aria-labelledby="about-heading">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <SectionHeading id="about-heading" index="01" title={about.heading} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-6 text-lg text-ink-soft measure">
            {about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}