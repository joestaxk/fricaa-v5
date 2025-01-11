'use client';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger)
export const Section4 = () => {
    useGSAP(() => {
        gsap.fromTo('.gsap_leftslide', {
            opacity: 0,
            x: -110
        }, {
            opacity: 1,
            duration: .3,
            ease: "power1.inOut",
            x: 0,
            scrollTrigger: {
                trigger: ".gsap_leftslide",
                start: 'top 50%',
                end: "bottom 50%",
                scrub: true,
                toggleActions: "play none none none"
            }
        })

        gsap.fromTo('.gsap_text_stagger', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: .5,
            ease: "power1.inOut",
            stagger: .5,
            scrollTrigger: {
                trigger: ".gsap_text_stagger",
                start: 'top 50%',
                end: "bottom 50%",
                scrub: true,
                toggleActions: "play none none none"
            }
        })
    })
    return (
        <div className='min-h flex justify-center pt-[5rem]'>
            <div className="w-[1200px] max-w-full space-y-3 px-5">
                <div className="gsap_leftslide">
                    <div className="flex items-center gap-2">
                        <img src="/landing/feeling_home.webp" className='w-10 h-10' alt="" />
                        <h1 className="text-[3rem] font-bold uppercase">Feelings</h1>
                    </div>

                    <div className="sm:w-[600px] w-full">
                        Say goodbye to outdated matchmaking apps. Feelings allow you to express yourself more than just a like or dislike! Whether you&apos;re searching for dating, seeking new friendships, or just want someone to chat with.
                    </div>
                </div>


                <div className="relative h-[650px] w-[350px]">
                    <img src="/frame.svg" className='absolute sm:h-[650px] h-[600px] z-[1] left-0 sm:w-[350px] w-[310px]' alt="" />
                    <img src="/landing/phone_section4.webp" className='absolute sm:h-[600px] h-[550px] top-5 z-[1] left-5 sm:w-[310px] w-[270px]' alt="" />
                    <img src="/landing/kitty.webp" className='w-[150px] z-[8] absolute bottom-0 right-0' alt="" />
                </div>

                <div className="grid grid-cols-2">
                    <div className="flex items-center gap-1 gsap_text_stagger">
                        <img src="/landing/feature_customFeelings.webp" alt="" className='w-[50px]' />
                        <div className="font-bold">Custom feelings</div>
                    </div>
                    <div className="flex items-center gap-1 gsap_text_stagger">
                        <img src="/landing/feature_boost.webp" alt="" className='w-[50px]' />
                        <div className="font-bold">Boost</div>
                    </div>
                    <div className="flex items-center gap-1 gsap_text_stagger">
                        <img src="/landing/feature_flash.webp" alt="" className='w-[50px]' />
                        <div className="font-bold">Flash</div>
                    </div>
                    <div className="flex items-center gap-1 gsap_text_stagger">
                        <img src="/landing/feature_globetrotter.webp" alt="" className='w-[50px]' />
                        <div className="font-bold">Globetrotter</div>
                    </div>
                    <div className="flex items-center gap-1 gsap_text_stagger">
                        <img src="/landing/feature_rewind.webp" alt="" className='w-[50px]' />
                        <div className="font-bold">Flash</div>
                    </div>
                    <div className="flex items-center gap-1 gsap_text_stagger">
                        <img src="/landing/feature_filters.webp" alt="" className='w-[50px]' />
                        <div className="font-bold">Advanced Filters</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
