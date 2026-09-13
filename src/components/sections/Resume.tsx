import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/motion/Reveal";
import { DownloadIcon, ExternalLinkIcon } from "@/components/site/icons";
import { resume } from "@/content/portfolio";

/**
 * Resume / CV — premium section with a preview placeholder.
 * A real PDF is rendered when the owner adds the file at `resume.file`
 * and sets a `#resume` iframe target; until then an honest note shows.
 */
export function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-28" aria-labelledby="resume-heading">
      <Container>
        <Reveal>
          <SectionHeading id="resume-heading" index="08" title={resume.heading} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
            {/* Preview panel */}
            <div className="min-h-72 rounded-[2px] border border-line bg-paper-raised p-10 text-center sm:min-h-96">
              <p className="text-sm text-ink-faint">{resume.previewNote}</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="max-w-sm">
                <h3 className="text-xl font-semibold">Download or view</h3>
                <p className="mt-3 text-sm text-ink-faint measure">
                  Add your resume as a PDF at <code className="text-ink">public/{resume.file}</code>{" "}
                  and update <code className="text-ink">src/content/portfolio.ts</code>. The preview
                  above and the buttons below will then show your real document.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button href={resume.file} download>
                  <DownloadIcon size={16} />
                  Download resume
                </Button>
                <Button href={resume.file} variant="secondary">
                  <ExternalLinkIcon size={16} />
                  View resume
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}