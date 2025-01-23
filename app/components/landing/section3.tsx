"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useEffect, useState } from 'react';

export const Section3 = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        // Generate image array
        const imageArray = Array.from({ length: 16 }, (_, i) => {
            const n = (i + 1) % 8;
            return n ? `/carouselImg/${n}.avif` : '';
        }).filter(Boolean);

        // Create multiple sets of images for infinite scroll
        setImages([...imageArray, ...imageArray, ...imageArray]);
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        const container = containerRef.current;

        if (!carousel || !container) return;

        // Ensure GSAP is registered
        gsap.registerPlugin(ScrollTrigger);

        // Create the infinite scroll animation
        const tl = gsap.timeline({
            repeat: -1,
            paused: false,
        });

        // Get total width of the carousel
        const carouselWidth = carousel.scrollWidth;


        tl.to(carousel, {
            x: -carouselWidth / 3, // Move 1/3 of the total width
            duration: 20, // Adjust speed here
            ease: "linear",
            onComplete: () => {
                // Reset position instantly
                gsap.set(carousel, { x: 0 });
            }
        });

        return () => {
            tl.kill();
        };
    }, [images]);

    useGSAP(() => {
        gsap.fromTo(".gsap-section4",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: .5,
                scrollTrigger: {
                    trigger: ".gsap-section4",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center lg:pt-[5rem] py-[5rem]">9
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    background: 'radial-gradient(35% 50% at 50% 50%,rgba(0,0,0,0) 0%,rgb(0,0,0) 100%)',
                    zIndex: 10
                }}
            />
            <div className="absolute animate-spin will-change-transform origin-center 
        min-w-[3000px] h-[3000px] z-0">
                <img
                    src="/bg-hero.avif"
                    alt="hero"
                    className='block min-w-full min-h-full object-cover'
                />
            </div>


            <div className=" mt-[5rem]  flex items-center flex-col space-y-2 px-5 z-10">
                <div className="anton lg:text-[5rem] sm:text-[3rem] text-[2rem] font-semibold text-center leading-[1]">
                    <div className="gsap-section4 opacity-0">OUR</div>
                    <div className="gsap-section4 opacity-0">COMMUNITY</div>
                </div>

                <div className="fira md:w-[700px] sm:w-[500px] w-full text-center gsap-section4 opacity-0 text-[#ebebeb]">
                    Fricaa is where positivity flourishes. Our community is built on respect, understanding,
                    and the shared desire to create a space where everyone feels safe and valued. Inappropriate
                    behavior has no place here; we&apos;re all about positive vibes and meaningful connections.
                </div>

                <button className='gsap-section4 opacity-0 bg-[#E4317D] py-2 px-2 rounded-[10px] fira'>Ambassadors at Wizz</button>
            </div>

            <div
                ref={containerRef}
                className="relative w-full min-h-[400px] mt-5 z-10 overflow-hidden flex items-center justify-center"
            >
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(90deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgb(0,0,0) 100%)',
                        zIndex: 10
                    }}
                />
                <div
                    ref={carouselRef}
                    className="absolute bottom-0 flex gap-4 will-change-transform"
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="min-w-[150px] rounded-[30px] h-[250px]  overflow-hidden bg-white/10 backdrop-blur-xl"
                        >
                            <img
                                src={src}
                                className="object-cover w-full h-full rounded-[30px]"
                                alt={`Carousel image ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
