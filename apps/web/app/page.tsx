'use client'

import { About, Blogs, Footer, GitHub, Intro, Models, Projects, Technologies, Scrolleffect, Navbar} from '@/src/@components';
import { Hero } from '@/src/@components/heroSection';
import { AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    const opts = { rootMargin: "-40% 0px -55% 0px", threshold: 0 };
  }, [done]);

  return (
    <div className="relative" >
      {/* <AnimatePresence>{!done && <Intro key="intro" onDone={() => setDone(true)} />}</AnimatePresence> */}
      <Navbar/>
      <Hero />
      <About />
      {/* <Scrolleffect/> */}
      <Technologies/>
      <Projects/>
      <Models/>
      <GitHub/>
      <Blogs/>
      <Footer/>
    </div>
  );
}
