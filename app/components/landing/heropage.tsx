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
        scrollTrigger: {
          trigger: ".gsap-hero_container",
          start: "top top",
          end: "+=10%",
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
            <div className="">& chat wizz new people</div>
          </div>

          <div className="w-full flex justify-center xl:space-y-[6.5rem] space-y-[5rem]">
            <div className="absolute flex justify-center items-center space-x-5 w-full xl:h-[180px] md:h-[140px] h-[120px] border-[3px] border-[#ccc]/40 z-[1] rounded-full">
              <h1 className='xl:text-[9rem] md:text-[7rem] text-[5.4rem] font-bold'>CHAT</h1>
              <div className='h-[60%] w-[3px] bg-white block animate-pulse'></div>
            </div>
            <h1 className='xl:text-[9rem] md:text-[7rem] text-[5.4rem] font-bold z-[2]'>NOW</h1>
          </div>
        </div>


        {/* absolute stuffs */}
        <div className="gsap-scaleherostuff opacity-0 flex flex-col items-center sm:scale-100 scale-75 absolute top-[100px] md:left-[10%] sm:left-[5%] left-[2%]">
          <img src="/landing/online-girl-2.avif" className='xl:w-[100px] w-[80px]' alt="" />
          <div className="capitalize bg-black/20 px-4 py-2 backdrop-blur-lg rounded-lg translate-y-[-10px] text-sm">
            let&apos;s viiiibe
          </div>
        </div>

        <div className="gsap-scaleherostuff opacity-0 flex flex-col items-center absolute xl:top-[30%] top-[10%] right-[10%] sm:scale-100 scale-75">
          <img src="/landing/online-girl-1.avif" className='w-[70px]' alt="" />
        </div>

        <div className="gsap-scaleherostuff opacity-0 absolute z-0 xl:bottom-[150px] bottom-[50px] xl:right-[15%] right-[10%] sm:scale-100 scale-75">
          <img src="/landing/typingonline.webp" className='md:w-[120px] w-[80px]' alt="" />
          <div className="md:ml-20 ml-10 mt-2 leading-[1] flex items-center flex-col">
            <div className="capitalize w-[100px] flex justify-center gap-2 bg-black/10 px-4 py-2 backdrop-blur-lg rounded-lg translate-y-[-10px] text-sm">
              <div className="w-[10px] h-[10px] animate-pulse rounded-full bg-white"></div>
              <div className="w-[10px] h-[10px] animate-pulse rounded-full bg-white"></div>
              <div className="w-[10px] h-[10px] animate-pulse rounded-full bg-white"></div>
            </div>
            <div className="text-sm">Damien typing...</div>
          </div>
        </div>

        <div className="gsap-scaleherostuff opacity-0 absolute sm:bottom-[150px] bottom-0 md:left-[25%] left-[5%]">
          <div className="capitalize bg-black/20 px-4 py-2 backdrop-blur-lg rounded-lg md:translate-y-[-10px] text-sm">
            Fricaa me
          </div>
          <div className="flex items-center gap-2 text-sm">
            <p>Joshua</p>
            <img src="/landing/online/1.webp" className='w-[50px]' alt="" />
          </div>
        </div>


        <div className="gsap-scaleherostuff opacity-0 absolute xl:top-[30% md:top-[15%] sm:top-[10%] top-14  xl:right-[20%] right-[40%] flex items-end flex-col">
          <div className="capitalize bg-black/20 px-4 py-2 backdrop-blur-lg rounded-lg md:translate-y-[-5px] text-sm">
            Let&apos;s chaaaat ! 💬
          </div>
          <div className="flex items-center gap-2 text-sm">
            <p>Leslie</p>
            <img src="/landing/online/2.webp" className='w-[50px]' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
