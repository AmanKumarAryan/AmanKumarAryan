'use client'

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
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

export function Hero() {
    return (
        <Section id="home" className="pt-40 pb-32 md:pt-48 md:pb-40">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Text */}
                <div className="lg:col-span-7">
                    <motion.div {...fadeUp}>
                        <Eyebrow>AI/ML engineer in the making · Bihar, India</Eyebrow>
                    </motion.div>
                    <motion.h1
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.1 }}
                        className="mt-8 text-[13vw] md:text-[9vw] lg:text-[7vw] leading-[0.95] font-semibold tracking-[-0.04em]"
                    >
                        Building intelligent<br />
                        systems that <span className="font-hand text-accent italic font-normal">learn</span>.
                    </motion.h1>
                    <motion.div
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.2 }}
                        className="mt-12 grid md:grid-cols-3 gap-10 items-end"
                    >
                        <p className="md:col-span-2 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            I&apos;m Aryan — a self-taught AI/ML engineer from Bihar, grinding from
                            Python and PyTorch to agents and production deployments. Class 10
                            by day, deep learning by night.
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
                </div>

                {/* Portrait */}
                <div className="lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                        className="relative mx-auto w-full max-w-sm lg:max-w-md"
                    >
                        <div className="absolute -inset-4 rounded-[2rem] bg-accent/15 rotate-3" />
                        <div className="absolute -inset-4 rounded-[2rem] bg-foreground/5 -rotate-2" />
                        <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-black/10 shadow-2xl">
                            <img
                                src="./assets/heroImage.png"
                                alt="Aryan"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-5 -left-5 rounded-2xl bg-background ring-1 ring-black/10 shadow-xl px-5 py-3">
                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                Currently
                            </div>
                            <div className="font-anton text-lg text-accent tracking-tight">
                                BUILDING IN PUBLIC
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}