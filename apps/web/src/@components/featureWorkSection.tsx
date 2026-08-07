import { Eyebrow, fadeUp, Section } from "../@core";
import { motion } from 'motion/react';
import { Spider } from "./spider";

export function Projects() {
  return (
    <>
      <div className="h-screen w-full m-0 bg-accent relative flex justify-center items-center">
        <p className="font-anton text-background text-8xl text-center">
          WORK WORTH A LOOK
        </p>
        <div className="border w-9/10 absolute bottom-10 left-1/2 -translate-x-1/2"></div>
      </div>

      <Section id="projects" className="py-28 md:py-40">
        <div className="flex flex-col items-start gap-8 py-20 min-h-120 justify-center">
          <div className="self-center mb-8">
            <Spider variant="web" />
          </div>
          <motion.div {...fadeUp}><Eyebrow>Feature Work</Eyebrow></motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 font-anton text-4xl md:text-6xl tracking-tight text-foreground"
          >
            IN THE WORKSHOP.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I&apos;m building right now — and these projects will land here soon.
            AI products, deep learning experiments, and real deployments.
            Check back, or reach out if you want early access.
          </motion.p>
        </div>
      </Section>
    </>
  );
}
