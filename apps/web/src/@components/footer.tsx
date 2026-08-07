import {
    Mail,
    ArrowUpRight,
} from "lucide-react";
import { Eyebrow, fadeUp, Section } from "../@core";
import { motion } from 'motion/react'


export function Footer() {
    const links = [
        { icon: Mail, label: "amankumararyan.dev@gmail.com", href: "mailto:amankumararyan.dev@gmail.com" },
        { icon: Mail, label: "X / Twitter", href: "https://x.com/AmanAryan__" },
        { icon: Mail, label: "GitHub", href: "https://github.com/AmanKumarAryan" },
    ];
    return (
        <>
            <Section id="contact" className="py-28 md:py-40">
                <motion.div {...fadeUp}><Eyebrow>Contact</Eyebrow></motion.div>
                <motion.h2 {...fadeUp} className="mt-8 text-[13vw] md:text-[8vw] leading-[0.95] font-semibold tracking-[-0.04em]">
                    Let&apos;s build<br />
                    <span className="font-hand italic text-accent font-normal">something</span> good.
                </motion.h2>

                <div className="mt-16 grid md:grid-cols-2 gap-12">
                    <div className="space-y-2">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                className="group flex items-center justify-between py-5 border-b border-hairline hover:border-accent transition-colors"
                            >
                                <span className="flex items-center gap-4">
                                    <l.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                                    <span className="text-lg md:text-xl font-medium">{l.label}</span>
                                </span>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                            Send me a message. I promise it won&apos;t sit in an inbox forever. Whatever it is — a project, a role, or just a hello — I&apos;ll get back to you.
                        </p>
                    </div>
                </div>
            </Section>

            <footer className="border-t border-hairline px-6 md:px-10 lg:px-16 pt-20 pb-10">
                <div className="mx-auto max-w-7xl">
                    <div className="text-[16vw] md:text-[13vw] leading-[0.9] font-semibold tracking-[-0.04em]">
                        Aryan<span className="text-accent">.</span>
                    </div>
                    <div className="mt-12 grid md:grid-cols-3 gap-8 items-end">
                        <p className="text-muted-foreground max-w-sm">
                            Thanks for scrolling all the way down. If you got here, we should probably talk.
                        </p>
                        <div className="flex gap-5 md:justify-center">
                        </div>
                        <div className="md:text-right text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Aryan <span className="text-accent">·</span> Crafted with intent
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}