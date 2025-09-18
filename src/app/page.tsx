import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AIRecruitmentSimulation from './components/Bot';
import RoleSelection from './components/RoleSelection';
import React from 'react';

const Page = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    < RoleSelection />
    <AIRecruitmentSimulation />
    </>
  );
};

export default Page;