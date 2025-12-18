import React from "react";
import { Link } from "react-router-dom";
import logoWithoutText from "../assets/logo.png";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="z-10 text-center px-4 max-w-4xl">
        <div className="mb-8 flex justify-center">
          <img
            src={logoWithoutText}
            alt="Vormirex Logo"
            className="w-24 h-24 md:w-32 md:h-32 animate-pulse-slow"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-600">
          VORMIREX
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          The Next-Gen AI Learning Platform for <br />
          <span className="text-teal-400 font-semibold">
            Cyber Security
          </span>,{" "}
          <span className="text-purple-400 font-semibold">Data Science</span>,
          and <span className="text-pink-400 font-semibold">AI/ML</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            to="/"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/30"
          >
            Launch Dashboard
          </Link>

          <button className="px-8 py-4 border border-gray-600 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <footer className="absolute bottom-6 text-gray-500 text-sm">
        © 2025 Vormirex AI. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
