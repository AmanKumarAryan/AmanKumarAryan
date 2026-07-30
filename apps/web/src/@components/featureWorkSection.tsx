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
          TECH THAT GETS ME <br /> THROUGH THE DAY
        </p>
        <div className="border w-9/10 absolute bottom-10 left-1/2 -translate-x-1/2"></div>
      </div>
      <Section id="projects" className="py-28 md:py-40">
        <motion.div {...fadeUp}><Eyebrow>Selected work</Eyebrow></motion.div>
        <motion.h2 {...fadeUp} className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
          A few things<br />I'm proud of.
        </motion.h2>

        <div className="mt-16 space-y-8 md:space-y-16">
          {items.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-muted ring-1 ring-black/[0.06]">
                <div className="aspect-[16/10] overflow-hidden">
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex gap-3">
                    <a href="#" className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium inline-flex items-center gap-1.5"><ArrowUpRight className="w-4 h-4" /> Code</a>
                    <a href="#" className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium inline-flex items-center gap-1.5">Live <ArrowUpRight className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="text-xs text-muted-foreground">0{i + 1} — Project</div>
                <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full ring-1 ring-black/10 text-foreground/70">{s}</span>
                  ))}
                </div>
                <div className="mt-8 flex gap-3">
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent"><ArrowUpRight className="w-4 h-4" /> GitHub</a>
                  <span className="text-muted-foreground/40">·</span>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent">Live demo <ArrowUpRight className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>

  );
}