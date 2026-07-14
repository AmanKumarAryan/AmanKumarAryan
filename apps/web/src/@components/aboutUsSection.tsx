import { motion } from "motion/react";
import { Eyebrow, fadeUp, Section } from "../@core";


export function About() {
    const experience = [
        { role: "Senior Full-stack Engineer", company: "Halogen Labs", time: "2024 — Present" },
        { role: "Full-stack Engineer", company: "Fjord Studio", time: "2022 — 2024" },
        { role: "Frontend Developer", company: "Nova Interactive", time: "2020 — 2022" },
    ];
    const education = [
        { degree: "B.Tech, Computer Science", school: "Delhi Technological University", time: "2020 — 2024" },
        { degree: "Self-taught", school: "Design systems & product craft", time: "Ongoing" },
    ];
    const languages = [
        { name: "English", level: "Fluent" },
        { name: "Hindi", level: "Native" },
        { name: "Spanish", level: "Conversational" },
    ];

    return (
        <Section id="about" className="py-32 md:py-48">
            <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
                {/* Left — portrait with decorative shape */}
                <motion.div
                    {...fadeUp}
                    className="lg:col-span-5 lg:sticky lg:top-28"
                >
                    <div className="relative">
                        {/* Decorative accent blob */}
                        <div
                            aria-hidden
                            className="absolute -inset-6 md:-inset-8 -z-10"
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
                </motion.div>

                {/* Right — content */}
                <div className="lg:col-span-7 flex flex-col">
                    <motion.div {...fadeUp}>
                        <Eyebrow>About me</Eyebrow>
                    </motion.div>
                    <motion.h2
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.05 }}
                        className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-accent"
                    >
                        A quiet obsession<br />with the details.
                    </motion.h2>
                    <motion.p
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.1 }}
                        className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                    >
                        I'm Kartik — a full-stack developer based in India. I build software the way I read
                        books: patiently, and with respect for the craft. My work sits at the intersection of
                        engineering and design, favouring clarity over noise and systems over one-offs.
                    </motion.p>

                    <motion.div
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.15 }}
                        className="mt-10 h-px bg-accent/40"
                    />

                    {/* Experience */}
                    <motion.div {...fadeUp} className="mt-10">
                        <h3 className="text-accent font-display text-xl md:text-2xl font-bold tracking-tight">
                            Experience
                        </h3>
                        <div className="mt-5 space-y-5">
                            {experience.map((e) => (
                                <div key={e.role} className="grid grid-cols-[7rem_1fr] gap-4 md:gap-6">
                                    <div className="text-xs md:text-sm text-muted-foreground font-medium pt-0.5">
                                        {e.time}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-semibold text-foreground">{e.role}</div>
                                        <div className="text-sm text-muted-foreground">{e.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div {...fadeUp} className="mt-10">
                        <h3 className="text-accent font-display text-xl md:text-2xl font-bold tracking-tight">
                            Education
                        </h3>
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

                    {/* Languages */}
                    <motion.div {...fadeUp} className="mt-10">
                        <h3 className="text-accent font-display text-xl md:text-2xl font-bold tracking-tight">
                            Languages
                        </h3>
                        <div className="mt-5 flex flex-wrap gap-2.5">
                            {languages.map((l) => (
                                <span
                                    key={l.name}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full ring-1 ring-accent/30 bg-card text-sm"
                                >
                                    <span className="font-semibold">{l.name}</span>
                                    <span className="text-muted-foreground text-xs">{l.level}</span>
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
