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

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <motion.h2 {...fadeUp} className="mt-6 font-anton text-4xl tracking-tight text-foreground">
                TECHFOLIO
              </motion.h2>
              <motion.p transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                A curated stack I've refined project after project — chosen for clarity,
                performance and long-term maintainability.
              </motion.p>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-10 space-y-6">
                {items.map((item) => (
                  <div key={item.name} className="group border-t border-foreground/10 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-anton text-lg tracking-tight text-foreground">{item.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-md">{item.desc}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {item.stack.map((s) => (
                            <span key={s} className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-foreground/15 text-muted-foreground">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowUpRight className="shrink-0 mt-1 h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Collage grid */}
          <div className="lg:col-span-8 grid grid-cols-12 gap-2">

            <div className="col-span-5 min-h-130 flex flex-col gap-2">

              {/* Halogen Analytics — dashboard mockup */}
              <motion.div
                {...fadeUp}
                className="min-h-1/2 bg-foreground rounded-xl relative overflow-hidden p-5 flex flex-col"
              >
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="h-2 w-2 rounded-full bg-background/30" />
                  <span className="h-2 w-2 rounded-full bg-background/30" />
                  <span className="h-2 w-2 rounded-full bg-background/30" />
                  <span className="ml-2 text-[10px] uppercase tracking-widest text-background/50">Halogen Analytics</span>
                </div>
                <svg viewBox="0 0 200 90" className="w-full flex-1" preserveAspectRatio="none">
                  <polyline
                    points="0,70 20,55 40,60 60,35 80,42 100,20 120,30 140,15 160,25 180,8 200,18"
                    fill="none"
                    stroke="currentColor"
                    className="text-background/70"
                    strokeWidth="2"
                  />
                  <polyline
                    points="0,80 20,78 40,65 60,68 80,55 100,58 120,45 140,50 160,38 180,42 200,30"
                    fill="none"
                    stroke="currentColor"
                    className="text-background/30"
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
                className="min-h-1/2 bg-muted rounded-xl relative overflow-hidden flex items-center justify-center py-4"
              >
                <div className="h-full aspect-[9/17] bg-foreground rounded-2xl p-2 flex flex-col shadow-lg">
                  <div className="mx-auto w-10 h-1.5 rounded-full bg-background/20 mb-2" />
                  <div className="flex-1 bg-background/10 rounded-xl p-2 flex flex-col gap-1.5">
                    <div className="h-2 w-2/3 rounded-full bg-background/30" />
                    <div className="h-2 w-1/2 rounded-full bg-background/20" />
                    <div className="flex-1 mt-1 rounded-lg bg-background/10 border border-background/10" />
                  </div>
                </div>
                <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-widest text-muted-foreground">Fjord Mobile</span>
              </motion.div>
            </div>

            {/* Portal Commerce — browser mockup, with Atlas Agents pill strip pinned to the bottom edge */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="col-span-7 bg-accent rounded-xl relative overflow-hidden flex flex-col"
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