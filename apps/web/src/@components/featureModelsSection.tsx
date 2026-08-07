'use client'

import { Eyebrow, fadeUp, Section } from "../@core";
import { motion } from 'motion/react'
import { Spider } from "./spider";
import { HfContent } from "./hfModelsGrid";

export function Models() {
  return (
    <>
      <div className="h-screen w-full m-0 bg-accent relative flex justify-center items-center">
        <p className="font-anton text-background text-8xl text-center">
          MODELS &amp; DATA
        </p>
        <div className="border w-9/10 absolute bottom-10 left-1/2 -translate-x-1/2"></div>
      </div>

      <Section id="models" className="py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-20">
          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <motion.div {...fadeUp}><Eyebrow>Hugging Face</Eyebrow></motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <motion.h2 className="mt-6 font-anton text-4xl md:text-5xl tracking-tight text-foreground">
                MODELS & DATASETS
              </motion.h2>
              <motion.p transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Everything I&apos;m training and publishing — fine-tuned models
                and datasets, pulled live from my Hugging Face account.
              </motion.p>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-10 text-muted-foreground"
            >
              <a
                href="https://huggingface.co/AmanKumarAryan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                huggingface.co/AmanKumarAryan →
              </a>
            </motion.p>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <HfContent />
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}