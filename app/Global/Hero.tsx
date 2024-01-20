'use client'
import React from 'react';
import Image from 'next/image';
import BlackArrow from "../assets/icons/Black-Arrow.png";
import Arrow from "../assets/icons/Icon.png";
import Icon from "../assets/images/Icon.png";
import Icon1 from "../assets/images/Icon-1.png";
import Icon2 from "../assets/images/Icon-2.png";
import Avatar1 from "../assets/images/Avatar-1.png";
import Avatar2 from "../assets/images/Avatar-2.png";
import Avatar3 from "../assets/images/Avatar-3.png";
import Avatar4 from "../assets/images/Avatar-4.png";



type Props = {}

function Hero({}: Props) {
  return (

<section>
    <div className='grid grid-cols-5 max-md:grid-cols-1  w-full' >
     <div className=' grid grid-cols-1 col-span-3 '>
      <div className=' py-[100px] max-md:py-[30px] pl-[80px] pr-[40px] max-md:pl-[16px] max-md:pr-[16px]  border-1 border-b  bg-Dark-Primary border-[#404040]' >
         <p className='text-[22px] text-[#666]  max-md:text-[18px]' >Your Journey to Tomorrow Begins Here</p>
         <h1 className='text-[55px] font-500 text-[#fff] max-md:text-[30px]' >Explore the Frontiers of Artificial Intelligence</h1>
         <p className='text-[16px] font-400 text-[#7E7E81] max-md:text-[14px]' >Welcome to the epicenter of AI innovation. 
            FutureTech AI News is your passport to a world 
            where machines think, learn,and reshape the future. Join us on this visionary
            expedition into the heart of AI.</p>
            
      </div>

      <div className='grid grid-cols-3' >
        <div className='pl-[80px] max-md:pl-[16px] max-md:pr-[20px] pr-[40px] py-[30px] border-1 border-r  border-[#404040]  w-full   bg-Dark-Primary' >
            <h2 className='text-[30px] text-[#fff] font-[600]' >300<span className='text-Yellow' >+</span></h2>
            <p className='text-Grey' >Resources available</p>
        </div>
        <div className='pl-[40px]  py-[30px] max-md:pl-[16px] max-md:pr-[20px] pr-[40px]   w-full border-1 border-r  border-[#404040]  bg-Dark-Primary' >
            <h2 className='text-[30px] text-[#fff] font-[600]' >12k<span className='text-Yellow' >+</span></h2>
            <p className='text-Grey' >Total Downloads</p>
        </div>
        <div className='pl-[40px] py-[30px] max-md:pl-[16px] max-md:pr-[20px] pr-[40px]  w-full  bg-Dark-Primary' >
            <h2 className='text-[30px] text-[#fff] font-[600]' >10k<span className='text-Yellow' >+</span></h2>
            <p className='text-Grey' >Active Users</p>
        </div>
      
      </div>

     </div>
       
     <div className='col-span-2  pb-[50px] pl-[50px] items-end pr-[80px] grid grid-cols-1 border-1 border-l max-md:pt-[100px] max-md:pb-[40px] max-md:border-t  border-[#404040]  bg-Dark-Primary' >
         <div className='space-y-[20px]' >
               <div className='flex' >
                   <div className='flex border border-1 border-[#262626] -space-x-4 rtl:space-x-reverse p-[8px] rounded-full' >
                     <Image className='border  border-1 border-[#666666] rounded-full' src={Avatar1} alt='Avatar1' />
                     <Image className='border z-10 border-1 border-[#666666] rounded-full' src={Avatar2} alt='Avatar2' />
                     <Image className='border z-10 border-1 border-[#666666] rounded-full' src={Avatar3} alt='Avatar3' />
                     <Image className='border z-10 border-1 border-[#666666] rounded-full' src={Avatar4} alt='Avatar4' />
                     </div>
               </div>
               <div>
                 <h2 className='text-[20px] text-[#fff]' >Explore 1000+ resources</h2>
                 <p className='text-[#98989A]' >Over 1,000 articles on emerging tech trends and breakthroughs.</p>
               </div> 
               <button className='py-[14px] px-[20px] max-md:w-full justify-center flex space-x-[4px] border border-1 border-[#262626] rounded-[8px]' ><p className='text-[14px] text-Grey' >Explore Resources</p> <Image src={Arrow} alt='Arrow'/></button>

           
         </div>
     </div>

   </div>

     <div className='grid grid-cols-3 max-md:grid-cols-1 w-full' >
       <div className='w-full py-[40px] flex justify-between items-center max-md:pl-[16px] max-md:pr-[16px]  pl-[80px] pr-[50px] border-1 border-r border-t min-md:border-b  border-[#404040] bg-Dark-Primary'>
        <div className='space-y-[20px]' >
          <Image src={Icon} alt='icon'/>
          <div>
            <p className='text-[18px] max-md:text-[16px] text-[#fff] font-500' >Latest News Updates</p>
            <p className='text-[16px] max-md:text-[14px] text-[#7E7E81]' >Stay Current</p>
          </div>
          <p  className='text-[16px] max-md:text-[14px] font-400 text-Grey' >Over 1,000 articles published monthly</p>
        </div>
        <div className='p-[12px] rounded-full bg-Yellow'>
           <Image  src={BlackArrow} alt='BlackArrow' />
        </div>
       </div>

       <div className='w-full py-[40px] flex justify-between items-center max-md:pl-[16px] max-md:pr-[16px] pl-[50px] pr-[50px] border-1 border-r border-t min-md:border-b   border-[#404040] bg-Dark-Primary'>
        <div className='space-y-[20px]' >
          <Image src={Icon1} alt='Icon1'/>
          <div>
            <p className='text-[18px] max-md:text-[16px] text-[#fff] font-500' >Expert Contributors</p>
            <p className='text-[16px] max-md:text-[14px] text-[#7E7E81]' >Trusted Insights</p>
          </div>
          <p  className='text-[16px] font-400 text-Grey' >50+ renowned AI experts on our team</p>
        </div>
        <div className='p-[12px] rounded-full bg-Yellow'>
           <Image  src={BlackArrow} alt='BlackArrow' />
        </div>
       </div>

       <div className='w-full py-[40px] flex justify-between items-center max-md:pl-[16px] max-md:pr-[16px] pl-[50px] pr-[50px] border-1 border-r border-t min-md:border-b  border-[#404040] bg-Dark-Primary'>
        <div className='space-y-[20px]' >
          <Image src={Icon2} alt='Icon2'/>
          <div>
            <p className='text-[18px] max-md:text-[16px] text-[#fff] font-500' >Global Readership</p>
            <p className='text-[16px] max-md:text-[14px] text-[#7E7E81]' >Worldwide Impact</p>
          </div>
          <p  className='text-[16px] max-md:text-[14px] font-400 text-Grey' >2 million monthly readers</p>
        </div>
        <div className='p-[12px] rounded-full bg-Yellow'>
           <Image  src={BlackArrow} alt='BlackArrow' />
        </div>
       </div>
      
     </div>
</section>
   
  )
}

export default Hero