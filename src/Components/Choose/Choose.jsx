import React from 'react';
import './Choose.css';
import SubHeader2 from '../SubHeaders/SubHeader2';

import { useParallax } from "react-scroll-parallax";

const Choose = () => {
    const data=[
        {
            id:1,
            head:"Quality Assurance",
            subhead:"Quality isn’t just a buzzword for us. It’s an integral part of our workflow, ensuring that all our deliverables meet the highest standards.",
            icon:<ion-icon name="pricetags"></ion-icon>
        },
        {
            id:2,
            head:"Professional Support",
            subhead:"We provide round-the-clock support to ensure smooth operation and quick resolution of any issues you might encounter.",
            icon:<ion-icon name="golf"></ion-icon>
        },
        
    ]
    const topic={
        heading:"Crafting experiences, delivering success.",
        para:"Our commitment to quality and excellence is unparalleled. From the first brainstorming session to the final product delivery, we ensure that every step of the process is executed to perfection. You are not just getting a service; you are getting a partner who is committed to your growth and success."
    }
    const parallax = useParallax({
        rotate: [0, 360],
      });;
  return (
    <section className='choose'>
    <SubHeader2 data={data} topic={topic} specificClass={"choose-specific"}/>
   
    <div className='choose-right' ref={parallax.ref} >
    
    <figure>
            <img src='https://www.shutterstock.com/image-photo/people-sitting-around-table-drinking-260nw-196839866.jpg'/>
        </figure>
   
        
    </div>
    
    </section>
  )
}

export default Choose