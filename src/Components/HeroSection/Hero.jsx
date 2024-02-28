import React from 'react'
import './Hero.css';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <section >
     <Navbar/>
     <div className='hero'>
     <div className='hero-left'>
      <div className='hero-top1 '>
        <p><ion-icon name="ellipse-outline" id='color-red'></ion-icon></p>
        <p>UNLOCK YOUR SUCCESS</p>
      </div>
      <div className='hero-middle bold h-color'>Comprehensive <span style={{color:"#EC3737"}}> digital solutions</span> under one roof.</div>
      <div className='g-color'>Join the forward-thinkers and innovators by leveraging the power of digital technology. Harness the potential of your business.</div>
      <div className='hero-left-btm'>
    <button className="h-color bold hov-btn cursor " id='nav-btn1'>
          <span>
            <ion-icon name="navigate" id="nav-ryt-icon"></ion-icon>
          </span>
          GET STARTED
    </button>
    <div className='left-btm-ryt bold'>
      <p>OUR SERVICE</p>
    </div>
    </div>
     </div>
     
    </div>
    
    </section>
  )
}

export default Hero