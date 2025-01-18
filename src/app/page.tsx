"use client";

import React, { useEffect, useState } from "react";
import Header from "./components/home/Header/Header";
import Presentation from "./components/home/Presentation/Presentation";
import About from "./components/home/About/About";
import HowItWorks from "./components/home/HowItWorks/HowItWorks";
import Footer from "./components/home/Footer/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Presentation />
        <About />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
