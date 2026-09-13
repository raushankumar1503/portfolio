"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/site/Button";
import { ArrowDownIcon } from "@/components/site/icons";
import { heroCta, profile } from "@/content/portfolio";

/**
 * Lazy-load the 3D scene after mount (ssr:false keeps WebGL out of the
 * server render and out of the initial critical path). Renders nothing
 * synchronous; the canvas is progressively enhanced.
 */
const HeroCanvas = dynamic(
  () => import("@/components/hero/HeroCanvas").then((m) => m.default),
  {
    ssr: false,
    loading: () => <div className="h-full w-full" aria-hidden="true" />,
  },
);

/**
 * Hero — strong first impression. Typography is the primary layer; the
 * 3D canvas is a subtle supporting depth field in its own framed panel.
 */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
      aria-label="Introduction"
    >
      <Container className="grid min-h-[calc(100dvh-4rem)] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Text column */}
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
          className="pt-24 pb-16 lg:py-0"
        >
          <motion.h1
            variants={reduce ? undefined : item}
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-5 font-display text-xl text-ink-soft sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-6 max-w-xl text-base text-ink-faint measure"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={heroCta.primary.href}>{heroCta.primary.label}</Button>
            <Button href={heroCta.secondary.href} variant="secondary" download>
              {heroCta.secondary.label}
            </Button>
          </motion.div>

          <motion.a
            variants={reduce ? undefined : item}
            href="#about"
            aria-label="Scroll to about section"
            className="mt-14 inline-flex items-center gap-2 text-sm text-ink-faint transition-colors hover:text-ink"
          >
            Scroll
            <ArrowDownIcon size={16} />
          </motion.a>
        </motion.div>

        {/* 3D panel */}
        <div className="relative aspect-square w-full lg:aspect-[4/5]">
          <div className="absolute inset-0 rounded-[2px] border border-line">
            <HeroCanvas />
          </div>
        </div>
      </Container>
    </section>
  );
}