import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-linear-to-bl from-[#9754cb] to-[#523a5e32] grid lg:grid-rows-2 w-screen min-h-screen font-serif justify-center">
      <div className="grid lg:grid-cols-2 mt-30">
        <div className="mx-5 md:mx-0">
          <img className="w-[460px] h-[630px] mx-auto mb-10 lg:mb-0" src="./PoeHomePage.jpg" alt="Edgar Allan Poe Portrait" />
        </div>
        <div className="my-auto">
          <h2 className="text-6xl text-center mb-15 text-shadow-lg/80">Edgar Allan Poe:</h2>
          <h3 className="text-2xl text-center mb-10 lg:mb-5">American Writer and Critic</h3>
          <p className="text-xl text-center mx-10 mb-10 lg:mb-0">Honestly, I find Poe so inspiring because he took all that trauma from his life and turned it into these dark, creepy stories that basically invented modern horror. The fact that his death is still this total mystery just adds to his vibe for me, like he's still a character in one of his own twisted tales.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4">
        <Link href="/Pages/Biography">
          <div className="">
            <img className="w-[300px] h-[430px] lg:mt-15 mx-auto" src="../PoeBiography.jpg" alt="Edgar Allan Poe Portrait" />
            <h3 className="text-center mt-3 text-3xl text-shadow-black/90">Biography</h3>
          </div>
        </Link>
        <Link href="Pages/Accomplishments">
          <div className="">
            <img className="w-[300px] h-[430px] lg:mt-15 mx-auto" src="../PoeAccomplishments.jpg" alt="Edgar Allan Poe Portrait" />
            <h3 className="text-center mt-3 text-3xl text-shadow-black/90">Accomplishments</h3>
          </div>
        </Link>
        <Link href="Pages/Interests">
          <div className="">
            <img className="w-[300px] h-[430px] lg:mt-15 mx-auto" src="../PoeInterests.jpeg" alt="Edgar Allan Poe Portrait" />
            <h3 className="text-center mt-3 text-3xl text-shadow-black/90">Interests</h3>
          </div>
        </Link>
        <Link href="Pages/FunFacts">
          <div className="">
            <img className="w-[300px] h-[430px] lg:mt-15 mx-auto" src="../PoeFunFacts.jpeg" alt="Edgar Allan Poe Portrait" />
            <h3 className="text-center mt-3 mb-10 lg:mb-0 text-3xl text-shadow-black/90">Fun Facts</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
