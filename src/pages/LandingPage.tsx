import React from 'react';

import VormirexLanding from '../components/layout/Landingpage/VormirexLanding';
import SoundFamiliar from '../components/layout/Landingpage//SoundFamiliar';
import Whatisvormirex from '../components/layout/Landingpage/Whatisvormirex';
import BuiltForEveryone from '../components/layout/Landingpage/BuiltForEveryone';
import HowItWorks from '../components/layout/Landingpage/HowItWorks';
import CourseGrid from '../components/layout/Landingpage/CourseGrid';
import TestimonialSection from '../components/layout/Landingpage/TestimonialSection';
import PricingSection from '../components/layout/Landingpage/PricingSection';
import LearningCTA from '../components/layout/Landingpage/LearningCTA';
import Footer from '../components/layout/Landingpage/Footer';

const LandingPage = () => {
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
    </div>
  );
};

export default LandingPage;
