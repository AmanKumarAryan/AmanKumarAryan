'use client'

import { Eyebrow, fadeUp, Section } from "../@core";
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react';
import { GitHubContributionsGraph } from "./ghContributionsGraph";
import { GrindCards } from "./grindCards";
import { GITHUB_USERNAME } from "../@lib/github";

export function GitHub() {
  return (
    <>
      <div className="h-screen w-full m-0 bg-accent relative flex justify-center items-center">
        <p className="font-anton text-background text-8xl text-center">
          THE GRIND
        </p>
        <div className="border w-9/10 absolute bottom-10 left-1/2 -translate-x-1/2"></div>
      </div>

      <Section id="github" className="py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-20">
          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <motion.div {...fadeUp}><Eyebrow>Open Source</Eyebrow></motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <motion.h2 className="mt-6 font-anton text-4xl md:text-5xl tracking-tight text-foreground">
                WHERE I GRIND
              </motion.h2>
              <motion.p transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Live, off the actual platforms. GitHub commits by month,
                LeetCode problem-solving, and Deep-ML fundamentals — every number
                here is pulled from the real account.
              </motion.p>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-10"
            >
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                View profile <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.p>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-2xl border border-border/60 bg-card p-6 md:p-8"
            >
              <GitHubContributionsGraph />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <GrindCards />
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}