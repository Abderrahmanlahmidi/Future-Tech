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

      {/* The Content number 1 */}
      <div className='grid-cols-7 max-md:grid-cols-1 max-md:grid-rows-2 grid max-md:block' >
        <div className=' w-full col-span-3  max-md:row-span-1 border-r border-1 border-b border-[#404040]  pl-[80px] max-md:pl-[16px] max-md:pr-[16px]  max-md:py-[50px]  pr-[60px] py-[122px] space-y-[40px] max-md:space-y-[20px]'>
          <Image src={Icon3} alt='Icon' />
          <div>
            <h3 className='text-[30px] font-[600] text-[#fff]'>Future Technology Blog</h3>
            <p className='text-[16px] text-[#98989A]' >Stay informed with our blog section dedicated to future technology.</p>
          </div>
        </div>

        <div className='border-r border-1 border-b border-[#404040] w-full col-span-4 py-[60px] max-md:py-[30px] max-md:pl-[16px] max-md:pr-[16px] pl-[60px] pr-[80px]' >
            <div className='grid grid-cols-2 grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 gap-[20px] max-md:gap-[10px]' >
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>
                <h3 className='text-[20px] font-[500] text-[#fff]' >Quantity</h3>
                <p className='text-[16px] font-[400] text-[#98989A]' >Over 1,000 articles on emerging tech trends and breakthroughs.</p>
              </div>
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>
                <h3 className='text-[20px] font-[500] text-[#fff]' >Variety</h3>
                <p className='text-[16px] font-[400] text-[#98989A]' >Articles cover fields like AI, robotics, biotechnology, and more.</p>
              </div>
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>
                <h3 className='text-[20px] font-[500] text-[#fff]' >Frequency</h3>
                <p className='text-[16px] font-[400] text-[#98989A]' >Fresh content added daily to keep you up to date.</p>
              </div>
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>
                <h3 className='text-[20px] font-[500] text-[#fff]' >Authoritative</h3>
                <p className='text-[16px] font-[400] text-[#98989A]' >Written by our team of tech experts and industry professionals.</p>
              </div>
            </div>
        </div>
      </div>
      
      {/* The Content number 2 */}
      <div className='grid-cols-7 max-md:grid-cols-1 max-md:grid-rows-2 grid max-md:block  ' >
        <div className='border-1  border-r border-[#404040] w-full col-span-3  max-md:row-span-1  pl-[80px] max-md:pl-[16px] max-md:pr-[16px]  max-md:py-[50px]  pr-[60px] py-[122px] space-y-[40px] max-md:space-y-[20px]'>
          <Image src={Icon4} alt='Icon' />
          <div>
            <h3 className='text-[30px] font-[600] text-[#fff]'>Research Insights Blogs</h3>
            <p className='text-[16px] text-[#98989A]' >Dive deep into future technology concepts with our research section.</p>
          </div>
        </div>

        <div className=' w-full col-span-4 py-[60px] max-md:py-[30px] max-md:pl-[16px] max-md:pr-[16px] pl-[60px] pr-[80px]' >
            <div className='grid grid-cols-2 grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 gap-[20px] max-md:gap-[10px]' >
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>
                <h3 className='text-[20px] font-[500] text-[#fff]' >Depth</h3>
                <p className='text-[16px] font-[400] text-[#98989A]' >500+ research articles for in-depth understanding.</p>
              </div>
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>
                <h3 className='text-[20px] font-[500] text-[#fff]' >Graphics</h3>
                <p className='text-[16px] font-[400] text-[#98989A]' >Visual aids and infographics to enhance comprehension.</p>
              </div>
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>
                <h3 className='text-[20px] font-[500] text-[#fff]' >Trends</h3>
                <p className='text-[16px] font-[400] text-[#98989A]' >Explore emerging trends in future technology research.</p>
              </div>
              <div className='p-[30px] border border-1 border-[#262626] bg-[#1A1A1A] rounded-[10px] space-y-[16px]'>
                <h3 className='text-[20px] font-[500] text-[#fff]' >Contributors</h3>
                <p className='text-[16px] font-[400] text-[#98989A]' >Contributions from tech researchers and academics.</p>
              </div>
            </div>
        </div>
      </div>
     </div>
   </section>

    
  )
}

export default Features