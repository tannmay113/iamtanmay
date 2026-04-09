import React from "react";
import Hero from "./Hero";
import Education from "./Education";
import Skills from "./Skills";
import FunFact from "./Funfack";

const About = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
        <Hero />
        <Skills />
        <Education />
        <FunFact />
      </div>
    </section>
  );
};

export default About;
