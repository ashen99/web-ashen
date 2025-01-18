import React from "react";
import Navbar from "../Components/Navbar";
import HancWavePng from "../assets/waving-hand-sign_emoji-modifier-fitzpatrick-type-1-2_1f44b-1f3fb_1f3fb.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Projects from "../Components/Projects";

function Hero() {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen pt-24">
        <div className="hero-content text-center">
          <div className="max-w-4xl mx-auto px-4 my-[70px]">
            <div className="flex items-center justify-center gap-4">
              <img
                src={HancWavePng}
                alt="waving hand"
                className="w-16 h-16 object-contain"
              />
              <h1 className="text-primary text-6xl font-bold">
                Hi, I am <span className="text-[#2978b5]">Ashen Perera.</span>{" "}
              </h1>
            </div>

            <h2 className="text-4xl mt-6">I am a Software Engineer</h2>
            <div className="flex justify-center gap-4 mt-6">
              <p className="py-6 max-w-xl">
                I am a dedicated software engineer with 2.5 years of experience
                designing and developing innovative web and mobile applications.
                With a strong focus on creating efficient, scalable, and
                user-friendly solutions, I thrive on turning complex ideas into
                high-quality software that delivers real-world impact.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a href="https://example.com">
                <span class="btn btn--outline">Resume</span>
              </a>
              <a
                href="https://github.com/ashen99"
                aria-label="github"
                className="text-[#444444] hover:text-[#2978b5] relative after:bg-[#2978b5] after:absolute after:h-1 after:w-0 after:bottom-[-10px] after:left-0 after:transition-all after:duration-500 after:delay-100 hover:after:w-full cursor-pointer mr-4"
              >
                <FaGithub size={45} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashen-perera-834747195/"
                aria-label="FaLinkedin"
                className="text-[#444444] hover:text-[#2978b5] relative after:bg-[#2978b5] after:absolute after:h-1 after:w-0 after:bottom-[-10px] after:left-0 after:transition-all after:duration-500 after:delay-100 hover:after:w-full cursor-pointer mr-4"
              >
                <FaLinkedin size={45} />
              </a>
            </div>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
