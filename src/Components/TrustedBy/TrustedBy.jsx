import React from 'react'
import Data from './Data';
import './TrustedBy.css';

const TrustedBy = () => {
  return (
    <section className='container trustedby'>
        <div className='trust-top'>
            <p className='g-color'>We are trusted by thousands of clients</p>
        </div>
        <div className='trust-btm' data-aos="fade-up">
            {
                Data.map((item)=>{
                    return(
                        <div key={item.id}>
                           <div className='tb-icons'>{item.icon} <span className='g-color' style={{fontSize:"1.1rem"}}>{item.title}</span></div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default TrustedBy