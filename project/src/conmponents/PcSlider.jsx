import React from 'react'

export default function PcSlider() {

   return (
      <div>
         <div className="pc"></div>
         <div className="pc_disp"></div>
         <div className="radio flex absolute justify-center custom-radio">
            <input className='customradio' type="radio" name="slider" id="1" defaultChecked />
            <input className='customradio' type="radio" name="slider" id="2" />
            <input className='customradio' type="radio" name="slider" id="3" />
         </div>
      </div>
   )
}
