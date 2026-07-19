import { motion } from "motion/react";
import { Mail, Phone, Sparkles } from "lucide-react";
import { Eyebrow, fadeUp, Section } from "../@core";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h3 className="flex items-center gap-2 text-accent font-anton text-xl md:text-2xl tracking-tight uppercase">
        {children}
        {/* <Sparkles className="w-4 h-4 md:w-5 md:h-5 shrink-0" strokeWidth={2.5} /> */}
    </h3>
);

export function About() {
    const education = [
        { degree: "B.Tech, Computer Science Engineering", school: "Hi-Tech Institute of Engineering and Technology (AKTU)", time: "2022 — 2025" },
        { degree: "Diploma in Engineering", school: "New Era College of Science and Technology (BTEUP)", time: "2019 — 2022" },
        { degree: "High School (CBSE)", school: "Dehradun Public School", time: "2018 — 2019" },
    ];
    const experience = [
        {
            role: "Full Stack Developer",
            time: "July 2025 — Present",
            company: "Code Metrics, Greater Noida",
            description: "Building and shipping full-stack features across web platforms, from APIs to UI.",
        },
        {
            role: "Full Stack Developer",
            time: "Mar 2025 — July 2025",
            company: "Webpristine Technologies, Noida",
            description: "Developed responsive interfaces and REST APIs for client products.",
        },
        {
            role: "Web Development Intern",
            time: "Nov 2024 — Mar 2025",
            company: "Aryson Technologies, Noida",
            description: "Assisted in building and maintaining web applications and internal tools.",
        },
    ];
    const languages = [
        { name: "English", level: "Advanced" },
        { name: "Hindi", level: "Native" },
    ];
    const interests = [
        "Building new things",
        "Playing guitar",
        "Travelling",
        "Watching movies",
        "Gyming",
    ];

    return (
        <Section id="about" className="py-32 md:py-48 font-baloo">
            <div className="grid gap-6 lg:grid-cols-2 items-start">
                {/* Left — portrait with decorative shape */}
                <motion.div
                    {...fadeUp}
                    className="lg:mx-auto lg:sticky lg:top-28"
                >
                    <div className="relative max-w-[280px] mx-auto lg:mx-0">
                        {/* Decorative accent blob */}
                        <div
                            aria-hidden
                            className="absolute -inset-4 md:-inset-5 -z-10"
                            style={{
                                background: "var(--accent)",
                                borderRadius: "48% 52% 55% 45% / 52% 48% 52% 48%",
                                transform: "rotate(-6deg)",
                            }}
                        />
                        <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-muted ring-1 ring-black/5">
                            <img
                                src={'public/assets/portrait.jpg'}
                                alt="Kartik Sharma"
                                className="w-full h-full object-cover"
                                width={1024}
                                height={1280}
                            />
                        </div>
                    </div>

                    {/* Contact */}
                    <motion.div {...fadeUp} className="mt-10">
                        <SectionLabel>Say hello</SectionLabel>
                        <div className="mt-5 space-y-4">
                            <a
                                href="mailto:Contactkartikforwork@gmail.com"
                                className="flex items-center gap-3 text-sm md:text-base text-foreground hover:text-accent transition-colors"
                            >
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white shrink-0">
                                    <Mail className="w-4 h-4" strokeWidth={2.5} />
                                </span>
                                Contactkartikforwork@gmail.com
                            </a>
                            <a
                                href="tel:8810315664"
                                className="flex items-center gap-3 text-sm md:text-base text-foreground hover:text-accent transition-colors"
                            >
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white shrink-0">
                                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                                </span>
                                8810315664
                            </a>
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div {...fadeUp} className="mt-10">
                        <SectionLabel>Words I speak</SectionLabel>
                        <div className="mt-5 max-w-xs space-y-3">
                            {languages.map((l) => (
                                <div
                                    key={l.name}
                                    className="flex items-baseline justify-between border-b border-accent/15 pb-2.5"
                                >
                                    <span className="text-sm md:text-base text-foreground">{l.name}</span>
                                    <span className="text-sm md:text-base font-bold text-accent">{l.level}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right — content */}
                <div className="flex flex-col">
                    <motion.div {...fadeUp}>
                        <Eyebrow className="font-anton tracking-wide">About me</Eyebrow>
                    </motion.div>
                    <motion.h2
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.05 }}
                        className="mt-6 text-4xl md:text-6xl font-['Anton'] tracking-tight text-accent normal-case"
                    >
                        A quiet obsession<br />with the details.
                    </motion.h2>
                    <motion.p
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.1 }}
                        className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                    >
                        I'm Kartik — a full-stack developer based in India. I build products end to end,
                        from multi-tenant SaaS platforms to the APIs and databases underneath them,
                        favouring clarity over noise and systems over one-offs. Most of my work lives at
                        the intersection of Next.js and FastAPI, shipped to production rather than left
                        as a demo.
                    </motion.p>

                    <motion.div
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.15 }}
                        className="mt-10 h-px bg-accent/40"
                    />

                    {/* Education */}
                    <motion.div {...fadeUp} className="mt-10">
                        <SectionLabel>How I got here</SectionLabel>
                        <div className="mt-5 space-y-5">
                            {education.map((e) => (
                                <div key={e.degree} className="grid grid-cols-[7rem_1fr] gap-4 md:gap-6">
                                    <div className="text-xs md:text-sm text-muted-foreground font-medium pt-0.5">
                                        {e.time}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-semibold text-foreground">{e.degree}</div>
                                        <div className="text-sm text-muted-foreground">{e.school}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div {...fadeUp} className="mt-10">
                        <SectionLabel>On the job</SectionLabel>
                        <div className="mt-5 space-y-7">
                            {experience.map((e) => (
                                <div key={e.role + e.time} className="grid grid-cols-[7rem_1fr] gap-4 md:gap-6">
                                    <div className="text-right">
                                        <div className="font-semibold text-foreground text-sm md:text-base leading-snug">
                                            {e.role}
                                        </div>
                                        <div className="text-xs md:text-sm text-muted-foreground mt-1">
                                            {e.time}
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-bold text-foreground">{e.company}</div>
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