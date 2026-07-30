import { ArrowUpRight } from "lucide-react";
import { Eyebrow, fadeUp, Section } from "../@core";
import { motion } from 'motion/react'

export function Blogs() {
    const posts = [
        { title: "The quiet art of interface design", desc: "Why restraint beats decoration in modern product design.", date: "Jul 04, 2026", big: true },
        { title: "Shipping less, faster", desc: "A workflow for building small and often.", date: "Jun 22, 2026" },
        { title: "On writing readable code", desc: "Code is a letter to whoever reads it next.", date: "Jun 08, 2026" },
    ];
    return (
        <>
            <div className="h-screen w-full m-0 bg-accent relative flex justify-center items-center">
                <p className="font-anton text-background text-8xl text-center">
                   WORDS WORTH READING
                </p>
                <div className="border w-9/10 absolute bottom-10 left-1/2 -translate-x-1/2"></div>
            </div>
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

                <div className="mt-14">
                    <div className="w-full bg-red-400">
                        <img src="./blogs/blogImg1.jpeg" className="bg-contain w-full h-auto" alt="" />
                    </div>
                    <div className="col-span-5 flex mt-2 gap-2">
                        <div>
                        <img src="./blogs/blogImg2.jpeg" alt="" />

                        </div>
                        <div>
                        <img src="./blogs/blogImg3.jpeg" alt="" />

                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}