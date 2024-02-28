import React, { useRef } from 'react'
import './Contact.css';


const Contact = () => {
 
  return (
    <>
    <section className='contact'>
      <div className='contact-card' data-aos="fade-up">
        <div className='single-card'>
        <div className='card-ryt'>
          <h2 className='h-color'><span>Grow your business</span> with our robust digital solutions.</h2>
          <p className='g-color'>We consistently exceed our clients' expectations by providing high quality digital solutions. Get in touch with us get started!</p>
        </div>
        <div className='card-ryt-btm'>
            <figure>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6zQleGetassoMtFpr8DeCXlOIT2DD9kNGQgHGkPO2unwBAIbeFnLWz9lKA&s' alt='advisor pic'/>
            </figure>
            <div className='card-ryt-btm-ryt'>
                <p className='h-color bold font-1'>(123)45678</p>
                <p className='g-color bold font-2 '>TALK TO AN EXPERT</p>
            </div>
        </div>
        </div>
        <form className='single-card'>
        <div className='cnt-form'>
          <div className='inp-box'>
            <label htmlFor='name' className=' g-color bold font-size-form'>NAME</label>
            <input type='text' value="" id='name' className='inp-form' />
          </div>
          <div className='inp-box'>
            <label htmlFor='number' className=' g-color bold font-size-form'>PHONE NUMBER</label>
            <input type='text' value="" id='number' className='inp-form' />
          </div>
          <div className='inp-box'>
            <label htmlFor='email' className=' g-color bold font-size-form'>EMAIL ADDRESS</label>
            <input type="email" value="" id='email' className='inp-form' />
          </div>
          <div className='inp-box '>
            <label htmlFor='service' className=' g-color bold font-size-form'>REQUIRED SERVICE</label>
            <input type='text' value="" id='service' className='inp-form' />
          </div>
        </div>
        <div className='placeholder'>
           <label htmlFor='form-msg ' className=' g-color bold font-size-form'>PROJECT DETAILS</label>
           <textarea name='message' id='form-msg' cols="30" rows="6"/>
        </div>
          
          <button type='submit' className='h-color bold hov-btn'>GET FREE QUOTE</button>
        </form>
      </div>
      
      
    </section>
    
    </>
  )
}

export default Contact