"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MENUBAR_ITEM } from '@/app/utils/constants';

export const Header = () => {
    const [scrolling, setStrolling] = useState(true);

    useEffect(() => {
        const scroll = function() {
            if(window.scrollY > 200) {
                return setStrolling(false)
            }
            setStrolling(true)
        }
        window.addEventListener("scroll", scroll);

        return () => {
            window.removeEventListener("scroll", scroll);
        }
    }, [])
    return (
        <div className={`flex justify-center w-full z-[20] sm:bg-black bg-transparent ${scrolling ? "fixed top-0" : ''}`}>
            <div className=' w-[1400px] max-w-full m-auto px-5 h-14 md:rounded-full text-white flex items-center justify-between'>
                <Image src="/fricaa.svg" alt="fricaa logo" className='md:w-[100px] sm:w-[90px] w-[100px] h-auto object-cover' width={100} height={100} />
                <div className="absolute inset-0 bg-black/40 z-0 md:hidden blur-xl"></div>

                <ul className="sm:flex hidden items-center gap-5 font-semibold">
                    {MENUBAR_ITEM.map(({ to, value, sub }, i) => (
                        <li key={i} className='relative space-x-1 group leading-[48px]'>
                            <a href={to} className='capitalize hover:text-white  text-[13px] text-gray-200 transition-all duration-200'>{value}</a>
                            {!!sub && (
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-2 group-hover:rotate-180 duration-200' viewBox="0 0 256 256" style={{ userSelect: "none", width: "15px", height: "15px", display: "inline-block", fill: "white" }} ><g color="white"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path></g></svg>
                            )
                            }

                            <div className="absolute top-[50px] left-[-10px] z-10 group-hover:pointer-events-auto pointer-events-none">
                                {!!sub && <ul className="w-[190px] bg-black leading-[1] z-10 mt-3 group-hover:opacity-100 opacity-0 group-hover:pointer-events-auto pointer-events-none  rounded-lg p-2 space-y-3">
                                    {
                                        sub.map((s, i) => (
                                            <li key={i} className='hover:text-[#ff3d9e] cursor-pointer'>
                                                <a href='' className='text-[15px] capitalize font-[500] duration-150 w-full'>{s.value}</a>
                                            </li>
                                        ))
                                    }
                                </ul>}

                            </div>
                        </li>
                    ))}
                    <button className='bg-[#E4317D] px-2 py-1 rounded-lg text-[13px]'>Download</button>
                </ul>

                <div className="sm:hidden flex items-center gap-4">
                    <button className="relative group flex items-center justify-center">
                        <div className='z-10 flex items-center justify-center gap-2 relative w-[85px] h-[35px] rounded-full'>
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#FFFFFD" fill-opacity="0.15"></rect>
                                <path opacity="0.8" d="M24.435 33.3334C23.612 33.3334 22.8789 33.0549 22.1726 32.7899C21.5675 32.5598 20.9971 32.3442 20.4559 32.3442C19.9754 32.3442 19.4275 32.5497 18.847 32.7652C18.1453 33.0246 17.3504 33.3221 16.4869 33.3221C15.0678 33.3221 13.7957 32.5092 12.5921 30.8419C12.5415 30.7712 7.64177 23.5754 10.022 18.2321C11.3256 15.3062 13.204 13.8208 15.6044 13.8208C16.8709 13.8208 18.0397 14.2182 18.9784 14.5382C19.5038 14.7167 20.0001 14.8852 20.2617 14.8852C20.5705 14.8852 21.0667 14.7044 21.5888 14.5101C22.4601 14.1902 23.5469 13.7893 24.7932 13.7893C26.5997 13.7893 28.2345 14.6235 29.7929 16.3391C29.8454 16.3977 29.8853 16.4666 29.9098 16.5414C29.9344 16.6162 29.9431 16.6953 29.9355 16.7736C29.9268 16.8518 29.9021 16.9274 29.8629 16.9956C29.8236 17.0638 29.7708 17.1232 29.7075 17.17C28.0649 18.3669 27.2318 19.7512 27.2318 21.2861C27.2318 23.1869 28.1705 24.5836 30.3655 25.95C30.481 26.0212 30.5666 26.1321 30.6063 26.2619C30.646 26.3917 30.637 26.5315 30.5811 26.6551C28.5174 31.272 26.6222 33.3334 24.435 33.3334ZM20.3145 13.4997C20.1797 13.4997 20.0439 13.4907 19.9103 13.475C19.7778 13.4592 19.6554 13.3965 19.5652 13.2983C19.475 13.2 19.4229 13.0727 19.4185 12.9394C19.2703 9.18261 22.4545 6.88206 24.8078 6.66873C24.9476 6.65682 25.0869 6.69718 25.1986 6.78201C25.3104 6.86683 25.3868 6.99009 25.4129 7.12795C25.6723 8.57407 25.1873 10.1639 24.0791 11.4888C23.0259 12.7485 21.618 13.4997 20.3145 13.4997Z" fill="#FFFFFD"></path>
                            </svg>
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#FFFFFD" fill-opacity="0.15"></rect>
                                <path d="M12.6751 14.8299V26.5529C12.6751 27.4684 13.2248 28.1867 14.1671 28.1867H15.3973C15.355 28.1867 15.2602 28.4974 15.2602 28.6499V31.9701C15.2602 32.8379 16.0922 33.5415 16.9837 33.5415C17.8756 33.5415 18.7072 32.8379 18.7072 31.9701V28.6499C18.7072 28.4974 18.5408 28.1867 18.4999 28.1867H21.5005C21.4595 28.1867 21.2923 28.4974 21.2923 28.6499V31.9701C21.2923 32.8379 22.1226 33.5415 23.0141 33.5415C23.9077 33.5415 24.7393 32.8379 24.7393 31.9701V28.6499C24.7393 28.4974 24.6449 28.1867 24.6027 28.1867H25.8345C26.7768 28.1867 27.3245 27.4684 27.3245 26.5529V14.8299H12.5764H12.6751ZM9.65901 15.0208C8.76668 15.0208 7.93555 15.7248 7.93555 16.5921V23.3201C7.93555 24.1878 8.76668 24.8914 9.65901 24.8914C10.5509 24.8914 11.3825 24.1878 11.3825 23.3201V16.5926C11.3825 15.7248 10.5509 15.0208 9.65901 15.0208ZM23.7091 8.72368L24.0098 8.28248L24.311 7.84644L24.9818 6.86622C25.0016 6.83776 25.0155 6.80556 25.0224 6.7716C25.0294 6.73763 25.0294 6.7026 25.0224 6.66863C25.0155 6.63467 25.0017 6.60247 24.9819 6.574C24.9621 6.54553 24.9367 6.52137 24.9073 6.50301C24.8481 6.46409 24.776 6.44996 24.7064 6.46366C24.6369 6.47736 24.5755 6.51778 24.5355 6.57625L23.5113 8.06834L23.2032 8.51773C22.2299 8.14977 21.1454 7.94468 19.9998 7.94468C18.8567 7.94468 17.77 8.1502 16.7967 8.51773L16.4904 8.06877L16.1875 7.62799L15.4679 6.57711C15.4271 6.51891 15.3652 6.47878 15.2955 6.46513C15.2257 6.45147 15.1533 6.46535 15.0935 6.50387C15.0643 6.52245 15.0392 6.5467 15.0196 6.57517C14.9999 6.60364 14.9862 6.63576 14.9792 6.66963C14.9722 6.7035 14.9721 6.73842 14.9789 6.77234C14.9856 6.80626 14.9991 6.83847 15.0185 6.86709L15.689 7.84773L15.9901 8.2842L16.2926 8.72411C14.0073 9.76034 12.4609 11.8138 12.4609 13.9682H27.539C27.539 11.8138 25.9931 9.76034 23.7091 8.72368ZM16.7687 11.8763C16.321 11.8763 15.9604 11.5243 15.9604 11.0896C15.9604 10.6548 16.321 10.3045 16.7687 10.3045C17.2151 10.3045 17.5766 10.6548 17.5766 11.0896C17.5766 11.5243 17.2155 11.8763 16.7687 11.8763ZM23.2317 11.8763C22.7844 11.8763 22.4229 11.5243 22.4229 11.0896C22.4229 10.6548 22.7844 10.3045 23.2317 10.3045C23.678 10.3045 24.0395 10.6548 24.0395 11.0896C24.0395 11.5243 23.678 11.8763 23.2317 11.8763Z" fill="white"></path>
                                <path d="M9.7357 18.5332C9.06398 18.5332 8.36641 17.8994 7.93555 16.8942V23.3206C7.93555 24.1883 8.76668 24.8919 9.65901 24.8919C10.5509 24.8919 11.3825 24.1883 11.3825 23.3206V17.2294C10.9516 18.0369 10.3286 18.5332 9.7357 18.5332Z" fill="#ECECEC"></path>
                                <path d="M30.3408 15.0209C29.4484 15.0209 28.6173 15.7249 28.6173 16.5922V23.3202C28.6173 24.188 29.4484 24.8916 30.3408 24.8916C31.2327 24.8916 32.0642 24.188 32.0642 23.3202V16.5927C32.0642 15.7249 31.2327 15.0209 30.3408 15.0209Z" fill="white"></path>
                                <path d="M30.4172 18.5332C29.7455 18.5332 29.0479 17.8994 28.6171 16.8942V23.3205C28.6171 24.1883 29.4482 24.8919 30.3405 24.8919C31.2324 24.8919 32.064 24.1883 32.064 23.3205V17.2294C31.6331 18.0368 31.0101 18.5332 30.4172 18.5332ZM19.9998 16.1173C16.5916 16.1173 13.5368 15.7231 12.6751 15.1634V26.5529C12.6751 27.4684 13.2249 28.1867 14.1672 28.1867H15.3973C15.3551 28.1867 15.2603 28.4973 15.2603 28.6499V31.9701C15.2603 32.8379 16.0923 33.5415 16.9837 33.5415C17.8756 33.5415 18.7072 32.8379 18.7072 31.9701V28.6499C18.7072 28.4973 18.5409 28.1867 18.4999 28.1867H21.5005C21.4595 28.1867 21.2924 28.4973 21.2924 28.6499V31.9701C21.2924 32.8379 22.1226 33.5415 23.0141 33.5415C23.9077 33.5415 24.7393 32.8379 24.7393 31.9701V28.6499C24.7393 28.4973 24.6449 28.1867 24.6027 28.1867H25.8345C26.7768 28.1867 27.3245 27.4684 27.3245 26.5529V15.1629C26.4627 15.7226 23.4083 16.1173 19.9998 16.1173ZM24.0396 11.0891C24.0396 11.5239 23.6781 11.8759 23.2317 11.8759C22.7845 11.8759 22.423 11.5239 22.423 11.0891C22.423 10.8534 22.5311 10.6453 22.6996 10.5014C21.8478 10.3592 20.9416 10.2812 19.9998 10.2812C19.0579 10.2812 18.1522 10.3592 17.3 10.5014C17.4689 10.6449 17.577 10.8534 17.577 11.0891C17.577 11.5239 17.2155 11.8759 16.7692 11.8759C16.3215 11.8759 15.9609 11.5239 15.9609 11.0891C15.9609 10.978 15.9854 10.8724 16.0281 10.7763C14.7363 11.1158 13.6264 11.6113 12.7888 12.2201C12.5777 12.7747 12.4609 13.5373 12.4609 13.9682H27.539C27.539 13.5373 27.4223 12.7751 27.2116 12.221C26.3744 11.6113 25.2641 11.115 23.9732 10.7755C24.0154 10.8715 24.0396 10.9784 24.0396 11.0891Z" fill="#ECECEC"></path>
                                <path d="M20.0005 20.6134C17.0977 20.6134 14.3992 20.0408 12.6758 19.1024V26.5529C12.6758 27.4685 13.2256 28.1867 14.1679 28.1867H15.398C15.3558 28.1867 15.261 28.4974 15.261 28.6499V31.9701C15.261 32.8379 16.093 33.5415 16.9844 33.5415C17.8763 33.5415 18.7079 32.8379 18.7079 31.9701V28.6499C18.7079 28.4974 18.5416 28.1867 18.5006 28.1867H21.5012C21.4602 28.1867 21.2931 28.4974 21.2931 28.6499V31.9701C21.2931 32.8379 22.1233 33.5415 23.0148 33.5415C23.9084 33.5415 24.74 32.8379 24.74 31.9701V28.6499C24.74 28.4974 24.6456 28.1867 24.6034 28.1867H25.8352C26.7775 28.1867 27.3252 27.4685 27.3252 26.5529V19.1024C25.6017 20.0412 22.9032 20.6134 20.0005 20.6134Z" fill="#DADADA"></path>
                            </svg>
                        </div>
                        <div className="absolute md:block hidden rounded-full  w-[87.5px] h-[37px] z-0 bg-gradient-to-l group-hover:bg-gradient-to-r from-[#EF3FE8] via-[#F94A3F] to-[#E4317D] transition-all duration-200"></div>
                    </button>

                    <button className='border border-pink w-[40px] h-[40px] flex justify-center items-center rounded-full gap-1 flex-col'>
                        <div className="w-[25px] min-h-[.15rem] bg-pink"></div>
                        <div className="w-[25px] min-h-[.15rem] bg-pink"></div>
                        <div className="w-[25px] min-h-[.15rem] bg-pink"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}
