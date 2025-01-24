import { MENUBAR_ITEM } from '@/app/utils/constants'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <div className='relative  h-[400px] px-5 w-full flex items-center justify-center z-0'>
            <div className="w-[300px] h-[300px] bg-pink rounded-full absolute top-[-250px] blur-[10rem] z-0"></div>
            <div className="w-[1200px] max-w-full lg:space-y-0 space-y-5 flex flex-col items-center  gap-10 z-0">


                <div className="flex flex-col items-center flex-1 space-y-2 md:hidden ">
                    <Image src="/fricaa.svg" alt="fricaa logo" className='md:w-[200px] sm:w-[90px] w-[100px] h-auto object-cover' width={100} height={100} />

                    <div className="flex mt-2 justify-center gap-2">
                        <Image src="/landing/play_store.svg" alt="play store" className='min-w-[120px]' width={120} height={120} />
                        <Image src="/landing/app_store.svg" alt="app store" className='min-w-[120px]' width={120} height={120} />
                    </div>
                </div>

                <div className="flex items-start gap-10">
                    <div className="space-y-2">
                        <h1 className='uppercase font-semibold'>USEFUL PAGES</h1>
                        <ul className="space-y-2 text-gray-300 text-[14px]">
                            <li><a href="">Terms And Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Community Guildlines</a></li>
                            <li><a href="">Cookie Settings</a></li>
                        </ul>
                    </div>

                    <div className="md:flex flex-col items-center flex-1 space-y-2 hidden ">
                        <Image src="/fricaa.svg" alt="fricaa logo" className='md:w-[200px] sm:w-[90px] w-[100px] h-auto object-cover' width={100} height={100} />

                        <div className="flex mt-2 justify-center gap-2">
                            <Image src="/landing/play_store.svg" alt="play store" className='min-w-[120px]' width={120} height={120} />
                            <Image src="/landing/app_store.svg" alt="app store" className='min-w-[120px]' width={120} height={120} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className='uppercase font-semibold'>QUICK LINKS</h1>
                        <ul className='grid grid-cols-2 gap-4'>
                            {MENUBAR_ITEM.map(({ to, value, sub }, i) => (
                                <li key={i} className='relative space-x-1 group'>
                                    <a href={to} className='capitalize hover:text-white  text-gray-200 transition-all text-[14px] duration-200'>{value}</a>
                                    {/* {!!sub && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-2 group-hover:rotate-180 duration-200' viewBox="0 0 256 256" style={{ userSelect: "none", width: "15px", height: "15px", display: "inline-block", fill: "white" }} ><g color="white"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path></g></svg>
                                )
                                }

                                {!!sub && <ul className="w-[190px] bg-black leading-[1] z-10 mt-[.5rem] group-hover:block hidden group-hover:pointer-events-auto pointer-events-none  rounded-lg p-2 space-y-3">
                                    {
                                        sub.map((s,j) => (
                                            <li key={j} className='hover:text-[#ff3d9e] cursor-pointer text-[#868585]'>
                                                <a href='' className='text-[15px] capitalize font-[500] duration-150 w-full'>{s.value}</a>
                                            </li>
                                        ))
                                    }
                                </ul>} */}

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
