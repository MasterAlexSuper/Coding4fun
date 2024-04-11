import React from 'react'
import './about.css'

export default function About() {
   return (
      <div className='container relative about '>
         <div className="aboutWraper ">
            <h2 className='uppercase text-white text-left mb-1' id='about'>about us</h2>
            <p className='aboutText text-white'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the ore recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <button type="button" className='uppercase text-white border border-yellow-500 text-center w-36 aboutButton rounded-sm mt-9 hover:bg-yellow-600'>
               read more
            </button>
         </div>
      </div>
   )
}
