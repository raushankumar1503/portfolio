"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/site/icons";
import { contact, links } from "@/content/portfolio";

/**
 * Contact — professional section. Honest by design: the form does NOT
 * fake a send; submitting shows a clear notice until a backend is wired
 * in. Every real contact method (email, phone, GitHub, LinkedIn) is a
 * working link alongside the form.
 */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const phoneHref = `tel:${links.phone.replace(/[^+\d]/g, "")}`;

  const socials = [
    { label: "Email", value: links.email, icon: MailIcon, href: `mailto:${links.email}` },
    { label: "Phone", value: links.phone, icon: PhoneIcon, href: phoneHref },
    { label: "GitHub", value: links.github, icon: GitHubIcon, href: links.github },
    { label: "LinkedIn", value: links.linkedin, icon: LinkedInIcon, href: links.linkedin },
  ].filter((s) => s.label === "Email" || s.label === "Phone" || s.href.startsWith("http"));

  return (
    <section id="contact" className="py-24 sm:py-28" aria-labelledby="contact-heading">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div>
            <SectionHeading id="contact-heading" index="09" title={contact.heading} lede={contact.intro} />

            <ul className="mt-10 flex flex-col gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex items-center gap-3 text-ink underline underline-offset-4 decoration-line-strong transition-colors hover:text-accent"
                  >
                    <s.icon size={18} />
                    <span>{s.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-describedby="contact-note">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-ink-soft">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="h-11 rounded-[2px] border border-line-strong bg-paper-raised px-4 text-ink placeholder:text-ink-faint/60 focus:border-ink"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-ink-soft">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="h-11 rounded-[2px] border border-line-strong bg-paper-raised px-4 text-ink placeholder:text-ink-faint/60 focus:border-ink"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm">
              <span className="text-ink-soft">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="How can I help?"
                className="rounded-[2px] border border-line-strong bg-paper-raised px-4 py-3 text-ink placeholder:text-ink-faint/60 focus:border-ink"
              />
            </label>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-sm bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
              >
                Send message
              </button>
              {submitted && (
                <p id="contact-note" role="status" className="text-sm text-accent-deep">
                  {contact.note}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
