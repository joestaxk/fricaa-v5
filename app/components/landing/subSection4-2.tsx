import React from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local'

export const anton = localFont({
  src: '../../../public/font/Antonio-VariableFont_wght.ttf',
})
 
const fira = localFont({
  src: [
    {
      path: '../../../public/font/fira/FiraSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/font/fira/FiraSans-Medium.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
})


const FanRewards2 = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="relative max-w-[2000px] h-[1150px] sm:h-[1200px] lg:h-[900px] w-full flex justify-center overflow-hidden">
          <div
            className="play absolute top-[10%] left-[-5%] z-[1] inset-0 opacity-40"
            style={{
              background: "url('/landing/play.svg')",
              backgroundPosition: 'top left 20%',
              backgroundSize: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll'
            }}
          />

          <div className="px-5 absolute inset-0 z-20 h-full flex justify-center w-full sm:pt-[2rem]">
            <div className="xzl:w-[1500px] xl:w-[1200px] lg:w-[1000px] w-full h-fit flex lg:flex-row flex-col-reverse lg:pt-[6rem] lg:space-y-0 space-y-20 justify-center gap-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-fit relative mt-20 flex justify-center lg:translate-x-0 sm:translate-x-10 overflow-hidden"
              >
                <div className="relative flex justify-center items-center overflow-hidden xs:w-[310px] w-[270px] xs:h-[680px] rounded-[50px]">
                  <iframe
                    src="https://player.vimeo.com/video/287467095?loop=1&muted=1&autoplay=1&color=3ab9ff"
                    className="absolute xs:w-[300px] w-[240px] xs:left-[15px] top-0 xs:h-[650px] h-[500px] rounded-[50px] z-[-1]"
                    frameBorder="0"
                    title="video player"
                  />
                  <img
                    src="/landing/new_case.webp"
                    draggable="false"
                    className="object-contain xs:min-w-[450px] min-w-[350px] h-full"
                    alt="new case"
                  />
                </div>
              </motion.div>

              <div className="w-fit lg:pt-[5rem]">
                <div className="space-y-5 flex lg:justify-end">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${anton.className} font-bold xl:text-[7rem] md:text-[5.5rem] sm:text-[4.5rem] xs:text-[3.5rem] text-[3rem] flex gap-2 text-white`}
                  >
                    FAN <span className="text-[#3cff27] ml-2">REWARDS</span>
                  </motion.h1>
                </div>

                <div className={`flex lg:items-end flex-col text-white xzl:space-y-10 lg:space-y-3 space-y-5 relative w-full ${fira.className}`}>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="lg:text-[2rem] sm:text-[1.6rem] text-[1.1rem] fira"
                  >
                    SCORES, CREATOR GIFTS & TIPS
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${fira.className} mt-10 lg:text-right  lg:text-[1.4rem] sm:text-[1.3rem] text-[1rem] xl:w-[500px] md:w-[400px] sm:w-[400px] w-full text-[#8b928b]`}
                  >
                    Join the epic quest to unlock rewards, cash and legendary heroes. Player or watcher?
                    Either can win!
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${fira} flex relative lg:translate-y-10 lg:-translate-x-5`}
                  >
                    <div className="sm:w-[350px] w-[250px] h-[30px] relative flex justify-center transition-all hover:scale-105">
                      <div className="sm:w-[320px] w-[250px] h-[30px] overflow-hidden absolute border border-gray-50/20 top-[-.3rem] sm:right-[.8rem] right-[-.1rem] border-b-0">
                        <div className="sm:w-[300px] w-[170px] h-[60px] relative" />
                      </div>
                      <button
                        tabIndex={-1}
                        className="sm:w-[300px] w-[230px] h-[60px] relative text-black z-10 bg-[#3cff27] before:content before:z-[-1] hover:before:left-[.3rem] hover:before:top-[.3rem] before:transition-all before:duration-400 before:bg-[#3cff27] before:left-1 before:w-full before:h-full before:absolute before:top-1 font-semibold"
                      >
                        VIEW ALL OBJECTIVES
                      </button>
                      <div className="sm:w-[320px] w-[250px] h-[30px] overflow-hidden absolute border border-gray-50/20 bottom-[-2.5rem] sm:right-[.8rem] right-[-.1rem] border-t-0">
                        <div className="sm:w-[300px] w-[170px] h-[60px] relative" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanRewards2;