import { MENUBAR_ITEM } from '@/app/utils/constants'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <div className='relative lg:py-[5em] py-[3rem] px-5 w-full flex items-center justify-center z-0'>
            <div className="w-[300px] h-[300px] bg-pink rounded-full absolute top-[-170px] blur-[10rem] z-0"></div>
            <div className="w-[1200px] max-w-full lg:space-y-0 space-y-5 lg:flex justify-between items-start gap-10 z-0">
                <div className="space-y-2">
                    <h1 className='uppercase font-semibold'>USEFUL PAGES</h1>
                    <ul className="space-y-2 text-gray-300 text-[14px]">
                        <li><a href="">Terms And Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Community Guildlines</a></li>
                        <li><a href="">Cookie Settings</a></li>
                    </ul>
                </div>

                <div className="">
                    <Image src="/fricaa.svg" alt="fricaa logo" className='md:w-[200px] sm:w-[90px] w-[100px] h-auto object-cover' width={100} height={100} />
                </div>

                <div className="">
                    <ul className='grid grid-cols-3 gap-4'>
                        {MENUBAR_ITEM.map(({ to, value, sub }, i) => (
                            <li key={i} className='relative space-x-1 group'>
                                <a href={to} className='capitalize hover:text-white  text-gray-200 transition-all duration-200'>{value}</a>
                                {!!sub && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-2 group-hover:rotate-180 duration-200' viewBox="0 0 256 256" style={{ userSelect: "none", width: "15px", height: "15px", display: "inline-block", fill: "white" }} ><g color="white"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path></g></svg>
                                )
                                }

                                {!!sub && <ul className="w-[190px] bg-black leading-[1] z-10 mt-[.5rem] group-hover:block hidden group-hover:pointer-events-auto pointer-events-none  rounded-lg p-2 space-y-3">
                                    {
                                        sub.map((s) => (
                                            <li className='hover:text-[#ff3d9e] cursor-pointer'>
                                                <a href='' className='text-[15px] capitalize font-[500] duration-150 w-full'>{s.value}</a>
                                            </li>
                                        ))
                                    }
                                </ul>}

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
