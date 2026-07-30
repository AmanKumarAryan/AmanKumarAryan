import { Eyebrow, fadeUp, Section } from "../@core";
import { ArrowUpRight } from "lucide-react";
import { motion } from 'motion/react';

export function Projects() {
  const items = [
    { name: "Halogen Analytics", desc: "A minimalist analytics dashboard for indie makers, focused on the numbers that actually matter.", stack: ["Next.js", "Postgres", "Prisma"] },
    { name: "Fjord Mobile", desc: "A calm daily journaling app for iOS and Android with encrypted sync.", stack: ["React Native", "Firebase"] },
    { name: "Atlas Agents", desc: "A LangGraph-based multi-agent system for research and writing workflows.", stack: ["Python", "LangGraph", "FastAPI"] },
    { name: "Portal Commerce", desc: "A headless storefront focused on typography, whitespace and speed.", stack: ["Next.js", "Tailwind", "Stripe"] },
  ];
  return (
    <>
      <div className="h-screen w-full m-0 bg-accent relative flex justify-center items-center">
        <p className="font-anton text-background text-8xl text-center">
          WORK WORTH A LOOK
        </p>
        <div className="border w-9/10 absolute bottom-10 left-1/2 -translate-x-1/2"></div>
      </div>
      <Section id="projects" className="py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-20">
          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <motion.div {...fadeUp}><Eyebrow>Technologies</Eyebrow></motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <motion.h2
                {...fadeUp}
                className="mt-6 font-anton text-4xl tracking-tight text-foreground``"
              >
                TECHFOLIO
              </motion.h2>
              <motion.p transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                A curated stack I've refined project after project — chosen for clarity,
                performance and long-term maintainability.
              </motion.p>
              <motion.div>

              </motion.div>

            </motion.div>
          </div>

          {/* Grid */}
          <div className="lg:col-span-8 grid grid-cols-12 gap-2">
            <div className='col-span-5 min-h-130 flex flex-col gap-2'>
              <div className="min-h-1/2 bg-yellow-400 rounded-xl">

              </div>
              <div className="min-h-1/2 bg-blue-400 rounded-xl">

              </div>
            </div>
            <div className="col-span-7 bg-red-500 rounded-xl">

            </div>
          </div>
        </div>
      </Section>
    </>

  );
}