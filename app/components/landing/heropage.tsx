"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger)
export const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(".gsap-scaleherostuff", {
      scale: 0,
    }, {
      scale: .75,
      duration: 1,
      opacity: 1,
      ease: "bounce.inOut",
    })
    gsap.fromTo(".gsap-hero_container",
      {
        scale: 1,
        opacity: 1,
        pin: false
      },
      {
        scale: 1.3,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: .5,
        scrollTrigger: {
          trigger: ".gsap-hero_container",
          start: "top top",
          end: "+=50%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          // onLeave: (self) => self.disable(false),
          // onEnterBack: (self) => self.enable(), // Re-enables the pin when scrolling back up
        }
      }
    );
  });

  return (
    <div className='gsap-hero_container opacity-1 scalle-100 relative h-screen overflow-hidden flex justify-center items-center'>
      <div className="absolute animate-spin will-change-transform origin-center 
        w-[3000px] h-[3000px]">
        <img
          src="/bg-hero.avif"
          alt="hero"
          className='block w-full h-full object-cover'
        />
      </div>


      <div className="absolute  px-5 inset-0 z-[10] pt-[50px] flex items-center justify-center">
        <div className="flex flex-col relative justify-center items-center space-y-2 xl:w-[600px] w-[400px]">
          <div className="text-center w-full z-10">
            <div className="">Pop into online profiles</div>
            <div className="">& chat Fricaa new people</div>
          </div>

          <div className="w-full flex justify-center xl:space-y-[6.5rem] space-y-[5rem]">
            <div className="absolute flex justify-center items-center space-x-5 w-full xl:h-[180px] md:h-[140px] h-[120px] border-[3px] border-[#ccc]/40 z-[1] rounded-full">
              <h1 className='xl:text-[9rem] md:text-[7rem] text-[5.4rem] font-bold'>CHAT</h1>
              <div className='h-[60%] w-[3px] bg-white block animate-pulse'></div>
            </div>
            <h1 className='xl:text-[9rem] md:text-[7rem] text-[5.4rem] font-bold z-[2]'>NOW</h1>
          </div>
      <img src="/yando/sample_1.webp" className="md:w-[140px] md:h-[140px] w-[40px] h-[40px] gsap-scaleherostuff opacity-0 absolute top-[-150px]" alt="samp1" />
      <img src="/yando/sample_2.webp" className="md:w-[90px] md:h-[90px] w-[69px] h-[69px] gsap-scaleherostuff opacity-0 absolute top-0 left-[-40px]" alt="samp2" />
      <img src="/yando/sample_3.webp" className="md:w-[120px] md:h-[120px] w-[40px] h-[40px] gsap-scaleherostuff opacity-0 absolute top-[40px] right-[-15px]" alt="samp3" />
      <img src="/yando/sample_4.webp" className="md:w-[100px] md:h-[100px] w-[80px] h-[80px] gsap-scaleherostuff opacity-0 absolute bottom-[-140px] left-0" alt="samp4" />
      <img src="/yando/sample_5.webp" className="md:w-[95px] md:h-[95px] w-[37px] h-[37px] gsap-scaleherostuff opacity-0 absolute bottom-[50px] left-0" alt="samp5" />
      <img src="/yando/sample_6.webp" className="md:w-[100px] md:h-[100px] w-[37px] h-[37px] gsap-scaleherostuff opacity-0 absolute bottom-0" alt="samp6" />
        </div>
      </div>



    </div>
  )
}
