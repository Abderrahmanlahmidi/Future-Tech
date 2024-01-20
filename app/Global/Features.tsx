'use client'
import React from 'react';
import Image from 'next/image';
import Icon3 from "../assets/images/Icon-3.png";
import Icon4 from "../assets/images/Icon-4.png";



type Props = {}

function Features({}: Props) {
  return (
    <section className='' >
     <div className='py-[80px]  border-1 border-t border-b border-[#404040] px-[80px] max-md:px-[16px] max-md:py-[40px] bg-[#1A1A1A]' >
      <div className='space-y-[14px]' >
        <button className='py-[4px] rounded-[4px] px-[8px] bg-[#333333] text-[16px] max-md:text-[14px] font-[500] text-[#fff]' >Unlock the Power of</button>
        <h2 className='text-[44px] font-[500] text-[#fff] max-md:text-[28px]' >FutureTech Features</h2>
      </div>
     </div>

     <div className='bg-[#141414]' >

      <div className='grid-cols-7 max-md:grid-cols-1 max-md:grid-rows-2 grid-flow-col grid' >
        <div className=' w-full col-span-3 pl-[80px] pr-[60px] py-[122px] space-y-[40px]'>
          <Image src={Icon3} alt='Icon' />
          <div>
            <h3 className='text-[30px] font-[600] text-[#fff]' >Future Technology Blog</h3>
            <p className='text-[16px] text-[#98989A]' >Stay informed with our blog section dedicated to future technology.</p>
          </div>
          
        </div>
        <div className=' w-full col-span-4 py-[60px] pl-[60px] pr-[80px]' >
            <div className='grid grid-cols-2 grid-rows-2 gap-[20px]' >
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>

              </div>
              
            </div>
        </div>
      </div>

      <div className='grid-cols-7 grid-flow-col grid' >
        <div className='h-[400px] w-full col-span-3 '></div>
        <div className='h-[400px] w-full col-span-4' ></div>
      </div>

     </div>

   </section>

    
  )
}

export default Features