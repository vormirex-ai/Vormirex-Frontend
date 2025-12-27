import React from 'react';

import VormirexLanding from '../components/layout/VormirexLanding';
import SoundFamiliar from '../components/layout/SoundFamiliar';
import Whatisvormirex from '../components/layout/Whatisvormirex';
import BuiltForEveryone from '../components/layout/BuiltForEveryone';
import HowItWorks from '../components/layout/HowItWorks';
import CourseGrid from '../components/layout/CourseGrid';
import TestimonialSection from '../components/layout/TestimonialSection';
import PricingSection from '../components/layout/PricingSection';
import LearningCTA from '../components/layout/LearningCTA';
import Footer from '../components/layout/Footer';

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
