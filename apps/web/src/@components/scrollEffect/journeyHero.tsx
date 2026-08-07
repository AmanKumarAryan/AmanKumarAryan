'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * JourneyHero
 *
 * Mixed-typography scroll reveal (italic serif accent + bold
 * uppercase line). Pass `videoSrc` to render a looping background
 * video behind the text — the text stays pinned on screen for
 * `scrollLength` px while it reveals, then releases to the next
 * section.
 */
const LINE_ONE = [
  { text: 'through', style: 'italic' },
  { text: 'THIS', style: 'bold' },
];
const LINE_TWO = [
  { text: 'JOURNEY', style: 'bold' },
  { text: 'WITH', style: 'bold' },
  { text: 'ME', style: 'bold' },
];

export default function JourneyHero({
  videoSrc,
  pin = true,
  scrollLength = 1800, // increase for a longer "stay" before it lets go
  dimOpacity = 0.12,
}: {
  videoSrc?: string;
  pin?: boolean;
  scrollLength?: number;
  dimOpacity?: number;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.jh-word');

    const ctx = gsap.context(() => {
      gsap.set(words, { opacity: dimOpacity });

      gsap.to(words, {
        opacity: 1,
        stagger: 0.05,
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
  }, [dimOpacity, pin, scrollLength]);

  const renderWord = (word: { text: string; style: string }, i: number) => (
    <span
      key={i}
      className="jh-word"
      style={{
        display: 'inline-block',
        marginRight: '0.28em',
        fontStyle: word.style === 'italic' ? 'italic' : 'normal',
        fontWeight: word.style === 'bold' ? 800 : 400,
        fontFamily: word.style === 'italic' ? 'Georgia, "Times New Roman", serif' : 'inherit',
      }}
    >
      {word.text}
    </span>
  );

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0b0d',
        color: '#f5f3ee',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        overflow: 'hidden',
      }}
    >
      {videoSrc && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            src={videoSrc}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />
          {/* Dark scrim so text stays readable over footage */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 1,
            }}
          />
        </>
      )}

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', lineHeight: 1.05 }}>
          {LINE_ONE.map(renderWord)}
        </div>
        <div
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            lineHeight: 1.05,
            textTransform: 'uppercase',
          }}
        >
          {LINE_TWO.map(renderWord)}
        </div>
      </div>
    </section>
  );
}