import { About } from '@/src/@components';
import { Hero } from '@/src/@components/heroSection';
import { auth } from '@/src/@lib/firebase'

export default function Home() {

  console.log(auth)
  return (
    <>
      <Hero />
      <About/>
    </>
  );
}
