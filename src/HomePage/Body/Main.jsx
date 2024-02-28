import React from 'react'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Choose from '../../Components/Choose/Choose'
import Video from '../../Components/Video/Video'
import Portfolio from '../../Components/Portfolio/Portfolio'
import Testimonials from '../../Components/Testimonials/Testimonials'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'

const Main = () => {
  return (
    <>
        <About/>
        <Services/>
        <Choose/>
        <Video/>
        <Portfolio/>
        <Testimonials/>
        <TrustedBy/>
    </>
  )
}

export default Main