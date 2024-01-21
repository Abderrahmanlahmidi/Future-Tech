import React from 'react';
import Hero from '../../Global/Hero';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/Subscribe';
import Features from '../../Global/Features';
import Explore from '../../Global/Explore';

type Props = {}

function Home({}: Props) {
  return (
    <div>
       <Subscribe/>
       <Navbar LinkStyle={''} />
       <Hero/>
       <Features/>
       <Explore/>
    </div>
  )
} 

export default Home;