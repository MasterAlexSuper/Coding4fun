import React from 'react'
import './price.css'
import PriceCard from './PriceCard'
import { useState } from 'react';

export default function Price() {
   const [activeIndex, setActiveIndex] = useState(null);

   const handleCardClick = (index) => {
      if (activeIndex == index) {
         setActiveIndex(null)
      } else setActiveIndex(index);
   };

   return (
      <div className='container price pt-28 pb-40'>
         <h2 className='uppercase  darkGray mb-2' id='pricing'>Choos your price</h2>
         <p className='text-center gray priceText'>Lorem Ipsum is simply dummy text of the printing typesetting.</p>
         <div className="flex flex-row justify-center mt-12 items-center">
            <PriceCard
               planName="Basic plan"
               accNumber="1 Account"
               customLine="8 hour support"
               cloudService="Custom Cloud Services"
               price="$22"
               isActive={activeIndex === 0}
               onClick={() => handleCardClick(0)}
            />
            <PriceCard
               planName="Premium plan"
               accNumber="2 Account"
               customLine="100MB Storage"
               cloudService="Custom Cloud Services"
               price="$22"
               isActive={activeIndex === 1}
               onClick={() => handleCardClick(1)}
            />
            <PriceCard
               planName="Gold plan"
               accNumber="8 Account"
               customLine="24 hour support"
               cloudService="Custom Cloud Services"
               price="$22"
               isActive={activeIndex === 2}
               onClick={() => handleCardClick(2)}
            />
         </div>
      </div>
   )
}
