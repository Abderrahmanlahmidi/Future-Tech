'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import Logo from "@/app/assets/images/Logo.png";
import Menu from "../assets/images/Menu.png";
import Sidebarmenu from './Sidebarmenu';


type Props = {
    LinkStyle:string;
   
}

function Navbar({}: Props) {

 const [isSidebarOpen, setSidebarOpen] = useState(false);

 const handleSidebarToggle = () => {
  setSidebarOpen(!isSidebarOpen);
 };

 const LinkStyle = "text-Grey hover:px-[18px] hover:text-[#fff] hover:rounded-[6px] hover:border border-1 border-[#404040] hover:bg-Dark-Primary hover:py-[10px]"

  return (
    <nav className='w-full border-y border-1 border-[#404040] justify-center flex py-[20px] px-[80px] max-md:px-[16px] bg-Dark-Secondary'>
       <div className='w-full flex justify-between items-center' >
        <Image src={Logo} alt='Logo'/>
        <ul className="flex space-x-[24px] max-md:hidden" >
            <li><a className={LinkStyle} href="/">Home</a></li>
            <li><a className={LinkStyle} href="/pages/News">News</a></li>
            <li><a className={LinkStyle} href="/pages/Podcasts">Podcasts</a></li>
            <li><a className={LinkStyle} href="/pages/Resources">Resources</a></li>
        </ul>
        <button className='px-[14px] py-[10px] bg-Yellow rounded-[6px] max-md:hidden'>Contact Us</button>
          <Image onClick={handleSidebarToggle}  className='cursor-pointer hidden max-md:block' src={Menu} alt='Menu-Icon'/>
       </div>
       {isSidebarOpen === true ? (
        <Sidebarmenu  isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
       ) : (
        <></>
       )}

       

    </nav>
  )
}

export default Navbar;