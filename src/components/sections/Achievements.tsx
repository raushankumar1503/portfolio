import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { achievements } from "@/content/portfolio";

/** Achievements — genuine items only; placeholder until real data is supplied. */
export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-28" aria-labelledby="achievements-heading">
      <Container>
        <Reveal>
          <SectionHeading id="achievements-heading" index="06" title={achievements.heading} />
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {achievements.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border-t border-line pt-6 text-lg text-ink-soft"
              >
                <span aria-hidden="true" className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="measure">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}