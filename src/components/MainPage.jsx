import React from 'react'
import  { useState, useEffect, useRef } from "react";
import HeroSection from './HeroSection'
import Featuresection from './Featuresection'
import Workflow from './Workflow'
import Navbar from './Navbar2'
import Bikebg from './Bikebg'
import Footer from './Footer';
import ServiceSection from './ServiceSection';
import VisitUs from './VisitUs';

const MainPage = () => {
    const [showNavbar, setShowNavbar] = useState(false);
  const bikebgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowNavbar(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (bikebgRef.current) observer.observe(bikebgRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <>
     {showNavbar && <Navbar />}
      <div ref={bikebgRef}>
        <Bikebg />
      </div>
      <main className="max-w-7xl mx-auto pt-20 px-6">
     <HeroSection />
        <ServiceSection/>
      
        
        <Workflow />
          <Featuresection />
          <VisitUs/>
         <Footer/> 
        </main>
        </>
  )
}

export default MainPage