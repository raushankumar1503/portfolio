import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRightIcon } from "@/components/site/icons";
import { projects } from "@/content/portfolio";

/**
 * Projects — the premium showcase. Editorial rows with strong visual
 * hierarchy and a quiet hover state (link arrow resolves, ground tints),
 * instead of a wall of identical cards. Projects are deliberately NOT
 * numbered: there is no implied ranking.
 * Source/Live links render ONLY when a real URL exists — null stays hidden.
 */
export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28" aria-labelledby="projects-heading">
      <Container>
        <Reveal>
          <SectionHeading id="projects-heading" index="04" title={projects.heading} lede={projects.intro} />
        </Reveal>

        <div className="mt-12 flex flex-col">
          {projects.items.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <article className="group relative border-t border-line py-10 first:border-t sm:py-12">
                <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-10">
                  <div>
                    {project.date ? (
                      <p className="text-sm text-ink-faint">{project.date}</p>
                    ) : null}
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-ink-soft measure">{project.blurb}</p>
                    <p className="mt-2 text-sm text-ink-faint">
                      <span className="text-ink-soft">Why I built it — </span>
                      {project.problem}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 text-sm">
                    <div>
                      <p className="text-xs text-ink-faint">Stack</p>
                      <p className="mt-1 text-ink-soft">{project.stack.join("  ·  ")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-ink-faint">Highlights</p>
                      <ul className="mt-1 space-y-1 text-ink-soft">
                        {project.features.map((f) => (
                          <li key={f}>· {f}</li>
                        ))}
                      </ul>
                    </div>
                    {project.github || project.demo ? (
                      <div className="mt-2 flex flex-wrap items-center gap-5">
                        {typeof project.github === "string" && project.github.startsWith("http") && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-ink underline underline-offset-4 decoration-line-strong transition-colors hover:text-accent"
                          >
                            Source
                            <ArrowUpRightIcon size={15} />
                          </a>
                        )}
                        {typeof project.demo === "string" && project.demo.startsWith("http") && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-ink underline underline-offset-4 decoration-line-strong transition-colors hover:text-accent"
                          >
                            Live
                            <ArrowUpRightIcon size={15} />
                          </a>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
