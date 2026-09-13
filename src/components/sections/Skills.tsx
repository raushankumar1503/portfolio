import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { skills } from "@/content/portfolio";

/**
 * Skills — an editorial, type-forward presentation (no badge soup).
 * Two-column list layout with hairline separators as structure.
 */
export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28" aria-labelledby="skills-heading">
      <Container>
        <Reveal>
          <SectionHeading id="skills-heading" index="03" title={skills.heading} />
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {skills.categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.06}>
              <div className="border-t border-line-strong pt-5">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-ink-soft">
                  {cat.items.map((item) => (
                    <span key={item} className="whitespace-nowrap text-sm">
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}