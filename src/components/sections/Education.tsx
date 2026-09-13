import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { education } from "@/content/portfolio";

/** Education — a clean editorial timeline (a real sequence). */
export function Education() {
  return (
    <section id="education" className="py-24 sm:py-28" aria-labelledby="education-heading">
      <Container>
        <Reveal>
          <SectionHeading id="education-heading" index="02" title={education.heading} />
        </Reveal>

        <Reveal delay={0.08}>
          <ol className="mt-12 space-y-0 border-l border-line-strong pl-8 sm:pl-12">
            {education.items.map((item) => (
              <li key={item.institution} className="relative border-b border-line py-8 last:border-b-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-9 h-2.5 w-2.5 rounded-full bg-ink sm:-left-[53px]"
                />
                <p className="text-sm text-ink-faint">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.degree}</h3>
                <p className="mt-1 text-ink-soft">
                  {item.institution} · {item.field}
                </p>
                {item.focus ? <p className="mt-3 text-sm text-ink-faint">{item.focus}</p> : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}