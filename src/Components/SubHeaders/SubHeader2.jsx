import React from 'react'

const SubHeader2 = ({data,topic,specificClass}) => {
  return (
    <div className={`hero-card h-color ${specificClass}`}>
    {topic.topic ? <div className='icon-head-topic'><ion-icon name="ellipse-outline" id='test-icon'></ion-icon><p className='h-color bold'>WHY CHOOSE US</p></div> : null}
    <div className='card-left card'>
        <p className='card-left-head'>{topic.heading}</p>
        <p className='card-left-sub'>{topic.para}</p>
     </div>
     <div className='card-right card'>
       {
        data.map((item)=>{
            return(
                <div key={item.id} className='card-ryt-container' data-aos="fade-up">
                    <div className='icon-color-card'>{item.icon}</div>
                    <div  className='card-ryt-container-mtr'>
                        <p className='sb2-head'>{item.head}</p>
                        <p className='sb2-subhead'>{item.subhead}</p>
                    </div>
                </div>
            )
        })
       }
     </div>
     </div>
  )
}

export default SubHeader2