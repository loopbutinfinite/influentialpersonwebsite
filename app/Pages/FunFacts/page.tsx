import React from 'react'

const FunFacts = () => {
    return (
        <div className="bg-linear-to-bl from-[#9754cb] to-[#523a5e32] grid w-screen min-h-screen font-serif justify-center">
            <main className="">
                <div className="grid lg:grid-cols-2 my-15 lg:mt-30 lg:gap-10 mx-10 lg:mx-10">
                    <div className="">
                        <img className="w-[460px] h-[630px] mx-auto mb-10 lg:mb-0 lg:mt-30" src="../PoeFunFacts.jpeg" alt="Edgar Allan Poe Portrait" />
                    </div>
                    <div className="my-auto">
                        <h2 className="text-6xl text-center mb-4 text-shadow-lg/80">Fun Facts</h2>
                        <p className="bg-[#00000025] px-2 py-2 text-2xl font-bold">Edgar Allan Poe's character, C. Auguste Dupin, would be used as inspiration for what would later be recognized by many as Sherlock Holmes. <br /><br />Despite Edgar Allan Poe becoming an overnight success for his work, The Raven. Poe only received $9 from it. <br /><br />Edgar Allan Poe wrote a textbook about seashells and a book on scientific theory. <br /><br />Edgar Allan Poe attended University of Virginia for a semester but would later drop out due to a lack of funds and accruing large gambling debt. <br /><br />Edgar Allan Poe was a very athletic man and holds a world record for his feat of swimming 7.5 miles up the James River. <br /><br />Edgar Allan Poe's famous poem, The Raven, was used as inspiration for the name of the NFL team Baltimore Ravens.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FunFacts