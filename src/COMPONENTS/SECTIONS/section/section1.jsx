import React from 'react'
import glass from '../../../images/desktop/image-interactive.jpg'

const Section1 = ()=>{
    return(
        <section className='px-5 xl:px-0 mt-[6rem] md:mt-[8.7rem] mb-[5.8rem] md:mb-[9.2rem] text-center md:text-left'>
            <div className="container">
            <div className="flex flex-col md:flex-row items-center md:items-end">
                <div className="md:h-[400px] md:w-[60%]  md:max-w-[800px]">
                <img src={glass} alt="glass" className='w-[100%] h-[100%]' />
                </div>
                <div className='md:w-[55%] md:pl-[5.2rem] pt-12 md:pt-[4.4rem]  md:-ml-[8.6rem] pr-0 pb-0 bg-white'>
                    <h1 className="font-3 text-[1.8rem] md:text-[2.7rem] leading-[1] uppercase  font-joseph text-black">
                    The leader in interactive VR
                    </h1>
                    <p className=' px-7 md:px-0 font-alata mt-4 md:mt-5 font-3 text-d_gray md:max-w-[400px] leading-[1.6] text-[0.84rem] '>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Section1 