"use client";

import About from "@/pages/About";
import Header from "@/pages/Header";
import Intro from "@/pages/Intro";
import Projects from "@/pages/Projects";
import Footer from "@/pages/StickyFooter";
import Lenis from "lenis";
import Snap from "lenis/snap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    const snap = new Snap(lenis, {});

    snap.add(0);
    snap.add(window.innerHeight);
    snap.add(window.innerHeight * 2);
    snap.add(window.innerHeight * 3);
    snap.add(window.innerHeight * 4);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
