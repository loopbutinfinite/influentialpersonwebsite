import React from 'react'

const Biography = () => {
    return (
        <div className="bg-linear-to-bl from-[#9754cb] to-[#523a5e32] grid w-screen min-h-screen font-serif justify-center">
            <main className="">
                <div className="grid lg:grid-cols-2 my-15 lg:mt-10 mx-10 ">
                    <div className="mb-10 lg:mb-0">
                        <img className="w-[460px] h-[630px] lg:mt-30 mx-auto" src="../PoeBiography.jpg" alt="Edgar Allan Poe Portrait" />
                    </div>
                    <div className="my-auto">
                        <h2 className="text-5xl lg:text-6xl text-center mb-8 lg:mb-4 text-shadow-lg/80">Edgar Allan Poe's Story</h2>
                        <p className="text-2xl bg-[#00000025] px-2 py-2"><span className='font-bold'>Edgar Allan Poe</span> (January 19, 1809 - October 7, 1849) born in Boston, and second child to David Poe and Elizabeth “Eliza” Poe. Unfortunately, his father would abandon the family in 1810, and shortly after, Edgar’s mother would pass away shortly after. Poe would later be taken in by John and Francis Allan; despite not formally being adopted, Edgar Allan Poe would live with them until his young adulthood. Despite his hardships, Edgar Allan Poe would become well known as an American writer, poet, editor, and literary critic who is best known for his poetry and short stories. His popularity rose to such fame that he is often credited and regarded as being one of the central figures of Romanticism and Gothic fiction in the United States and of early American literature. Poe’s work influenced the development of literature throughout the world and even impacted such specialized fields as cosmology and cryptography. Even after his death, he and his writings appear numerous times throughout many media types in a variety of fields such as art, photography, literary allusions, music, and motion pictures.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Biography