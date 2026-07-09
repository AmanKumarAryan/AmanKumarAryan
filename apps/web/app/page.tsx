import {auth} from '@/src/@lib/firebase'

export default function Home() {

  console.log(auth)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Jai mata di</h1>
    </div>
  );
}
