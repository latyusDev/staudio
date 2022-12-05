import React from 'react'
import logo from '../../images/logo.svg'
import fb from '../../images/icon-facebook.svg'
import twi from '../../images/icon-twitter.svg'
import pin from '../../images/icon-pinterest.svg'
import ins from '../../images/icon-instagram.svg'

const Footer = () => {

  return (
    <footer className='bg-black pt-12 pb-11 px-4 xl:px-0'> 
        <div className="container"> 
        
        <div className="flex items-center flex-col md:flex-row text-center md:text-left md:justify-between md:items-start">
        <div>
            <div className='max-w-[160px]'>
                <img src={logo} alt="logo" className='w-[100%]' />
            </div>
            <ul className='md:flex  gap-9 mt-6'>
                <li className='mt-7 md:mt-0'><a href="#" className='text-white font-joseph font-4 pb-2 hover:border-b-[2px] hover:border-white'>About</a></li>
                <li className='mt-5 md:mt-0'><a href="#" className='text-white font-joseph font-4 pb-2 hover:border-b-[2px] hover:border-white'>Careers</a></li>
                <li className='mt-5 md:mt-0'><a href="#" className='text-white font-joseph font-4 pb-2 hover:border-b-[2px] hover:border-white'>Events</a></li>
                <li className='mt-5 md:mt-0'><a href="#" className='text-white font-joseph font-4 pb-2 hover:border-b-[2px] hover:border-white'> Products</a></li>
                <li className='mt-5 md:mt-0'><a href="#" className='text-white font-joseph font-4 pb-2 hover:border-b-[2px] hover:border-white'> supports</a></li>
            </ul>
        </div>
       <div className='flex flex-col items-center md:items-end'>
       <ul className='flex gap-4 mt-14 md:mt-0'>
                <li > <img className=' pb-4 hover:border-b-[2px] border-b-[2px] border-black hover:border-white'  src={fb} alt="fb" /> </li>
                <li ><img  className=' pb-4 hover:border-b-[2px] border-b-[2px] border-black hover:border-white' src={twi} alt="twi" /> </li>
                <li ><img  className=' pb-4 hover:border-b-[2px] border-b-[2px] border-black hover:border-white' src={pin} alt="int" /> </li>
                <li > <img className=' pb-4 hover:border-b-[2px] border-b-[2px] border-black hover:border-white'  src={ins} alt="ins" /> </li>
            </ul>
            <p className='text-d_gray font-alata mt-1.5 font-3'>© 2021 Loopstudios. All rights reserved.</p>
       </div>
        </div>
        
  {/* 
  
  
 
  x */}
        </div>
    </footer>
  )
}

export default Footer