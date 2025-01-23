'use client';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'
import FanRewards from './subSection4';
import FanRewards2 from './subSection4-2';

gsap.registerPlugin(ScrollTrigger)
export const Section4 = () => {

    return (
        <>
            <FanRewards />
            <FanRewards2 />
        </>
    )
}



