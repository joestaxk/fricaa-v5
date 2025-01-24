'use client';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'
import { CHAT_PROPS } from '@/app/utils/constants';
import { FakeChats } from '../common/fakeChats';

gsap.registerPlugin(ScrollTrigger)
export const Section2 = () => {
    useGSAP(() => {
    
        gsap.to('.gsap-mockup', {
            y: 0,
            scrollTrigger: {
                start: 'center',
                end: "bottom 80%",
                scrub: true
            }
        })
    })
    return (
        <div className='relative h-full w-full flex justify-center'>
            <div className="relative w-[900px] max-w-full flex items-center flex-col">
                <div className="anton lg:text-[4.5rem] md:text-[4rem] sm:text-[2.8rem] text-[2.5rem] font-[600] uppercase text-center leading-[1]">
                    <div className="">Expand Your world</div>
                    <div className="">Meet New Friends</div>
                    <div className="">on fricaa</div>
                </div>

                <div className="relative overflow-hidden gsap-mockup select-none h-full">
                    <img src="/frame.svg" alt=""  className='xsm:w-[320px] w-[300px] h-[600px] z-0'/>
                    {/* <div className="w-[320px] h-[600px] absolute rounded-[9%] top-6 left-5  blur-md saturate-200 inset-0 z-[-1] bg-gradient-to-l group-hover:bg-gradient-to-r from-[#EF3FE8] via-[#F94A3F] to-[#E4317D] transition-all duration-200"></div> */}
                    <video className='w-[490px] h-[555px] absolute z-10 top-5 rounded-[60px] select-none' playsInline loop muted autoPlay>
                        <source src='https://framerusercontent.com/assets/UDIqZrNAE2Co85ZHBf6G2BdAkVw.mp4' />
                    </video>
                    <div className="asboulute inset-0 bg-black z-10"></div>
                </div>
                <div className="absolute w-full">

                    {
                        CHAT_PROPS.map((v, i) => (
                            <FakeChats
                                key={i}
                                imgSrc={"/chatlandingpage/" + (i + 1) + ".webp"}
                                user={v.name}
                                message={v.message}
                                i={i}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
