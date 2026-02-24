import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-linear-to-bl from-[#9754cb] to-[#523a5e32] grid w-screen min-h-screen font-serif justify-center">
      <main className="">
        <div className="grid grid-cols-2 gap-20 mt-30">
          <div className="">
            <img className="w-[460px] h-[630px]" src="./PoeHomePage.jpg" alt="Edgar Allan Poe Portrait" />
          </div>
          <div className="my-auto">
            <h2 className="text-6xl text-center mb-15">Edgar Allan Poe:</h2>
            <h3 className="text-2xl text-center">American Writer and Critic</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
