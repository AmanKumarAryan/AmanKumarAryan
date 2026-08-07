import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FaXTwitter, FaGithub, FaCode } from "react-icons/fa6";
import { Eyebrow, fadeUp, Section } from "../@core";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h3 className="flex items-center gap-2 text-accent font-anton text-xl md:text-2xl tracking-tight uppercase">
        {children}
    </h3>
);

function FlipPortrait() {
    const [flipped, setFlipped] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (hovered) return;
        const id = setInterval(() => setFlipped((f) => !f), 5000);
        return () => clearInterval(id);
    }, [hovered]);

    return (
        <div
            className="relative mx-auto lg:mx-0 [perspective:2000px] max-w-sm"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setFlipped((f) => !f)}
        >
            <div
                className="relative transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer"
                style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
                {/* Front — photo */}
                <div
                    className="[backface-visibility:hidden]"
                    style={{ transform: "rotateY(0deg)" }}
                >
                    <img
                        src="./assets/profileAnime.jpg"
                        alt="Aryan"
                        className="w-full h-auto object-cover rounded-3xl ring-1 ring-black/10"
                    />
                </div>

                {/* Back — proof card */}
                <div
                    className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-center items-center gap-4 p-10 bg-accent text-white rounded-3xl text-center"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <span className="font-anton text-2xl md:text-3xl tracking-tight uppercase">
                        Aman Kumar Aryan
                    </span>
                    <span className="text-sm md:text-base text-white/90 font-baloo">
                        AI/ML engineer in the making · building in public
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/80">
                        <FaCode className="w-4 h-4" /> Python → PyTorch → Agents
                    </span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/60">
                        tap to flip
                    </span>
                </div>
            </div>
        </div>
    );
}

export function About() {
    const education = [
        { degree: "Class 10 (CBSE)", school: "Bihar, India", time: "Current" },
        { degree: "Self-taught AI/ML curriculum", school: "Python → PyTorch → Transformers → LLM agents", time: "Ongoing" },
    ];
    const experience = [
        {
            role: "AI / ML Engineering",
            time: "Ongoing",
            company: "Self-directed",
            description: "Computer vision with PyTorch — CNNs, transfer learning and class-imbalanced classification on medical datasets.",
        },
        {
            role: "LLM / Agent Stack",
            time: "Ongoing",
            company: "Self-directed",
            description: "Building with FastAPI, LangChain and LangGraph — moving toward real agent workflows and deployed products.",
        },
        {
            role: "Backend & Cloud",
            time: "Ongoing",
            company: "Self-directed",
            description: "MongoDB, Docker and AWS — learning by containerising and deploying actual projects, not demos.",
        },
    ];
    const languages = [
        { name: "English", level: "Advanced" },
        { name: "Hindi", level: "Native" },
    ];
    const interests = [
        "AI & deep learning",
        "Building products",
        "Entrepreneurship",
        "Content creation",
        "Open-source tech",
        "Finance concepts",
    ];

    return (
        <Section id="about" className="py-32 md:py-48 font-baloo">
            <div className="grid gap-6 lg:grid-cols-2 items-start">
                {/* Left — portrait with decorative shape */}
                <motion.div
                    {...fadeUp}
                    className="lg:mx-auto lg:sticky lg:top-28"
                >
                    <div className="relative mx-auto lg:mx-0 lg:max-w-sm">
                        <FlipPortrait />
                    </div>

                    {/* Contact */}
                    <motion.div {...fadeUp} className="mt-10 px-10">
                        <SectionLabel>Say hello</SectionLabel>
                        <div className="mt-5 space-y-4">
                            <a
                                href="mailto:amankumararyan.dev@gmail.com"
                                className="flex items-center gap-3 text-sm md:text-base text-foreground hover:text-accent transition-colors"
                            >
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white shrink-0">
                                    <img className="h-auto w-5" src={'./assets/social/gmailLogowhite.png'} alt="Aryan" />
                                </span>
                                amankumararyan.dev@gmail.com
                            </a>
                            <a
                                href="https://x.com/AmanAryan__" target="_blank"
                                className="flex items-center gap-3 text-sm md:text-base text-foreground hover:text-accent transition-colors"
                            >
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white shrink-0">
                                    <FaXTwitter className="w-4 h-4" />
                                </span>
                                X (Twitter)
                            </a>
                            <a
                                href="https://github.com/AmanKumarAryan" target="_blank"
                                className="flex items-center gap-3 text-sm md:text-base text-foreground hover:text-accent transition-colors"
                            >
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white shrink-0">
                                    <FaGithub className="w-4 h-4" />
                                </span>
                                GitHub
                            </a>
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div {...fadeUp} className="mt-10 px-10">
                        <SectionLabel>Words I speak</SectionLabel>
                        <div className="mt-5 max-w-xs space-y-3">
                            {languages.map((l) => (
                                <div
                                    key={l.name}
                                    className="flex items-baseline justify-between border-b border-accent/15 pb-2.5"
                                >
                                    <span className="text-sm md:text-base text-foreground">{l.name}</span>
                                    <span className="text-sm md:text-base font-anton  text-accent">{l.level}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right — content */}
                <div className="flex flex-col">
                    <motion.div {...fadeUp}>
                        <Eyebrow>About me</Eyebrow>
                    </motion.div>
                    <motion.h2
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.05 }}
                        className="mt-6 text-4xl md:text-6xl font-['Anton'] tracking-tight text-accent normal-case"
                    >
                        A quiet obsession<br />with intelligent systems.
                    </motion.h2>
                    <motion.p
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.1 }}
                        className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                    >
                        I&apos;m Aryan — a Class 10 student and self-taught AI/ML engineer based in Bihar.
                        My days go from school math to deep learning: Python, PyTorch, transformers,
                        then the agent stack — FastAPI, LangChain, LangGraph, Docker, AWS.
                        I learn by building real things, and I&apos;m working toward an AI engineering
                        seat at NUS Singapore (2029–2030 intake).
                    </motion.p>

                    <motion.div
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.15 }}
                        className="mt-10 h-0.5 bg-accent"
                    />

                    {/* Education */}
                    <motion.div {...fadeUp} className="mt-10">
                        <SectionLabel>Where I am now</SectionLabel>
                        <div className="mt-5 space-y-5">
                            {education.map((e) => (
                                <div key={e.degree} className="">
                                    <div className="min-w-0">
                                        <div className="font-semibold text-foreground">{e.degree}</div>
                                        <div className="text-sm text-muted-foreground">{e.school} {e.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div {...fadeUp} className="mt-10">
                        <SectionLabel>On the grind</SectionLabel>
                        <div className="mt-5 space-y-7">
                            {experience.map((e) => (
                                <div key={e.role + e.time} className="grid grid-cols-12 gap-3">
                                    <div className="col-span-4">
                                        <div className="font-semibold  text-foreground text-sm md:text-base leading-snug">
                                            {e.role}
                                        </div>
                                        <div className="text-xs md:text-sm text-muted-foreground mt-1">
                                            {e.time}
                                        </div>
                                    </div>
                                    <div className="min-w-0 col-span-8">
                                        <div className="font-semibold text-foreground">{e.company}</div>
                                        <div className="text-sm text-muted-foreground mt-1">{e.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Interests */}
                    <motion.div {...fadeUp} className="mt-10">
                        <SectionLabel>Off the clock</SectionLabel>
                        <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 max-w-xl">
                            {interests.map((interest) => (
                                <li
                                    key={interest}
                                    className="flex items-center gap-2.5 text-sm md:text-base text-foreground"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                    {interest}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}