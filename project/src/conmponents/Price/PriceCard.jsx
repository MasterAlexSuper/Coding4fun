import React from 'react'
import './price.css'

export default function PriceCard({ planName, accNumber, customLine, cloudService, price, onClick, isActive }) {
   return (
      <div className={`flex flex-col priceCard pt-11 ${isActive ? 'active' : ''}`} onClick={onClick}>
            <h4 className='uppercase mb-2'>{planName}</h4>
            <p className={`priceCardPrice ${isActive ? 'text-white' : ''}`}>{price}</p>
            <p className='uppercase priceCardDuration mb-4'>per month</p>
            <p className={`priceDescr ${isActive ? 'text-white' : ''}`}>{accNumber}</p>
            <p className={`priceDescr ${isActive ? 'text-white' : ''}`}>{customLine}</p>
            <p className={`priceDescr ${isActive ? 'text-white' : ''}`}>{cloudService}</p>
            <button type="button" className='mt-7 py-3 bg_yellow w-32 m-auto priceBtn text-white'>Get started</button>
      </div>
   )
}
