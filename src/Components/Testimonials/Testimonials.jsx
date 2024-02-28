import React from 'react'
import Data from './TestimonialData';
import './Testimonial.css'
const Testimonials = () => {
  
  return (
    <section className='container testimonial'>
      <div className='test-top gap1'>
        <div className='test-head'>
        <div><ion-icon name="ellipse-outline" id='test-icon'></ion-icon></div><p className='h-color bold'>TESTIMONIALS</p>
        </div>
        <div className='test-top gap2'>
            <h2 className='h-color bold'>Our success, echoed by our clients</h2>
            <p className='g-color small-header'>Our clients share their experiences of transformation and growth. Unfiltered feedback and the true testament to our service quality.</p>
        </div>
      </div>
      <div className='test-card-container' data-aos="fade-up">
        {
            Data.map((item)=>{
                return(
                    <div key={item.id} className='test-card'>
                    <div className='g-color left position'><ion-icon name="logo-edge" id='quote-icon'></ion-icon></div>
                     <div className='h-color left '>{item.quote}</div>
                     <div className='auth-com'>
                        <img src={item.pic} alt='customer-pic'/>
                        <div >
                            <p className='h-color'>{item.author}</p>
                            <p className='g-color'>{item.company}</p>
                        </div>
                     </div>
                    </div>
                )
            })
        }
      </div>
    </section>
  )
}

export default Testimonials