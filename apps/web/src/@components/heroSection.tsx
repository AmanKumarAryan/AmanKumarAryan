
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Section } from "../@core/Section";
import { fadeUp } from "../@core/fadeUp";





function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-6 h-px bg-accent" />
            {children}
        </div>
    );
}

export default function Hero() {
    return (
        <Section id="home" className="pt-40 pb-32 md:pt-48 md:pb-40">
            <motion.div {...fadeUp}>
                <Eyebrow>Full-stack developer · India</Eyebrow>
            </motion.div>
            <motion.h1
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="mt-8 text-[13vw] md:text-[9vw] leading-[0.95] font-semibold tracking-[-0.04em]"
            >
                Building quiet<br />
                interfaces that <span className="font-hand text-accent italic font-normal">move</span>.
            </motion.h1>
            <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="mt-12 grid md:grid-cols-3 gap-10 items-end"
            >
                <p className="md:col-span-2 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    I'm Kartik — a developer and designer crafting minimal, premium products
                    across the modern web. React, Node, and everything in between.
                </p>
                <div className="flex items-center gap-3">
                    <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-accent transition-colors">
                        See work <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full ring-1 ring-black/10 text-sm font-medium hover:ring-black transition">
                        Contact
                    </a>
                </div>
            </motion.div>
        </Section>
    );
}
