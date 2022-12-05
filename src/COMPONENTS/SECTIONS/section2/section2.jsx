import React from 'react'
import earth from '../../../images/desktop/image-deep-earth.jpg'
import curiosity from '../../../images/desktop/image-curiosity.jpg'
import fish from '../../../images/desktop/image-fisheye.jpg'
import above from '../../../images/desktop/image-from-above.jpg'
import grid from '../../../images/desktop/image-grid.jpg'
import night from '../../../images/desktop/image-night-arcade.jpg'
import pocket from '../../../images/desktop/image-pocket-borealis.jpg'
import soccer from '../../../images/desktop/image-soccer-team.jpg'
// mobile
import earth2 from '../../../images/mobile/image-deep-earth.jpg'
import curiosity2 from '../../../images/mobile/image-curiosity.jpg'
import fish2 from '../../../images/mobile/image-fisheye.jpg'
import above2 from '../../../images/mobile/image-from-above.jpg'
import grid2 from '../../../images/mobile/image-grid.jpg'
import night2 from '../../../images/mobile/image-night-arcade.jpg'
import pocket2 from '../../../images/mobile/image-pocket-borealis.jpg'
import soccer2 from '../../../images/mobile/image-soccer-team.jpg'

const Section2 = () => {
  return (
    
    // border-[2px] border-[red] 

        <section className='mb-24 md:mb-40 px-5 xl:px-0'>
            <div className="container">
                <div className="grid place-items-center sm:place-items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-7">
                    <div className='row-start-1 col-span-1  sm:col-span-2  text-center md:text-left    lg:col-span-2 xl:col-span-3 mb-3.5 md:mb-6'>
                        <h2 className='font-joseph  font-3  text-[1.8rem] md:text-[2.9rem] uppercase  '>Our creations</h2>
                    </div>
                    <div className='md:mb-6 row-start-[11] sm:col-span-2 md:col-span-1 -mt-5  sm:-mt-32 md:mt-0   md:row-start-1 '>
                        <button className='sm:w-[100%]  sm:bg-black sm:text-white sm:hover:bg-white sm:hover:text-black
                         md:w-auto lg:ml-[10.5rem] xl:ml-[4.89rem]  border-[2px] border-black hover:border-black  hover:text-white hover:bg-black  
                        md:border-[2px] md:border-black md:hover:border-black md:bg-white  md:text-black md:hover:bg-black md:hover:text-white 
                         px-9 py-[0.47rem] font-4 font-alata tracking-[0.3rem] uppercase  '>See all</button>
                    </div>
    
                    <div className=' relative hover:text-black 
                       bg-d_gray hover:bg-blend-overlay   bg-cover bg-no-repeat '>
                    <img src={earth} alt="" className='w-[100%] h-[100%] hidden md:block' />
                    <img src={earth2} alt="" className='w-[100%] h-[100%] md:hidden' />

                    <div className='bg-gradient-to-t text-white hover:text-black from-b3 to-b hover:to-w3 hover:from-w3 hover:bg-w3  absolute   top-[0px] left-[0] bottom-[0] right-[0]'>
                        <p className='uppercase  text-joseph font-3 text-[1.5rem] md:text-[2rem]  ml-6 md:ml-9 w-[140px]  mt-[2.7rem] md:mt-[22rem] lg:mt-[30rem] xl:mt-[20.9rem]   tracking-[0.1rem]  leading-[1]'>deep earth</p>

                    </div>
                    </div>
                    <div className=' relative hover:text-black     bg-d_gray hover:bg-blend-overlay   bg-cover bg-no-repeat '>
                    <img src={night} alt="" className='w-[100%] h-[100%] hidden md:block' />
                    <img src={night2} alt="" className='w-[100%] h-[100%] md:hidden' />

                    <div className='bg-gradient-to-t text-white hover:text-black from-b3 to-b hover:to-w3 hover:from-w3 hover:bg-w3  absolute   top-[0px] left-[0] bottom-[0] right-[0]'>
                        <p className='uppercase  text-joseph font-3 text-[1.5rem] md:text-[2rem] ml-6 md:ml-9 w-[140px]  mt-[2.7rem] md:mt-[22rem] lg:mt-[30rem] xl:mt-[20.9rem]   tracking-[0.1rem]  leading-[1]'>night arcade</p>

                    </div>
                    </div>
                    <div className=' relative hover:text-black     bg-d_gray hover:bg-blend-overlay   bg-cover bg-no-repeat '>
                    <img src={soccer} alt="" className='w-[100%] h-[100%] hidden md:block' />
                    <img src={soccer2} alt="" className='w-[100%] h-[100%] md:hidden' />
                    <div className='bg-gradient-to-t text-white hover:text-black from-b3 to-b hover:to-w3 hover:from-w3 hover:bg-w3  absolute   top-[0px] left-[0] bottom-[0] right-[0]'>
                        <p className='uppercase  text-joseph font-3 text-[1.5rem] md:text-[2rem] ml-6 md:ml-9 w-[140px] mt-[2.7rem] md:mt-[22rem] lg:mt-[30rem] xl:mt-[20.9rem]   tracking-[0.1rem]  leading-[1]'>soccer team</p>

                    </div>
                    </div>
                    <div className=' relative hover:text-black     bg-d_gray hover:bg-blend-overlay   bg-cover bg-no-repeat '>
                    <img src={grid} alt="" className='w-[100%] h-[100%] hidden md:block' />
                    <img src={grid2} alt="" className='w-[100%] h-[100%] md:hidden' />
                    <div className='bg-gradient-to-t text-white hover:text-black from-b3 to-b hover:to-w3 hover:from-w3 hover:bg-w3  absolute   top-[0px] left-[0] bottom-[0] right-[0]'>
                        <p className='uppercase  text-joseph font-3 text-[1.5rem] md:text-[2rem] ml-6 md:ml-9 w-[100px] mt-[2.7rem] md:mt-[22rem] lg:mt-[30rem] xl:mt-[20.9rem]   tracking-[0.1rem]  leading-[1]'>the grid</p>

                    </div>
                    </div>
                   
                    <div className=' relative hover:text-black     bg-d_gray hover:bg-blend-overlay   bg-cover bg-no-repeat '>
                    <img src={above} alt="" className='w-[100%] h-[100%] hidden md:block' />
                    <img src={above2} alt="" className='w-[100%] h-[100%] md:hidden' />
                    <div className='bg-gradient-to-t text-white hover:text-black from-b3 to-b hover:to-w3 hover:from-w3 hover:bg-w3  absolute   top-[0px] left-[0] bottom-[0] right-[0]'>
                        <p className='uppercase  text-joseph font-3 text-[1.5rem] md:text-[2rem] ml-6 md:ml-9 w-[160px] mt-[2.7rem] md:mt-[22rem] lg:mt-[30rem] xl:mt-[20.9rem]   tracking-[0.1rem]  leading-[1]'>from up above vr</p>

                    </div>
                    </div>
                   <div className=' relative hover:text-black     bg-d_gray hover:bg-blend-overlay   bg-cover bg-no-repeat '>
                    <img src={pocket} alt="" className='w-[100%] h-[100%] hidden md:block' />
                    <img src={pocket2} alt="" className='w-[100%] h-[100%] md:hidden' />
                    <div className='bg-gradient-to-t text-white hover:text-black from-b3 to-b hover:to-w3 hover:from-w3 hover:bg-w3  absolute   top-[0px] left-[0] bottom-[0] right-[0]'>
                        <p className='uppercase  text-joseph font-3 text-[1.5rem] md:text-[2rem] ml-6 md:ml-9 w-[140px] mt-[2.7rem] md:mt-[22rem] lg:mt-[30rem] xl:mt-[20.9rem]   tracking-[0.1rem]  leading-[1]'>pocket borealis</p>

                    </div>
                    </div>
                    
                    <div className=' relative hover:text-black     bg-d_gray hover:bg-blend-overlay   bg-cover bg-no-repeat '>
                    <img src={curiosity} alt="" className='w-[100%] h-[100%] hidden md:block' />
                    <img src={curiosity2} alt="" className='w-[100%] h-[100%] md:hidden' />
                    <div className='bg-gradient-to-t text-white hover:text-black from-b3 to-b hover:to-w3 hover:from-w3 hover:bg-w3  absolute   top-[0px] left-[0] bottom-[0] right-[0]'>
                        <p className='uppercase  text-joseph font-3 text-[1.5rem] md:text-[2rem] ml-6 md:ml-9 w-[140px] mt-[2.7rem] md:mt-[22rem] lg:mt-[30rem] xl:mt-[20.9rem]   tracking-[0.1rem]  leading-[1]'>the curiosity</p>

                    </div>
                    </div>
                     <div className=' relative hover:text-black     bg-d_gray hover:bg-blend-overlay   bg-cover bg-no-repeat '>
                    <img src={fish} alt="" className='w-[100%] h-[100%] hidden md:block' />
                    <img src={fish2} alt="" className='w-[100%] h-[100%] md:hidden' />
                    <div className='bg-gradient-to-t text-white hover:text-black from-b3 to-b hover:to-w3 hover:from-w3 hover:bg-w3  absolute   top-[0px] left-[0] bottom-[0] right-[0]'>
                        <p className='uppercase  text-joseph font-3 text-[1.5rem] md:text-[2rem] ml-6 md:ml-9 w-[140px] mt-[2.7rem] md:mt-[22rem] lg:mt-[30rem] xl:mt-[20.9rem]   tracking-[0.1rem]  leading-[1]'>make it fisheye</p>

                    </div>
                    </div>
                    <div className='h-[460px] bg-white hidden md:block lg:hidden '>
                    
                    
                    
                    </div>
                 
                </div>

            </div>
        </section>
  )
}

export default Section2