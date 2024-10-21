"use client";

import About from "@/pages/About";
import Header from "@/pages/Header";
import Intro from "@/pages/Intro";
import Projects from "@/pages/Projects";
import Footer from "@/pages/StickyFooter";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
