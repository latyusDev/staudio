import React from "react";
import logo from '../../images/logo.svg'
import hamburger from '../../images/icon-hamburger.svg'
import close from '../../images/icon-close.svg'
import { useState, useEffect, useRef } from "react";
const Header = ()=>{
    const [ navBar, setNavbar] = useState(false)
    const refContainer = useRef(null)
    const refContainer2 = useRef(null)

    useEffect(()=>{
      const linkHeight =  refContainer.current.getBoundingClientRect().height

        if(navBar)
            refContainer2.current.style.height = `${linkHeight}px`
            
        else
            refContainer2.current.style.height = '0px'
        
    },[navBar])

    const toggle = ()=>{
        setNavbar(!navBar)
    }
    
    return(

       <section >
         
         <div className={` md:static  bg-hero2 ${navBar && 'fixed bg-black top-0 bottom-0 left-0 z-[9999] right-0 '}     md:bg-hero bg-blend-overlay md:bg-[#0c0b0b66] 
         bg-c_top bg-cover bg-no-repeat min-h-[600px]`}>
         <header className="pt-10 md:pt-14 md:px-5 z-[2]  ">
            <div className="container ">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

               <div onClick={toggle} className="flex justify-between items-center  w-[100%] md:w-auto px-5 md:px-0">
               <div className="w-[136px] md:w-auto">
                <img src={logo} alt="" className="w-[100%] md:w-auto" />
                </div>
                <div className="md:hidden">
                <img src={ navBar ? close : hamburger } alt="" />
                </div>
               </div>
            <nav ref={refContainer2}  className="mt-16 h-0  link mt-14 overflow-hidden  md:mt-0">
                <ul ref={refContainer} className=" flex px-5 pb-8 md:pb-4 md:px-0 flex-col md:flex-row gap-10  text-white">
                    <li><a href="#" className=' pb-4 hover:border-b-[2px] text-[1.6rem] md:text-[1.23rem] font-3 md:font-4 font-joseph uppercase md:capitalize hover:border-white'>About</a></li>
                    <li><a href="#" className=' pb-4 hover:border-b-[2px] text-[1.6rem] md:text-[1.23rem] font-3 md:font-4 font-joseph uppercase md:capitalize hover:border-white'>Careers</a></li>
                    <li><a href="#" className=' pb-4 hover:border-b-[2px] text-[1.6rem] md:text-[1.23rem] font-3 md:font-4 font-joseph uppercase md:capitalize hover:border-white'> Events</a></li>
                    <li><a href="#" className=' pb-4 hover:border-b-[2px] text-[1.6rem] md:text-[1.23rem] font-3 md:font-4 font-joseph uppercase md:capitalize hover:border-white'>Products</a></li>
                    <li><a href="#" className=' pb-4 hover:border-b-[2px] text-[1.6rem] md:text-[1.23rem] font-3 md:font-4 font-joseph uppercase md:capitalize hover:border-white'>Support</a></li>
                </ul>
            </nav>
            </div>
            </div>
           
        </header>

            <div className={`${navBar && 'hidden md:block'} container`}>
            <div className="px-5">
                <h1 className="font-3 text-[2.3rem] leading-[1] md:leading-[1] sm:leading-[1.4] sm:text-center md:text-left md:text-[4.4rem] border-[2px] border-white pr-6 md:pr-0 pt-9 pb-5 pl-9 mt-[5rem] md:mt-[7.6rem] 
                 uppercase md:max-w-[620px] font-joseph text-white">
                Immersive experiences that deliver
                </h1>
            </div>
            </div>
         </div>
       </section>
    )
}

export default Header 