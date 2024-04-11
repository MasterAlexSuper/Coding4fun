import React from 'react'
import cameraImage from '../iconsService/camera_s.png'
import puzzleImage from '../iconsService/puzzle_s.png'
import pcImage from '../iconsService/pc_s.png'
import starImage from '../iconsService/star_s.png'
import presentImage from '../iconsService/present_s.png'
import globeImage from '../iconsService/globe_s.png'
import './services.css'

function ServicePart({ img, title}) {
  return (
    <div className='servicePart flex row justify-between mt-20'>
      <img className='serviceImg' src={img} alt="" />
      <div className="serviceText">
        <h3>{title}</h3>
        <p >Porta sed posuere nunc in feugiat adipiscing. Pellentesque non aliquet sed eget eleifend. Vestibulum maecenas in gravida eget id. Proin diam cursus donec lorem et eu orci.</p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className='mt-20 container'>
      <h2 className='text darkGray mp-2 uppercase' id='service'>Our Services</h2>
      <p className='darkGray m-auto text-center mb-5'>Lorem Ipsum is simply dummy Business industry.</p>
      <div className="flex row justify-around mb-40 ">
        <div className="services ">
        <ServicePart img={cameraImage}  title={"Font-Awesome Icons"} />
        <ServicePart img={puzzleImage}  title={"Font-Awesome Icons"} />
        <ServicePart img={pcImage}  title={"Font-Awesome Icons"}/>
        </div>
        <div className="services">
        <ServicePart img={globeImage}  title={"Font-Awesome Icons"}/>
        <ServicePart img={starImage}  title={"Font-Awesome Icons"}/>
        <ServicePart img={presentImage}  title={"Font-Awesome Icons"}/>
        </div>
      </div>
      
    </div>
  )
}
