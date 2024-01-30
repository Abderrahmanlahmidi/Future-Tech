import React from 'react'
import Image from 'next/image'
import Arrow from "../assets/icons/Icon.png";
import Icon from "../assets/images/Icon-5.png";
import ImageRes from "../assets/images/Image.png";



type Props = {}

function Gateway({}: Props) {
  return (
    <section>
        {/* FutureTech's Resources */}
        <div className='p-[80px] border-1 border-t border-b border-[#404040] max-md:px-[16px] max-md:py-[40px] bg-[#1a1a1a] flex max-md:flex-col max-md:space-y-[30px] justify-between items-center' >
           <div className='space-y-[14px]'>
             <button className='py-[4px] rounded-[4px] px-[8px] bg-[#333333] text-[16px] max-md:text-[14px] font-[500] text-[#fff]' >Your Gateway to In-Depth Information</button>
             <h2 className='text-[44px] font-[500] text-[#fff] max-md:text-[28px]' >Unlock Valuable Knowledge with FutureTech's Resources</h2>
           </div>
           <button className='py-[14px] px-[20px] w-[180px] max-md:w-full justify-center flex space-x-[4px] bg-[#141414] border border-1 border-[#262626] rounded-[8px]' >
             <p className='text-[14px] text-Grey' >View All Blogs</p>
             <Image src={Arrow} alt='Arrow'/>
           </button>
        </div>

        {/* Resources */}
        <div className='grid grid-cols-8 items-center bg-[#141414]'>
          <div className='col-span-3 pl-[80px] pr-[60px] space-y-[30px]' >
               <Image src={Icon}  alt='Icon'/>
               <div>
                <h4 className='text-[#fff] text-[30px] font-[600]' >Ebooks</h4>
                <p className='text-[16px] text-[#98989A]' >
                  Explore our collection of ebooks covering a
                  wide spectrum of future technology topics.
                </p>
               </div> 
               <button className='w-full h-[60px] rounded-[6px] text-[#98989A] text-[14px] border border-[#262626] bg-[#191919]' >Download Ebooks Now</button>
          </div>
          
          <div className='col-span-5' >
             
          </div>
        </div>

    </section>

  )
}

export default Gateway