import React from 'react'
import './About.css'
import SubHeader from '../SubHeaders/SubHeader'
const About = () => {
  const topic=
    {
      heading:"ABOUT US",
      subhead1:'Discover the power of creativity and technology combined.',
      subhead2:"We have talented developers, designers, marketers, and strategists. We exceed expectations by using cutting-edge technologies and innovative strategies."
    }
  
  return (
    <section className='about'>
     <SubHeader topic={topic}/>
     <div className='abt-imgs'>
       <figure >
        <img src='./assets/testimonials1.jpg' data-aos="fade-right" />
       </figure>
       <figure data-aos="fade-left">
        <img src='./assets/testimonials1.jpg' />
       </figure>
     </div>
    </section>
  )
}

export default About