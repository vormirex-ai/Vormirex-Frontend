import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import all your components from the components folder
import VormirexLanding from './Landingpage/VormirexLanding';
import SoundFamiliar from './Landingpage/SoundFamiliar';
import Whatisvormirex from './Landingpage/Whatisvormirex';
import BuiltForEveryone from './Landingpage/BuiltForEveryone';
import HowItWorks from './Landingpage/HowItWorks';
import CourseGrid from './Landingpage/CourseGrid';
import TestimonialSection from './Landingpage/TestimonialSection';
import PricingSection from './Landingpage/PricingSection';
import LearningCTA from './Landingpage/LearningCTA';
import Footer from './Landingpage/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <VormirexLanding />
      <SoundFamiliar />
      <Whatisvormirex />
      <BuiltForEveryone />
      <HowItWorks />
      <CourseGrid />
      <TestimonialSection />
      <PricingSection />
      <LearningCTA />
      <Footer />

      <style>{`
        .app-wrapper {
          background-color: #0a0b14;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        
        .app-wrapper > * {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}

export default App;
