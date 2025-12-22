import React from 'react';

import VormirexLanding from './VormirexLanding';
import SoundFamiliar from './SoundFamiliar';
import Whatisvormirex from './Whatisvormirex';
import BuiltForEveryone from './BuiltForEveryone';
import HowItWorks from './HowItWorks';
import CourseGrid from './CourseGrid';
import TestimonialSection from './TestimonialSection';
import PricingSection from './PricingSection';
import LearningCTA from './LearningCTA';
import Footer from './Footer';

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
