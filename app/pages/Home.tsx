import React from 'react'

type Props = {}

function Home({}: Props) {
  return (

<div>
    <div className='grid grid-cols-2 max-md:grid-cols-1  w-full' >

     <div className=' grid grid-cols-1'>
      <div className=' py-[100px]  pl-[80px] pr-[40px]  border-1 border bg-Dark-Primary border-[#404040]' >
         <p className='text-[22px] text-[#666]' >Your Journey to Tomorrow Begins Here</p>
         <h1 className='text-[55px] font-500 text-[#fff]' >Explore the Frontiers of Artificial Intelligence</h1>
         <p className='text-[16px] font-400 text-[#7E7E81]' >Welcome to the epicenter of AI innovation. 
            FutureTech AI News is your passport to a world 
            where machines think, learn,and reshape the future. Join us on this visionary
            expedition into the heart of AI.</p>
            
      </div>

      <div className='grid grid-cols-3' >
        <div className='pl-[80px] pr-[40px] py-[30px]   w-full  border-1 border bg-Dark-Primary border-[#404040]' >
            <h2 className='text-[30px] text-[#fff] font-600' >300<span className='text-Yellow' >+</span></h2>
            <p className='text-Grey' >Resources available</p>
        </div>
        <div className='pl-[40px]  py-[30px]   w-full  border-1 border bg-Dark-Primary border-[#404040]' >
            <h2 className='text-[30px] text-[#fff] font-600' >12k<span className='text-Yellow' >+</span></h2>
            <p className='text-Grey' >Total Downloads</p>
        </div>
        <div className='pl-[40px]  py-[30px]   w-full  border-1 border bg-Dark-Primary border-[#404040]' >
            <h2 className='text-[30px] text-[#fff] font-600' >10k<span className='text-Yellow' >+</span></h2>
            <p className='text-Grey' >Active Users</p>
        </div>
      
      </div>

     </div>

     <div className=' grid grid-cols-1 border-1 border bg-Dark-Primary border-[#404040]' ></div>

   </div>

     <div className='grid grid-cols-3 max-md:grid-cols-1 w-full' >
       <div className='w-full h-[100px] border-1 border bg-Dark-Primary border-[#404040]'></div>
       <div className='w-full h-[100px] border-1 border bg-Dark-Primary border-[#404040]'></div>
       <div className='w-full h-[100px] border-1 border bg-Dark-Primary border-[#404040]'></div>
     </div>
</div>
   
  )
}

export default Home