import React from 'react'

const ContactUseFullSec = ({contact}) => {
  return (
    <div style={{flex:"1"}} className='footer-cnt'>
            <p className='h-color bold'>CONTACT INFO</p>
            <ul>
                {
                  contact.map((item)=>{
                    return(
                        <li key={item.id} className='cursor foot-cnt'>
                          <p>{item.icon}</p> 
                          <p>{item.text}</p>
                        </li>
                    )
                  })
                }
            </ul>
        </div>
  )
}

export default ContactUseFullSec