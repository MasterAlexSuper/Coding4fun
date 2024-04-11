import React from 'react'
import './form.css'
import PcSlider from '../PcSlider'

export const Form = () => {

   const handleSubmit = () => {
      alert("We will contact you")
   }
   return (
      <div className='container form relative'>
         <h2 className='uppercase text-white' >Boost up your Local business</h2>
         <p className='text-white text-center mb-8 mt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum typesetting</p>
         <form action="" onSubmit={handleSubmit} className='flex justify-between m-auto relative'>
            <input className='w-70 h-12 bg-white  pl-10' type="text" name="fullname" id="fullname" placeholder='Full Name' />
            <div className="user left-3"></div>
            <input className='w-70 h-12 pl-10' type="email" name="email" id="email" placeholder='Email Adress' />
            <div className="email"></div>
            <input className='w-70 h-12 pl-10' type="text" name="number" id="number" placeholder='Phone Number' pattern="^\+[0-9]*$" title="Must start with +" required />
            <div className="phone "></div>
            <button className='w-211  h-12 bg_yellow text-white' type="submit" >Request a quote</button>
         </form>
         <PcSlider />
      </div>
   )
}
