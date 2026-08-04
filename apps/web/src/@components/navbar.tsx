"use client";

import { useEffect, useRef, useState } from "react";

// const NAV_LINKS = [
//   { label: "RIGHT WHERE YOU LANDED", href: "#about" },
//   { label: "WORK WORTH A LOOK", href: "#projects" },
//   { label: "WORDS WORTH READING", href: "#blogs" },
// ];
const NAV_LINKS = [
  { label: "ORIGIN", href: "#about" },
  { label: "BUILT STUFF", href: "#projects" },
  { label: "THOUGHTS", href: "#blogs" },
];

const EMAIL = "contactkartikforwork@gmail.com";

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
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
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

        <a
          href={`mailto:${EMAIL}`}
          className="font-poppins text-sm uppercase tracking-wide text-foreground transition-colors hover:text-accent"
        >
          Let&apos;s chat →
        </a>
      </header>

      {/* Full-screen overlay: drops down on open, retracts up on close */}
      {isMounted && (
        <div
          id="site-menu-overlay"
          className={`fixed inset-0 z-40 flex flex-col bg-background transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-1 flex-col items-center justify-center gap-2">
            {NAV_LINKS.map((link, i) => {
              const delay = isVisible ? `${200 + i * 90}ms` : "0ms";

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: delay }}
                  className={`block transition-all duration-300 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <span
                    className="inline-block font-anton text-7xl leading-[1.05] text-accent transition-transform duration-300 ease-out will-change-transform hover:scale-105 sm:text-8xl lg:text-9xl"
                  >
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-4 border-t border-hairline pb-14 pt-8">
            <span className="font-poppins text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Reach out to me
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="font-hand text-3xl text-accent transition-colors hover:text-primary md:text-4xl"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      )}
    </>
  );
}