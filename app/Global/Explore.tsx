"use client"
import React from 'react';
import Arrow from "../assets/icons/Icon.png";
import Image from 'next/image';
import avatar from "../assets/images/Avatar-1.png";



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

      <div className='flex  px-[80px] py-[80px] max-md:py-[20px] max-md:px-[16px] overflow-x-auto custom-scrollbar-hidden  bg-[#141414] overflow-hidden ' >
         <div className='flex space-x-[20px] relative top-[8px]' >
            {buttons.map((item) => (
               <button className={buttonStyle}>{item}</button>
             ))}
         </div>
       </div> 
       

      {/* Testimonials */}
      <div className='grid grid-cols-8 max-md:grid-cols-1 max-md:space-y-[30px] max-md:px-[16px] max-md:py-[40px] px-[80px] py-[60px] bg-[#141414]  border-b border-t border-[#404040]' >
        <div className='col-span-2 items-start flex space-x-[10px] justify-between ' >
          <div className='flex space-x-[10px]'>
            <Image src={avatar} alt="avatar" />
            <div>
              <h3 className='text-[#FFFFFF] text-[18px] font-[600]' >John Techson</h3>
              <p className='text-[16px] max-md:text-[14px] text-[#98989A]' >Quantum Computing</p>
            </div>
            
          </div>
          
            <div className='w-[150px] h-[50px] hidden  max-md:block'>
              <button className='flex h-[50px] items-center justify-center max-md:w-full space-x-[4px] border border-1 border-[#262626] rounded-[8px]' >
                  <p className='text-[14px] text-Grey' >View Blog</p><Image src={Arrow} alt='Arrow'/>
              </button>
            </div>
            
                          
        </div>
        <div className='col-span-6 flex items-center' > 


          <div className='w-full space-y-[24px]'>
             <h4 className='text-[18px] max-md:text-[16px] text-[#98989A]'>October 15, 2023</h4>
             <div>
               <h3 className='text-[22px] font-[600] text-[#fff] max-md:text-[18px]' >The Quantum Leap in Computing</h3>
               <p className='text-[#98989A] max-md:text-[14px] ' >Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
             </div>
             <div>

             </div>
          </div>
       
             <button className='w-[130px] max-md:hidden items-center h-[50px] max-md:w-full justify-center flex space-x-[4px] border border-1 border-[#262626] rounded-[8px]' ><p className='text-[14px] text-Grey' >View Blog</p> <Image src={Arrow} alt='Arrow'/></button>
        
        
        </div> 
      </div>  
      </section>
  ) 

}

  
export default Explore