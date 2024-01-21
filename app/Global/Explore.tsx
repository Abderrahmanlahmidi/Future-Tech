"use client"
import React from 'react';
import Arrow from "../assets/icons/Icon.png";
import Image from 'next/image';


type Props = {

}

function Explore({}: Props) {

  const buttons = [
    'All',
    'Quantum Computing',
    'AI Ethics',
    'Space Exploration',
    'Biotechnology',
    'Renewable Energy',
  ];
  
  const buttonStyle = "w-[201px] h-[70px] max-md:w-[151px] max-md:h-[57px] rounded-[7px] text-[14px] text-Grey hover:bg-[#262626] hover:text-[#fff] border border-1 border-[#262626]";

  return (
    <section>
        <div className='p-[80px] border-1 border-t border-b border-[#404040] max-md:px-[16px] max-md:py-[40px] bg-[#1a1a1a] flex max-md:flex-col max-md:space-y-[30px] justify-between items-center' >
           <div className='space-y-[14px]'>
             <button className='py-[4px] rounded-[4px] px-[8px] bg-[#333333] text-[16px] max-md:text-[14px] font-[500] text-[#fff]' >A Knowledge Treasure Trove</button>
             <h2 className='text-[44px] font-[500] text-[#fff] max-md:text-[28px]' >Explore FutureTech's In-Depth Blog Posts</h2>
           </div>
           <button className='py-[14px] px-[20px] max-md:w-full justify-center flex space-x-[4px] bg-[#141414] border border-1 border-[#262626] rounded-[8px]' >
            <p className='text-[14px] text-Grey' >View All Blogs</p>
            <Image src={Arrow} alt='Arrow'/></button>
        </div>

      <div className='flex px-[80px] py-[80px] max-md:py-[20px] max-md:px-[16px] max-lg:overflow-x-auto custom-scrollbar-hidden  bg-[#141414] max-lg:overflow-hidden ' >
         <div className='flex space-x-[20px] ' >
            {buttons.map((item) => (
               <button className={buttonStyle}>{item}</button>
             ))}
         </div>
       </div> 
      
      <div>
        hello
      </div>
       

    </section>
  )
}

export default Explore