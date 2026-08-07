'use client'

import { motion } from "motion/react";

type SpiderProps = {
  variant?: "dangle" | "web" | "hex";
};

function SpiderGlyph({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size * (44 / 36)} viewBox="0 0 36 44" fill="none" className="text-foreground">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M15 19 C10 16 8 12 10 8" />
        <path d="M15 22 C9 20 6 17 7 13" />
        <path d="M15 25 C10 25 7 23 7 19" />
        <path d="M21 19 C26 16 28 12 26 8" />
        <path d="M21 22 C27 20 30 17 29 13" />
        <path d="M21 25 C26 25 29 23 29 19" />
      </g>
      <ellipse cx="18" cy="28" rx="5" ry="7" fill="currentColor" />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}

function DangleSpider() {
  return (
    <div className="pointer-events-none select-none" aria-hidden="true">
      <motion.div
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
        className="flex flex-col items-center"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 120 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-px bg-foreground/40"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
          className="-mt-0.5"
        >
          <SpiderGlyph />
        </motion.div>
      </motion.div>
    </div>
  );
}

function RadialWebSpider() {
  const spokes = Array.from({ length: 12 });
  return (
    <motion.div
      animate={{ rotate: [0, 2.5, -2.5, 0] }}
      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      className="text-foreground pointer-events-none select-none"
      aria-hidden="true"
    >
      <motion.svg
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        width="190"
        height="190"
        viewBox="0 0 190 190"
        fill="none"
      >
        {spokes.map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1="95"
              y1="95"
              x2={95 + 88 * Math.cos(a)}
              y2={95 + 88 * Math.sin(a)}
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          );
        })}
        {[26, 46, 66, 82, 88].map((r) => (
          <circle
            key={r}
            cx="95"
            cy="95"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
        ))}
        <g transform="translate(95 95) scale(1.1)" stroke="currentColor">
          <g strokeWidth="1.6" strokeLinecap="round" fill="none">
            <path d="M-6 -9 C-12 -12 -14 -16 -12 -20" />
            <path d="M-6 -6 C-13 -8 -16 -11 -15 -15" />
            <path d="M-6 -3 C-12 -3 -15 -5 -15 -9" />
            <path d="M6 -9 C12 -12 14 -16 12 -20" />
            <path d="M6 -6 C13 -8 16 -11 15 -15" />
            <path d="M6 -3 C12 -3 15 -5 15 -9" />
          </g>
          <ellipse cx="0" cy="0" rx="5" ry="7" fill="currentColor" />
          <circle cx="0" cy="-10" r="3" fill="currentColor" />
        </g>
      </motion.svg>
    </motion.div>
  );
}

function HexWebSpider() {
  return (
    <div className="flex flex-col items-center text-foreground pointer-events-none select-none" aria-hidden="true">
      <motion.svg
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        width="190"
        height="150"
        viewBox="0 0 190 150"
        fill="none"
      >
        <defs>
          <pattern id="hexWeb" width="28" height="48.5" patternUnits="userSpaceOnUse">
            <path
              d="M14 0 L28 8.1 V24.3 L14 32.4 L0 24.3 V8.1 Z"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="190" height="150" fill="url(#hexWeb)" />
      </motion.svg>
      <motion.div
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
        className="flex flex-col items-center -mt-1"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="w-px bg-foreground/40"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
          className="-mt-0.5"
        >
          <SpiderGlyph />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Spider({ variant = "dangle" }: SpiderProps) {
  if (variant === "web") return <RadialWebSpider />;
  if (variant === "hex") return <HexWebSpider />;
  return <DangleSpider />;
}
