'use client'
import Image from 'next/image';
import arrow from "../assets/icons/Icon.png";


const Subscribe = () => {
    return(
        <div className='bg-Dark-Primary space-x-[10px] w-full max-sm:flex-col flex justify-center items-center text-center py-[12px]'>
         <p className='text-Grey text-[14px] max-md:text-[12px] font-400' >Subscribe to our Newsletter For New & latest Blogs and Resources</p>
         <Image src={arrow} alt="arrow" className='cursor-pointer' />
       </div>
    )
}


export default Subscribe