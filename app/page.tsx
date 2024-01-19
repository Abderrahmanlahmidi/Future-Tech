'use client'
import React from 'react';
import Subscribe from './components/Subscribe';
import Navbar from './components/Navbar';
import Home from './pages/Home';





type Props = {}

function page({}: Props) {


  return (
    <div  className='w-full flex flex-col justify-center' >
      <Subscribe/>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default page
