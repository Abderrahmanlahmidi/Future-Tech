'use client'
import React from 'react';
import Home from './pages/Home/page';


type Props = {}

function page({}: Props) {

  return (
    <div  className='w-full flex flex-col justify-center' >
      <Home/>
    </div>
  )
}

export default page
