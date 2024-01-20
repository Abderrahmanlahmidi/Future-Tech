import React from 'react';
import Arrow from "../assets/icons/Icon.png";
import Image from 'next/image';

type Props = {}

function Explore({}: Props) {
  return (
    <section>
        <div className='p-[80px] max-md:px-[16px] max-md:py-[40px] bg-[#1a1a1a] flex max-md:flex-col justify-between items-center' >
           <div className='space-y-[14px]'>
             <button className='py-[4px] rounded-[4px] px-[8px] bg-[#333333] text-[16px] max-md:text-[14px] font-[500] text-[#fff]' >Your Gateway to In-Depth Information</button>
             <h2 className='text-[44px] font-[500] text-[#fff] max-md:text-[28px]' >Explore FutureTech's In-Depth Blog Posts</h2>
           </div>
           <button className='py-[14px] px-[20px] max-md:w-full justify-center flex space-x-[4px] bg-[#141414] border border-1 border-[#262626] rounded-[8px]' ><p className='text-[14px] text-Grey' >Explore Resources</p> <Image src={Arrow} alt='Arrow'/></button>
        </div>
    </section>
  )
}

export default Explore