export default function Banner() {
    return (
        <>
            <section className="bg-gray-200 banner--wrapper">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl ">ISPACE'S HAKUTO-R MISSION 1</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From
                            The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station</p>
                        <button 
                           className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black">
                            Get started
                        </button>
                        <button 
                           className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-white">
                            Speak to Sales
                        </button>
                    </div>
                    <div className="hidden mx-auto lg:mt-0 lg:col-span-5 lg:flex">
                        <img className="feature-image" src={process.env.PUBLIC_URL + "/capsule.png"} 
                             alt="capsule"/>
                    </div>
                </div>
            </section>
        </>

    )
}