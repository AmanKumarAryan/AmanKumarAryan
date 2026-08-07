"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "../@core";

// const NAV_LINKS = [
//   { label: "RIGHT WHERE YOU LANDED", href: "#about" },
//   { label: "WORK WORTH A LOOK", href: "#projects" },
//   { label: "WORDS WORTH READING", href: "#blogs" },
// ];
const NAV_LINKS = [
  { label: "ORIGIN", href: "#about" },
  { label: "BUILT STUFF", href: "#projects" },
  { label: "MODELS & DATA", href: "#models" },
  { label: "THE GRIND", href: "#github" },
  { label: "THOUGHTS", href: "#blogs" },
];

const EMAIL = "amankumararyan.dev@gmail.com";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // desired state
  const [isMounted, setIsMounted] = useState(false); // overlay present in the DOM
  const [isVisible, setIsVisible] = useState(false); // drives the transform (true = dropped down)

  const closeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  // Mount/unmount the overlay, and toggle body scroll lock
  useEffect(() => {
    if (isOpen) {
      clearTimeout(closeTimeout.current);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.overflow = "";
      closeTimeout.current = setTimeout(() => setIsMounted(false), 600);
    }
    return () => clearTimeout(closeTimeout.current);
  }, [isOpen]);

  // Once mounted in its closed position, flip to visible on the next frame
  // so the browser actually has a "from" state to transition out of.
  useEffect(() => {
    if (!isMounted || !isOpen) return;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [isMounted, isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      {/* Top bar — stays visible above the overlay; the Menu button doubles as the close control */}
      <Section id="navbar" childClass="flex items-center justify-between py-6" className="fixed inset-x-0 top-0 z-50 ">
        <div className="flex items-center gap-6">
          <a href="#about" onClick={() => setIsOpen(false)} className="font-anton text-xl text-accent tracking-tight">
            ARYAN<span className="text-foreground">.</span>
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="site-menu-overlay"
            className="group -m-2 flex items-center gap-3 rounded-full p-2 font-poppins text-sm uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
          >
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className={`h-[2px] w-full bg-current transition-transform duration-300 ease-out ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-full bg-current transition-transform duration-300 ease-out ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
          {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="font-poppins text-sm uppercase tracking-wide text-foreground transition-colors hover:text-accent"
        >
          Let&apos;s chat →
        </a>
      </Section>

      {/* Full-screen overlay: drops down on open, retracts up on close */}
      {isMounted && (
        <div
          id="site-menu-overlay"
          className={`fixed inset-0 z-40 flex flex-col bg-background transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-1 flex-col items-center justify-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link, i) => {
              const delay = isVisible ? `${200 + i * 90}ms` : "0ms";

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: delay }}
                  className={`group flex items-baseline gap-4 sm:gap-6 transition-all duration-300 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <span className="font-poppins text-xs sm:text-sm text-muted-foreground/60 transition-colors group-hover:text-accent">
                    0{i + 1}
                  </span>
                  <span className="inline-block font-anton text-6xl leading-[1.1] text-accent transition-all duration-300 ease-out will-change-transform group-hover:translate-x-3 sm:text-8xl lg:text-9xl">
                    {link.label}
                    <span className="ml-2 inline-block text-foreground opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 border-t border-hairline pb-10 pt-8 px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Reach out to me
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="font-hand text-2xl text-accent transition-colors hover:text-primary md:text-3xl"
              >
                {EMAIL}
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-5">
              {[
                { label: "X", href: "https://x.com/AmanAryan__" },
                { label: "GitHub", href: "https://github.com/AmanKumarAryan" },
                { label: "LeetCode", href: "https://leetcode.com/u/AmanKumarAryan/" },
                { label: "Deep-ML", href: "https://www.deep-ml.com/profile/6Yx8DMFCBKPvKDVYoWIFuyj33103" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-poppins text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}