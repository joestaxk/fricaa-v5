"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "./components/common/header";
import { Hero } from "./components/landing/heropage";
import { Section2 } from "./components/landing/section2";
import { Section3 } from "./components/landing/section3";
import { Section4 } from "./components/landing/section4";
import { Footer } from "./components/common/footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      gestureOrientation: "vertical",
      orientation: "vertical",
      touchMultiplier: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Section2 />
      <Section4 />
      <Section3 />
      <Footer /> 
    </div>
  );
}
