import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import CallToAction from "./components/CallToAction";
import PricingTable from "./components/PricingTable";
import FeaturedPosts from "./components/FeaturedPosts";
import ClientReviews from "./components/ClientReviews";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <main className="font-sans bg-[#0f0f1c] text-white">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo></WhatIDo>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <CallToAction></CallToAction>
      <PricingTable></PricingTable>
      <FeaturedPosts></FeaturedPosts>
      <ClientReviews></ClientReviews>
      <ContactMe></ContactMe>
    </main>
  );
}

export default App;
