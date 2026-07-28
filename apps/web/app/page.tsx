'use client'

import { About, Blogs, Footer, Intro, Projects, Technologies, Scrolleffect} from '@/src/@components';
import { Hero } from '@/src/@components/heroSection';
import { auth } from '@/src/@lib/firebase'
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
      {/* <Hero /> */}
      <About />
      {/* <Scrolleffect/> */}
      {/* <Blogs/> */}
      <Technologies/>
      <Projects/>
      <Footer/>
    </div>
  );
}
