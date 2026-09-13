import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/content/portfolio";

/** Experience / Learning Journey — a chronological timeline (a real sequence). */
export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28" aria-labelledby="experience-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="experience-heading"
            index="05"
            title={experience.heading}
            lede={experience.intro}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <ol className="mt-12 space-y-0 border-l border-line-strong pl-8 sm:pl-12">
            {experience.items.map((item, i) => (
              <li key={i} className="relative border-b border-line py-8 last:border-b-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-9 h-2.5 w-2.5 rounded-full bg-ink sm:-left-[53px]"
                />
                <p className="text-sm text-ink-faint">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                {item.org ? <p className="mt-1 text-ink-soft">{item.org}</p> : null}
                <ul className="mt-4 space-y-1.5 text-ink-soft measure">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}