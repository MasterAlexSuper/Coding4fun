import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='container header'>
      <ul className='headerList'>
        <li className="headerList_item"><a href="#home">home</a></li>
        <li className="headerList_item"><a href="#service">srevice</a></li>
        <li className="headerList_item"><a href="#about">about us</a></li>
        <li className="headerList_item"><a href="#pricing">pricing table</a></li>
        <li className="headerList_item"><a href="hiw">how it work</a></li>
        <li className="headerList_item"> <a href="clients">happy clients</a></li>
        <li className="headerList_item"><a href="contsct">contact us</a></li>
      </ul>
    </div>
  )
}
