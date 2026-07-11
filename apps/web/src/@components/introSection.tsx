import { useEffect, useState } from "react";
import { motion } from 'motion/react'

const NAME = "Kartik Sharma";

export function Intro({ onDone }: { onDone: () => void }) {
    const [typed, setTyped] = useState("");
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            i++;
            setTyped(NAME.slice(0, i));
            if (i >= NAME.length) {
                clearInterval(id);
                setTimeout(() => setReveal(true), 1000);
                setTimeout(onDone, 2100);
            }
        }, 110);
        return () => clearInterval(id);
    }, [onDone]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ y: 0 }}
            animate={reveal ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1.1, ease: [0.83, 0, 0.17, 1] as const }}
        >
            <div className="relative">
                <span className="font-hand text-5xl sm:text-7xl md:text-8xl text-white/95 tracking-wide">
                    {typed}
                </span>
                <motion.span
                    className="inline-block w-[3px] h-10 sm:h-14 md:h-16 bg-accent align-middle ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                />
            </div>
        </motion.div>
    );
}