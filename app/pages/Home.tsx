import React from 'react';
import Hero from '../Global/Hero';
import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import Features from '../Global/Features';

type Props = {}

function Home({}: Props) {
  return (
    <div>
       <Subscribe/>
       <Navbar LinkStyle={''} />
       <Hero/>
       <Features/>
    </div>
  )
} 

export default Home;