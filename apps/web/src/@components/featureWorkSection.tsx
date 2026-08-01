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
            <motion.div {...fadeUp}><Eyebrow>Feature Work</Eyebrow></motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <motion.h2 {...fadeUp} className="mt-6 font-anton text-4xl tracking-tight text-foreground">
                PROJECTFOLIO
              </motion.h2>
              <motion.p transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                A curated stack I've refined project after project — chosen for clarity,
                performance and long-term maintainability.
              </motion.p>
            </motion.div>
            <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className="mt-10 text-muted-foreground"
              >
                 2021 – 2026
              </motion.p>
          </div>

          {/* Collage grid */}
          <div className="lg:col-span-8 grid grid-cols-12 gap-2">

            {/* right side first part */}
            <div className="col-span-4 min-h-130 flex flex-col gap-2">

              {/* Halogen Analytics — dashboard mockup */}
              <motion.div
                {...fadeUp}
                className="bg-foreground rounded-xl relative overflow-hidden p-5 flex flex-col"
              >
                <div className="flex justify-between items-center gap-1.5 mb-4">
                  <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500/80" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
                  <div className="h-2 w-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-[10px] uppercase tracking-widest text-background">Clarix AI</span>
                </div>
                <svg viewBox="0 0 200 90" className="w-full flex-1" preserveAspectRatio="none">
                  <polyline
                    points="0,70 20,55 40,60 60,35 80,42 100,20 120,30 140,15 160,25 180,8 200,18"
                    fill="none"
                    stroke="currentColor"
                    className="text-[#0dff87]/70"
                    strokeWidth="2"
                  />
                  <polyline
                    points="0,80 20,78 40,65 60,68 80,55 100,58 120,45 140,50 160,38 180,42 200,30"
                    fill="none"
                    stroke="currentColor"
                    className="text-white/80"
                    strokeWidth="2"
                  />
                </svg>
                <div className="mt-3 flex gap-4">
                  <div>
                    <div className="text-background text-xl font-anton">42.8k</div>
                    <div className="text-background/40 text-[10px] uppercase tracking-wide">MRR</div>
                  </div>
                  <div>
                    <div className="text-background text-xl font-anton">3.1%</div>
                    <div className="text-background/40 text-[10px] uppercase tracking-wide">Churn</div>
                  </div>
                </div>
              </motion.div>

              {/* Fjord Mobile — phone mockup */}
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className="bg-muted rounded-xl relative overflow-hidden"
              >
                <img className="inset-0 w-full h-full object-cover" src="./projectGallary/clarix/clarix1.jpg" alt="" />
              </motion.div>

              <motion.div className="flex gap-1">
                <div className="w-full rounded-lg h-15 bg-[#0dff87]"></div>
                <div className="w-full rounded-lg h-15 bg-white border-gray-300 border"></div>
                <div className="w-full rounded-lg h-15 bg-black"></div>
              </motion.div>
            </div>

            {/* Portal Commerce — browser mockup, with Atlas Agents pill strip pinned to the bottom edge */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="col-span-8 bg-accent rounded-xl relative overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-background/10">
                <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-background/30" />
                <span className="ml-3 text-[10px] uppercase tracking-widest text-background/50">Portal Commerce</span>
              </div>

              <div className="flex-1 p-6 grid grid-cols-3 gap-3">
                <div className="col-span-1 rounded-lg bg-background/10 aspect-[3/4]" />
                <div className="col-span-1 rounded-lg bg-background/15 aspect-[3/4]" />
                <div className="col-span-1 rounded-lg bg-background/10 aspect-[3/4]" />
              </div>
              <div className="px-6 pb-4 space-y-1.5">
                <div className="h-2 w-1/3 rounded-full bg-background/20" />
                <div className="h-2 w-1/4 rounded-full bg-background/10" />
              </div>

              {/* Atlas Agents pill strip */}
              <div className="mt-auto px-6 py-4 border-t border-background/10 flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-widest text-background/50">Atlas Agents</span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {["Python", "LangGraph", "FastAPI"].map((s) => (
                    <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-background/10 text-background/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}