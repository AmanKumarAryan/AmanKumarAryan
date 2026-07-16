import { ArrowUpRight } from "lucide-react";
import { Eyebrow, fadeUp, Section } from "../@core";
import { motion } from 'motion/react'

export function Blogs() {
    const posts = [
        {  title: "The quiet art of interface design", desc: "Why restraint beats decoration in modern product design.", date: "Jul 04, 2026", big: true },
        {  title: "Shipping less, faster", desc: "A workflow for building small and often.", date: "Jun 22, 2026" },
        {  title: "On writing readable code", desc: "Code is a letter to whoever reads it next.", date: "Jun 08, 2026" },
    ];
    return (
        <Section id="blogs" className="py-28 md:py-40">
            <div className="flex items-end justify-between gap-6 flex-wrap">
                <div>
                    <motion.div {...fadeUp}><Eyebrow>Journal</Eyebrow></motion.div>
                    <motion.h2 {...fadeUp} className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
                        Recent writing.
                    </motion.h2>
                </div>
                <motion.a {...fadeUp} href="#" className="text-sm font-medium inline-flex items-center gap-1.5 hover:text-accent">
                    View all blogs <ArrowUpRight className="w-4 h-4" />
                </motion.a>
            </div>

            <div className="mt-14 grid lg:grid-cols-3 gap-6">
                {posts.map((p, i) => (
                    <motion.article
                        key={p.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                        className={`group relative overflow-hidden rounded-3xl ring-1 ring-black/[0.06] hover:ring-black/20 bg-card transition-all ${p.big ? "lg:col-span-2 lg:row-span-1" : ""}`}
                    >
                        <div className={`overflow-hidden ${p.big ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="text-xs text-muted-foreground">{p.date}</div>
                            <h3 className={`mt-3 font-semibold tracking-tight ${p.big ? "text-2xl md:text-3xl" : "text-xl"}`}>
                                {p.title}
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium group-hover:text-accent transition-colors">
                                Read more <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}