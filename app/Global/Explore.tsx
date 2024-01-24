"use client"
import React, {useState} from 'react';
import Arrow from "../assets/icons/Icon.png";
import Image from 'next/image';
import Avatar from "../assets/images/Avatar-1.png";
import Avatar2 from "../assets/images/Avatar-2.png";
import Avatar3 from "../assets/images/Avatar-3.png";
import {Testimonials} from "../data/data";


type Props = {

}


function Explore({}: Props) {

  

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

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
         <div className='flex space-x-[20px]' >
            {buttons.map((item) => (
               <button className={buttonStyle}>{item}</button>
             ))}
         </div>
       </div> 
       

      {/* Testimonials */}
      {Testimonials.map((items) => (
         <div key={items.id} className='  grid grid-cols-8 max-md:grid-cols-1 max-md:space-y-[30px] max-md:px-[16px] max-md:py-[40px] px-[80px] py-[60px] bg-[#141414]  border-b border-t border-[#404040]' >
         <div className='col-span-2 items-start flex space-x-[10px] justify-between ' >
           <div className='flex space-x-[10px]'>
            {/* Avatar */}
            
              <Image src={Avatar} alt="avatar" />
            
             
             <div>
               <h3 className='text-[#FFFFFF] text-[18px] font-[600]' >{items.Name}</h3>
               <p className='text-[16px] max-md:text-[14px] text-[#98989A]' >{items.Topic}</p>
             </div>
             
           </div>
           
             <div className='w-[150px] h-[50px] hidden  max-md:block'>
               <button className='flex h-[50px] items-center justify-center max-md:w-full space-x-[4px] border border-1 border-[#262626] rounded-[8px]' >
                   <p className='text-[14px] text-Grey' >View Blog</p><Image src={Arrow} alt='Arrow'/>
               </button>
             </div>
             
                           
         </div>
         <div className='col-span-6 flex items-center'> 
           {/* post */}
           <div className='w-full space-y-[24px] '>
              <h4 className='text-[18px] max-md:text-[16px] text-[#98989A]'>{items.Date}</h4>
              <div>
                <h3 className='text-[22px] font-[600] text-[#fff] max-md:text-[18px]' >{items.Title}</h3>
                <p className='text-[#98989A] max-md:text-[14px] ' >{items.Post}</p>
              </div>
              {/* comment and liks */}
              <div className='flex space-x-[8px]' >
               <div className='px-[12px] py-[6px] space-x-[2px] rounded-full flex border border-[#262626]' >
                  <button onClick={handleLikeClick}>
                       {liked === false ? (
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                           <path d="M9.70414 17.9255L9.6987 17.9226L9.67982 17.9124C9.66375 17.9037 9.64076 17.8911 9.61131 17.8746C9.55243 17.8418 9.4677 17.7937 9.3608 17.7308C9.14708 17.605 8.84431 17.4199 8.48212 17.1791C7.75895 16.6984 6.79268 15.9917 5.82383 15.0886C3.90651 13.3013 1.875 10.6459 1.875 7.375C1.875 4.93495 3.928 3 6.40625 3C7.86365 3 9.1686 3.66591 10 4.70966C10.8314 3.66591 12.1363 3 13.5938 3C16.072 3 18.125 4.93495 18.125 7.375C18.125 10.6459 16.0935 13.3013 14.1762 15.0886C13.2073 15.9917 12.241 16.6984 11.5179 17.1791C11.1557 17.4199 10.8529 17.605 10.6392 17.7308C10.5323 17.7937 10.4476 17.8418 10.3887 17.8746C10.3592 17.8911 10.3363 17.9037 10.3202 17.9124L10.3013 17.9226L10.2959 17.9255L10.2936 17.9268C10.1103 18.0241 9.88974 18.0241 9.70644 17.9268L9.70414 17.9255Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round"/>
                         </svg>
                       ):(
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                           <path d="M9.70414 17.9255L9.6987 17.9226L9.67982 17.9124C9.66375 17.9037 9.64076 17.8911 9.61131 17.8746C9.55243 17.8418 9.4677 17.7937 9.3608 17.7308C9.14708 17.605 8.84431 17.4199 8.48212 17.1791C7.75895 16.6984 6.79268 15.9917 5.82383 15.0886C3.90651 13.3013 1.875 10.6459 1.875 7.375C1.875 4.93495 3.928 3 6.40625 3C7.86365 3 9.1686 3.66591 10 4.70966C10.8314 3.66591 12.1363 3 13.5938 3C16.072 3 18.125 4.93495 18.125 7.375C18.125 10.6459 16.0935 13.3013 14.1762 15.0886C13.2073 15.9917 12.241 16.6984 11.5179 17.1791C11.1557 17.4199 10.8529 17.605 10.6392 17.7308C10.5323 17.7937 10.4476 17.8418 10.3887 17.8746C10.3592 17.8911 10.3363 17.9037 10.3202 17.9124L10.3013 17.9226L10.2959 17.9255L10.2936 17.9268C10.1103 18.0241 9.88974 18.0241 9.70644 17.9268L9.70414 17.9255Z" fill="#FF5500"/>
                         </svg>   
                       )}
                  </button>
                  <p className='text-[#98989A]' >{items.Lik}</p>
               </div>
 
               <div className='px-[12px] py-[6px] space-x-[2px] rounded-full flex border border-[#262626]' >
                 <button>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M7.07216 16.4907C7.95613 16.9236 8.95 17.1667 10.0007 17.1667C13.6826 17.1667 16.6673 14.182 16.6673 10.5C16.6673 6.81814 13.6826 3.83337 10.0007 3.83337C6.31875 3.83337 3.33398 6.81814 3.33398 10.5C3.33398 11.8668 3.74529 13.1375 4.45087 14.1951M7.07216 16.4907L3.33398 17.1667L4.45087 14.1951M7.07216 16.4907L7.07757 16.4898M4.45087 14.1951L4.45193 14.1923" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                 </button>
                  
                  <p className='text-[#98989A]' >{items.Comment}</p>
               </div>
 
               <div className='px-[12px] py-[6px] space-x-[2px] rounded-full flex border border-[#262626]' >
                 <button> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                     <path d="M8.36554 12.1347L3.47679 9.9125C2.80399 9.60668 2.83269 8.64138 3.52248 8.37608L15.7501 3.67313C16.4241 3.41392 17.0863 4.07612 16.8271 4.75007L12.1241 16.9777C11.8588 17.6675 10.8935 17.6962 10.5877 17.0234L8.36554 12.1347ZM8.36554 12.1347L12.0195 8.48083" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                 </button>
                  <p className='text-[#98989A]' >{items.Messages}</p>
               </div>
              </div>
           </div>
 
           <button className='w-[130px] max-md:hidden items-center h-[50px] max-md:w-full justify-center flex space-x-[4px] border border-1 border-[#262626] rounded-[8px]' ><p className='text-[14px] text-Grey' >View Blog</p> <Image src={Arrow} alt='Arrow'/></button>
 
         </div> 
       </div>  
      ))}
     
      </section>
  ) 

}

  
export default Explore