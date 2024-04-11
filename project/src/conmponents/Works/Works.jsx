import React from 'react'
import './works.css'
import Step from './Step'
import cameraImg from './imgs/camera_h.png'
import globeImg from './imgs/globe_h.png'
import pcImg from './imgs/pc_h.png'
import puzzleImg from './imgs/puzzle_h.png'

export default function Works() {
   return (
      <div className='container pt-36 pb-40'>
         <h2 className='uppercase mb-2 darkGray '>How it works</h2>
         <p className='mb-20 text-center'>Lorem Ipsum is simply dummy Business industry</p>
         <div className="workSteps flex flex-row items-center justify-center relative">
            <Step img={cameraImg} num={1} className="relative" />
            <div className="arrowTop"></div>
            <Step img={globeImg} num={2} className="relative mr-20" />
            <div className="arrowBot"></div>
            <Step img={pcImg} num={3} className="relative mr-20" />
            <div className="arrowTop"></div>
            <Step img={puzzleImg} num={4} />
         </div>
         <button type="button" className='py- mt-24 bg_yellow w-32 worksBtn text-white'>
            Get start Now
         </button>
      </div>
   )
}
