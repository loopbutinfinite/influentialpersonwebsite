import React from 'react'

const Interests = () => {
    return (
        <div className="bg-linear-to-bl from-[#9754cb] to-[#523a5e32] grid w-screen min-h-screen font-serif justify-center">
            <main className="">
                <div className="grid grid-cols-2 mt-30 mx-60">
                    <div className="">
                        <img className="w-[460px] h-[630px]" src="../PoeInterests.jpeg" alt="Edgar Allan Poe Portrait" />
                    </div>
                    <div className="my-auto">
                        <h2 className="text-6xl text-center mb-4">Edgar Allan Poe's Interests</h2>
                        <div className="text-xl"><span className='font-bold'>Nature:</span> <br /><div className='ms-5'>Edgar Allan Poe had a deep passion for nature and gardens, frequently mentioning flowers in his poetry and fiction.</div><span className='font-bold'>Science & Discovery:</span><br /><div className='ms-5'>Edgar Allan Poe and a strong interest in scientific discovery and wrote speculative narratives that anticipated modern science fiction.</div><span className='font-bold'>Cryptography:</span> <br /><div className='ms-5'>Poe was skilled at solving ciphers and even published an essay on secret writing.</div><span className='font-bold'>Poetry & Science Fiction</span> <br /><div className='ms-5'>Poe focused on creating works that conveyed a single, unified impression, often of dread.</div><span className='font-bold'>Science Fiction</span> <br /><div className='ms-5'>Poe is considered one of the earliest American science fiction writers, exploring themes like space travel and the Big Bang Theory.</div><span className='font-bold'>Horror & Mystery:</span> <br /><div className='ms-5'>Poe's love for the genre of horror and mystery and incorporating it into his work, made him known as the father of the detective story and was a master of the macabre.</div></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Interests