import React from 'react';
import Hero from '../../Global/Hero';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/Subscribe';
import Features from '../../Global/Features';
import Explore from '../../Global/Explore';
import Gateway from '@/app/Global/Gateway';


type Props = {}

function Home({}: Props) {
  return (
    <div>
       <Subscribe/>
       <Navbar LinkStyle={''} />
       <Hero/>
       <Features/>
       <Explore/>
       <Gateway/>
    </div>
  )
} 

export default Home;