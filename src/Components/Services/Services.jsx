import React from 'react'
import './Services.css';
import Data from './Data';
import SubHeader from '../SubHeaders/SubHeader';

const Services = () => {
  const topic=
  {
    heading:"OUR SERVICES",
    subhead1:'Crafting digital solutions tailored to your unique business needs.',
    subhead2:"We believe technology and design can transform businesses and propel them into the future. We are your digital excellence partners, not just a digital agency."
  }
  return (
    <section className='services'>
    <SubHeader topic={topic}/>
     <div className='grid h-color' data-aos="fade-up">
        {
            Data.map((item)=>{
                return(
                   
                    <div id={item.id} className={`service-card`}>
                    <img src={item.image} />
                    <div className={`overlay ${item.class}`} >
                        <div className='service-icon'>{item.icon}</div>
                        <div className='service-header'>
                        <p className='bold service-head-font'>{item.topic}</p>
                        <p className='g-color'>{item.desc}</p>
                        </div>
                        <p className='service-btm'>SERVICE DETAILS</p>
                    </div>
                    </div>
                    
                )
            })
        }
     </div>
     </section>
  )
}

export default Services