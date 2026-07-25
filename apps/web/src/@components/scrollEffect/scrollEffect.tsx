import JourneyHero from './journeyHero';
import ScrollRevealText from './scrollrevealText';

export function Scrolleffect() {
  return (
    <main style={{ background: '#0b0b0d' }}>
      {/* Spacer so the effect has room to trigger from a natural scroll, not on load */}
      <section style={{ height: '40vh' }} />

      <JourneyHero
        videoSrc="assets/videos/scrollSectionBgVideo.mp4" // swap for your own file in /public
        pin
        scrollLength={1800} // px of scroll while pinned — raise this to make it "stay" longer
      />

      <ScrollRevealText
        text="Not just websites — we build vision"
        className="reveal-headline"
        pin
        scrollLength={1500}
      />

      <section style={{ height: '40vh' }} />

      <style>{`
        .reveal-headline {
          color: #f5f3ee;
          font-family: system-ui, sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 7vw, 5.5rem);
          text-align: center;
          text-transform: uppercase;
          line-height: 1.05;
        }
      `}</style>
    </main>
  );
}