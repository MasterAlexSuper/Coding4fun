import React from 'react'
import './works.css'

export default function Step({ img, num }) {
   return (
      <div className='worksStep flex flex-col justify-center items-center mr-10 ml-10'>
         <img src={img} alt="image" />
         <h3 className='uppercase mt-10'>Step {num}</h3>
         <p className='text-center mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
      </div>
   )
}
