import React from 'react'
import './Card.css';
import SubHeader2 from '../SubHeaders/SubHeader2'
const Card = () => {
    const data=[
        {
            id:1,
            head:"Competitive Pricing",
            subhead:"Our high-quality services are affordable, giving you great value for your money.",
            icon:<ion-icon name="pricetags"></ion-icon>
        },
        {
            id:2,
            head:"Tailor-made Strategies",
            subhead:"We do not believe in one-size-fits-all. Our solutions are customized to your business needs.",
            icon:<ion-icon name="golf"></ion-icon>
        },
        {
            id:3,
            head:"Customer-centric Focus",
            subhead:"We focus on client needs and create concepts that will captivate your audience.",
            icon:<ion-icon name="person"></ion-icon>
        },
    ]
    const topic={
        heading:"Let's turn your vision into a masterpiece.",
        para:"We understand that in the fast-paced world of digital, staying ahead of the curve is critical. That is why we are constantly researching new technologies, techniques, and strategies in order to provide our clients with innovative solutions that give them a competitive advantage. You are not just getting a service; you are getting a partner who is committed to your business's growth and success."

    }
  return (
   <>
    <SubHeader2 data={data} topic={topic} specificClass={"card-specific"}/>
   </>
  )
}

export default Card