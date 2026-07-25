'use client'

import { motion, AnimatePresence } from "motion/react";
import {
    SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPython,
    SiFastapi, SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiDocker, SiGit,
    SiGithub, SiTailwindcss, SiRedux, SiLangchain, SiFirebase, SiHtml5,
    SiCss, SiJavascript, SiLinux,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { ArrowUpRight, X } from "lucide-react";
import { fadeUp } from "../@core/fadeUp";
import { Section } from "../@core/Section";
import { Eyebrow } from "../@core/eyeBlow";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Tech = {
    name: string;
    desc: string;
    projects: string[];
    years: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
    demoNote?: string; // placeholder — replace with real project detail later
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

const VISIBLE_COUNT = 9; // 3x3, matches the reference grid
const COLS = 3;

function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

function TechCell({ tech, active, onHover }: { tech: Tech; active: boolean; onHover: (t: Tech | null) => void }) {
    const Icon = tech.Icon;

    return (
        <div
            onMouseEnter={() => onHover(tech)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(tech)}
            onBlur={() => onHover(null)}
            tabIndex={0}
            className="relative"
        >
            <motion.div
                animate={{ scale: active ? 1.08 : 1, opacity: active ? 1 : 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                className="aspect-square flex items-center justify-center cursor-default"
            >
                <Icon
                    className="w-8 h-8 md:w-10 md:h-10 transition-colors"
                    style={{ color: tech.color }}
                />
            </motion.div>
        </div>
    );
}

function DashedGrid({ techs, hovered, onHover }: { techs: Tech[]; hovered: Tech | null; onHover: (t: Tech | null) => void }) {
    const rows = chunk(techs, COLS);
    return (
        <div className="rounded-2xl divide-y divide-dashed divide-border/60 overflow-visible">
            {rows.map((row, ri) => (
                <div
                    key={ri}
                    className="grid divide-x divide-dashed divide-border/60"
                    style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
                >
                    {row.map((t) => (
                        <TechCell key={t.name} tech={t} active={hovered?.name === t.name} onHover={onHover} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function SpotlightOverlay({ tech }: { tech: Tech | null }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {tech && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                    className="fixed inset-0 z-[100] pointer-events-none"
                >
                    {/* soft scrim, only near the panel — not a full-screen dim */}
                    <div
                        className="absolute inset-y-0 left-0 w-full md:w-[45vw]"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 100%)",
                        }}
                    />

                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-10">
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, x: -32, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -24, filter: "blur(8px)" }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] as const }}
                            className="w-72 md:w-80 rounded-3xl p-7 ring-1 ring-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.55)]"
                            style={{
                                background: "color-mix(in oklab, var(--background) 75%, transparent)",
                                backdropFilter: "blur(28px) saturate(180%)",
                                WebkitBackdropFilter: "blur(28px) saturate(180%)",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-card ring-1 ring-black/5 flex items-center justify-center shrink-0">
                                    <tech.Icon className="w-7 h-7" style={{ color: tech.color }} />
                                </div>
                                <div>
                                    <div className="text-xl font-semibold tracking-tight">{tech.name}</div>
                                    <div className="text-xs text-accent font-medium mt-0.5">{tech.years} · experience</div>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-border/40">
                                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                    Used in
                                </div>
                                {/* Demo placeholder — swap for real project details later */}
                                <p className="text-sm text-muted-foreground leading-relaxed italic">
                                    Project details coming soon.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

function AllTechDialog({
    techs,
    onClose,
    hovered,
    onHover,
}: {
    techs: Tech[];
    onClose: () => void;
    hovered: Tech | null;
    onHover: (t: Tech | null) => void;
}) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50"
                style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl ring-1 ring-black/10 shadow-2xl"
                style={{
                    background: "color-mix(in oklab, var(--background) 92%, transparent)",
                    backdropFilter: "blur(28px) saturate(160%)",
                    WebkitBackdropFilter: "blur(28px) saturate(160%)",
                }}
            >
                <div className="flex items-center justify-between px-6 md:px-8 pt-6 pb-4 border-b border-border/50">
                    <div>
                        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                            Full stack
                        </div>
                        <h3 className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">
                            The rest of the toolkit
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="w-9 h-9 rounded-full flex items-center justify-center ring-1 ring-border/60 hover:bg-card transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="px-6 md:px-8 py-6 overflow-y-auto" style={{ maxHeight: "calc(85vh - 92px)" }}>
                    <DashedGrid techs={techs} hovered={hovered} onHover={onHover} />
                </div>
            </motion.div>
        </motion.div>
    );
}

export function Technologies() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [hoveredTech, setHoveredTech] = useState<Tech | null>(null);
    const visible = TECHS.slice(0, VISIBLE_COUNT);
    const remaining = TECHS.slice(VISIBLE_COUNT);

    return (
        <Section id="technologies" className="py-32 md:py-48">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Sidebar */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                    <motion.div {...fadeUp}><Eyebrow>Technologies</Eyebrow></motion.div>
                    <motion.h2
                        {...fadeUp}
                        className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-accent"
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
                    <motion.p
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.15 }}
                        className="mt-10 text-sm text-muted-foreground"
                    >
                        {TECHS.length} tools · 2021 – 2026
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                    >
                        <DashedGrid techs={visible} hovered={hoveredTech} onHover={setHoveredTech} />
                    </motion.div>

                    {remaining.length > 0 && (
                        <motion.div
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.1 }}
                            className="mt-8 flex justify-center lg:justify-start"
                        >
                            <button
                                onClick={() => setDialogOpen(true)}
                                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-border/60 hover:bg-card transition-colors"
                            >
                                See all {TECHS.length} technologies
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {dialogOpen && (
                    <AllTechDialog
                        techs={remaining}
                        onClose={() => setDialogOpen(false)}
                        hovered={hoveredTech}
                        onHover={setHoveredTech}
                    />
                )}
            </AnimatePresence>

            <SpotlightOverlay tech={hoveredTech} />
        </Section>
    );
}