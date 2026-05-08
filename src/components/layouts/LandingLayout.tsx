import { Outlet } from "react-router-dom";
import InfiniteTunnel from "../waveParticales";
import LandingNavbar from "../landing/Navbar";
import Hero from "../landing/Hero";
import FeaturesSection from "../landing/FeaturesSection";
import TestimonialSection from "../landing/testimonials/TestimonialSection";



const LandingLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#020004] text-white overflow-hidden">
      <div className="relative z-10">
        <LandingNavbar />
        <main className="pt-20">

          <Hero />
          <FeaturesSection />
          <TestimonialSection />
          {/* <Outlet /> */}
        </main>
      </div>
    </div>
  );
};

export default LandingLayout;

// import { Outlet } from "react-router-dom";
// import InfiniteTunnel from "../waveParticales";
// import LandingNavbar from "../landing/Navbar";
// import Hero from "../landing/Hero";

// const LandingLayout = () => {
//   return (
//     <div className="relative min-h-screen bg-[#020004] text-white overflow-hidden">


//       <div className="absolute inset-0 z-0">
//         <InfiniteTunnel />
//       </div>

//       <div className="relative z-10">
//         <LandingNavbar />

//         <main className="pt-20">
//           <Hero />
//           <Outlet />
//         </main>
//       </div>

//     </div>
//   );
// };

// export default LandingLayout;