import { Eyebrow, fadeUp, Section } from "../@core";
import { motion } from 'motion/react'
import { Spider } from "./spider";

export function Blogs() {
  return (
    <>
      <div className="h-screen w-full m-0 bg-accent relative flex justify-center items-center">
        <p className="font-anton text-background text-8xl text-center">
          WORDS WORTH READING
        </p>
        <div className="border w-9/10 absolute bottom-10 left-1/2 -translate-x-1/2"></div>
      </div>

      <Section id="blogs" className="py-28 md:py-40">
        <div className="relative flex flex-col items-center justify-center gap-8 text-center py-20">
          <Spider />
          <motion.div {...fadeUp}><Eyebrow>Research</Eyebrow></motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="mt-6 font-anton text-5xl md:text-7xl tracking-tight text-foreground"
          >
            COMING SOON.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            My research papers will land here soon — machine learning, deep
            learning and AI engineering, written the way I actually built them.
          </motion.p>
        </div>
      </Section>
    </>
  );
}