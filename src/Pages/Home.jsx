import React from 'react';

import Hero from '../Components/HeroSection/HeroSection';
import Invest from '../Components/invest/Invest';
import ShortCourses from '../Components/ShortCourses/ShortCourses';
import Provide from '../Components/provide/Provide';
import EDForm from '../Components/EdForm/EDForm';



function Home() {
  return (
   <>
   <Hero/>
   <Invest/>
   <ShortCourses/>
 {/* <Provide/> */}
 {/* <EDForm/> */}
 
   </>
  );
}

export default Home;