'use client'

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import {
    SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPython,
    SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiDocker, SiGit,
    SiGithub, SiTailwindcss, SiRedux, SiLangchain, SiFirebase, SiHtml5,
    SiCss, SiJavascript, SiLinux,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { fadeUp } from "../@core/fadeUp";
import { Section } from "../@core/Section";
import { Eyebrow } from "../@core/eyeBlow";
import { useState } from "react";

type Tech = {
    name: string;
    desc: string;
    projects: string[];
    years: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
};
const TECHS: Tech[] = [
    { name: "TypeScript", desc: "Typed superset of JavaScript.", projects: ["humanOS", "NanoFactz"], years: "4y", Icon: SiTypescript, color: "#3178C6" },
    { name: "React", desc: "UI library for composable interfaces.", projects: ["humanOS", "Portfolio"], years: "4y", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", desc: "Fullstack React framework.", projects: ["Marketplace", "Blog"], years: "3y", Icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", desc: "Async JS runtime.", projects: ["APIs", "CLIs"], years: "4y", Icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Express", desc: "Minimal Node HTTP framework.", projects: ["REST APIs"], years: "3y", Icon: SiExpress, color: "#000000" },
    { name: "Python", desc: "General purpose language.", projects: ["ML tools"], years: "3y", Icon: SiPython, color: "#3776AB" },
    { name: "FastAPI", desc: "Modern Python APIs.", projects: ["AI backends"], years: "2y", Icon: SiFastapi, color: "#009688" },
    { name: "PostgreSQL", desc: "Relational database.", projects: ["Most projects"], years: "3y", Icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", desc: "Document database.", projects: ["Realtime apps"], years: "3y", Icon: SiMongodb, color: "#47A248" },
    { name: "Redis", desc: "In-memory data store.", projects: ["Caching"], years: "2y", Icon: SiRedis, color: "#DC382D" },
    { name: "Prisma", desc: "Typesafe ORM.", projects: ["SaaS apps"], years: "2y", Icon: SiPrisma, color: "#2D3748" },
    { name: "Docker", desc: "Containerised runtimes.", projects: ["Deployments"], years: "3y", Icon: SiDocker, color: "#2496ED" },
    { name: "Git", desc: "Version control.", projects: ["Everything"], years: "5y", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", desc: "Collaboration platform.", projects: ["OSS"], years: "5y", Icon: SiGithub, color: "#181717" },
    { name: "Tailwind CSS", desc: "Utility-first CSS.", projects: ["Portfolio", "humanOS"], years: "3y", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Redux", desc: "Predictable state.", projects: ["Dashboards"], years: "3y", Icon: SiRedux, color: "#764ABC" },
    { name: "LangChain", desc: "LLM app framework.", projects: ["AI agents"], years: "1y", Icon: SiLangchain, color: "#1C3C3C" },
    { name: "LangGraph", desc: "Agentic orchestration.", projects: ["Multi-agent"], years: "1y", Icon: TbBrandFramerMotion, color: "#5863ED" },
    { name: "Firebase", desc: "Backend as a service.", projects: ["MVPs"], years: "3y", Icon: SiFirebase, color: "#DD2C00" },
    { name: "Linux", desc: "Daily driver.", projects: ["Everything"], years: "5y", Icon: SiLinux, color: "#000000" },
    { name: "HTML", desc: "The web's structure.", projects: ["All"], years: "6y", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", desc: "The web's style.", projects: ["All"], years: "6y", Icon: SiCss, color: "#1572B6" },
    { name: "JavaScript", desc: "Language of the web.", projects: ["All"], years: "5y", Icon: SiJavascript, color: "#F7DF1E" },
];

export function Technologies() {
    const [hover, setHover] = useState<number | null>(null);
    return (
        <Section id="technologies" className="py-32 md:py-48">
            <motion.div {...fadeUp}><Eyebrow>Technologies</Eyebrow></motion.div>
            <motion.h2
                {...fadeUp}
                className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl text-accent"
            >
                The tools I reach<br />for, every day.
            </motion.h2>
            <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
                A curated stack I've refined project after project — chosen for clarity,
                performance and long-term maintainability.
            </motion.p>

            <div className="mt-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2 md:gap-4">
                {TECHS.map((t, i) => {
                    const Icon = t.Icon;
                    return (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (i % 12) * 0.025, ease: [0.22, 1, 0.36, 1] as const }}
                            onHoverStart={() => setHover(i)}
                            onHoverEnd={() => setHover(null)}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.06 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                                className="group aspect-square rounded-2xl flex items-center justify-center cursor-default transition-colors ring-1 ring-transparent hover:ring-accent/30 hover:bg-card"
                            >
                                <Icon
                                    className="w-8 h-8 md:w-10 md:h-10 transition-colors"
                                    style={{ color: t.color }}
                                />
                            </motion.div>

                            <AnimatePresence>
                                {hover === i && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.94, y: 8, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 0.96, y: 4, filter: "blur(6px)" }}
                                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
                                        className="absolute z-30 left-1/2 -translate-x-1/2 top-full mt-3 w-64 pointer-events-none"
                                    >
                                        <div
                                            className="rounded-2xl p-4 ring-1 ring-black/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
                                            style={{
                                                background: "color-mix(in oklab, var(--background) 60%, transparent)",
                                                backdropFilter: "blur(24px) saturate(160%)",
                                            }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-card ring-1 ring-black/5 flex items-center justify-center">
                                                    <Icon className="w-5 h-5" style={{ color: t.color }} />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold">{t.name}</div>
                                                    <div className="text-[11px] text-accent font-medium">{t.years} · experience</div>
                                                </div>
                                            </div>
                                            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                                            <div className="mt-3 pt-3 border-t border-black/5">
                                                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Used in</div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {t.projects.map((p) => (
                                                        <span key={p} className="text-[11px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{p}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}