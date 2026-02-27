import React from 'react'

const Accomplishments = () => {
    return (
        <div className="bg-linear-to-bl from-[#9754cb] to-[#523a5e32] grid w-screen min-h-screen font-serif justify-center">
            <main className="">
                <div className="grid lg:grid-cols-4 mt-20 mx-10 lg:mt-15 lg:mx-10">
                    <div className="lg:col-span-1">
                        <img className="w-[460px] h-[630px] lg:mt-18 mx-auto lg:mx-auto" src="../PoeAccomplishments.jpg" alt="Edgar Allan Poe Portrait" />
                    </div>
                    <div className="my-auto lg:col-span-3 lg:ms-20 mt-10 lg:mt-0 lg:mb-0 mb-10 ">
                        <h2 className="text-4xl lg:text-6xl text-center mb-4 text-shadow-lg/80">Edgar Allan Poe's Accomplishments</h2>
                        <div className="font-[12px] lg:text-2xl bg-[#00000025] px-2 py-2"><span className='font-bold'>First American Professional Writer:</span> <br /><div className='ms-5'>Due to the overnight success and rising popularity of his works. Edgar Allan Poe was starting to make a living off of his works, which was unheard of during that time period.</div><span className='font-bold'>Inventor of a Literary Genre:</span><br /><div className='ms-5'>Due to Edgar Allan Poe's stories and works establishing conventions such as brilliant but eccentric amateur sleuth. He would be known as the creator of the detective fiction genre.</div><span className='font-bold'>A Pioneer in the Literary World:</span> <br /><div className='ms-5'>Edgar Allan Poe made significant contributions to the science fiction and Gothic horror genre.</div><span className='font-bold'>Early Practitioner to a Literary Style:</span> <br /><div className='ms-5'>Poe was a prolific story teller and often told stories that were in short form convention. Due to that, Poe is credited as an early practitioner of the short story form.</div><span className='font-bold'>Published World-Renowned Works:</span> <br /><div className='ms-5'>Edgar Allan Poe rose to popularity from his works and would continue to gain popularity after his death. Some of his works include but are not limited to: <br /><span className='italic'>The Raven, Annabel Lee, The Tell-Tale Heart, The Fall of the House of Usher.</span></div><span className='font-bold'>Prominent Figure in the Literary World:</span> <br /><div className='ms-5'>Edgar Allan Poe did not only work on his own stories. Poe also worked as a critic and as an editor for a magazine. During his employments as a critic and editor as well as his harsh critiques, he helped shape American literary taste and had a profound influence on American literature.</div></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Accomplishments