import React from 'react';
import CoffeeMain from './Images/black.png'

const bgImage = {
    backgroundImage: `url('/src-images/bg-slate.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // height: "100vh",  // Ensure it takes full viewport height
    // width: "100vw",    // Ensure full viewport width
}
function Home2() {
  return (
    <main style={bgImage}>
        <section>
            <div className='container'>
                {/* Navbar section */}
                {/* Hero section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                {/* text content section */}
                <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                    <h1 className='text-7xl font-bold leading-tight ml-14'>Print It</h1>
                    <div className='relative'>
                        <div className='relative z-10 space-y-4'>
                            <h1 className='text-2xl'>3D Model Lovers,</h1>
                            <h1 className='text-sm opacity-55 leading-loose'>
                                Ea sit ex laboris cupidatat proident ex. Labore in nulla cupidatat elit reprehenderit. Commodo labore dolor adipisicing reprehenderit ullamco excepteur ipsum dolor labore sint veniam mollit aliquip duis. Magna nulla dolor nostrud exercitation adipisicing aliquip officia anim.
                            </h1>
                        </div>
                        <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                    </div>
                </div>
                {/* Hero Image Section */}
                <div className='relative'>
                    <img src={CoffeeMain} alt="" className='relative z-40 h-[400px] md:h-[700px] img-shadow'></img>
                    {/* orange circle ring */}
                    <div className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'></div>
                    {/* big text section */}
                    <div className='absolute -top-0 left-[400px] z-[1]'>
                        <h1 className='text-[140px] scale-150 font-bold text-darkGray/30 leading-none'>Print It</h1>
                    </div>
                </div>
                {/* third div section */}
                <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                    <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Print It</h1>
                    <div className='relative'>
                        <div className='relative z-10 space-y-4'>
                            <h1 className='text-2xl'>Print It</h1>
                            <h1 className='text-sm opacity-55 leading-loose'>
                                Ea sit ex laboris cupidatat proident ex. Labore in nulla cupidatat elit reprehenderit. Commodo labore dolor adipisicing reprehenderit ullamco excepteur ipsum dolor labore sint veniam mollit aliquip duis. Magna nulla dolor nostrud exercitation adipisicing aliquip officia anim.
                            </h1>
                        </div>
                        <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
                    </div>
                </div>
                <div></div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home2