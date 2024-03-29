import React from 'react'
import "./Footer.css"
import FootContact from './FooterContactUse/FootContact';

const Footer = () => {
    const contact=[{id:1,icon:<ion-icon name="call"></ion-icon>,text:"(123)45678"},{id:1,icon:<ion-icon name="mail"></ion-icon>,text:"info@example"},{id:1,icon:<ion-icon name="location"></ion-icon>,text:"123 Queen Street,LA"},]
    const useful=[{id:1,icon:<ion-icon name="chevron-forward-outline"></ion-icon>,text:"Support Center"},{id:1,icon:<ion-icon name="chevron-forward-outline"></ion-icon>,text:"Privacy Policy"},{id:1,icon:<ion-icon name="chevron-forward-outline"></ion-icon>,text:"Cookie Policy"},]
  return (
    <footer>
      <div className='footer-container'>
        <div style={{flex:"1.3"}} className='foot-left'>
          <h3 className='h-color bold cursor'><span className="title">X</span>able</h3>
          <p className='fl-b2'>
            Morbi leo risus, porta ac vestibulum at ero nulla non metus auctor
            fringilla.
          </p>
          <div className='fl-icons '>
            <div><ion-icon name="logo-facebook" id="icon"></ion-icon></div>
            <div><ion-icon name="logo-twitter" id="icon"></ion-icon></div>
            <div><ion-icon name="logo-linkedin" id="icon"></ion-icon></div>
            <div><ion-icon name="logo-instagram" id="icon"></ion-icon></div>
          </div>
        </div>
        <FootContact contact={contact}/>
        <FootContact contact={useful}/>
        <div style={{flex:"1.5"}} className='foot-newsletter'>
          <p className='h-color bold'>SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className='sign-font'>
            Sign up for my newsletter to get latest updates.Do not worry,we will never spam you.
          </p>
          <div className='foot-email'>
            <input placeholder="Email Address" />
            <button className='cursor'><ion-icon name="send" id='email-icon'></ion-icon></button>
          </div>
        </div>
      </div>

      <div className='copy-right'>
        <p>2024 Xable.All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer