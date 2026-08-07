'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ScrollRevealText
 *
 * Splits `text` into words and brightens each one in as the user
 * scrolls. Pass `pin` to freeze the section on screen for the
 * duration of `scrollLength` (in px) so the reveal has room to
 * breathe instead of finishing in one quick scroll tick.
 *
 * Usage:
 *   <ScrollRevealText
 *     text="Not just websites, we build vision"
 *     className="headline"
 *     pin
 *     scrollLength={1800}
 *   />
 */
export default function ScrollRevealText({
  text,
  className = '',
  dimOpacity = 0.15,
  stagger = 0.04,
  pin = false,
  scrollLength = 1500, // px of extra scroll while pinned; bump this up for a longer "stay"
}: {
  text: string;
  className?: string;
  dimOpacity?: number;
  stagger?: number;
  pin?: boolean;
  scrollLength?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.srt-word');

    const ctx = gsap.context(() => {
      gsap.set(words, { opacity: dimOpacity });

      gsap.to(words, {
        opacity: 1,
        stagger,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: `+=${scrollLength}`,
          scrub: true,
          pin,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [dimOpacity, stagger, pin, scrollLength]);

  const words = text.split(' ');

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{ margin: 0 }}>
        {words.map((word, i) => (
          <span
            key={i}
            className="srt-word"
            style={{ display: 'inline-block', marginRight: '0.28em' }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}