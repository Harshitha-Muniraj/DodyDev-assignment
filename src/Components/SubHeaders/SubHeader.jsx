import React from 'react';

const SubHeader = ({topic}) => {
    const {heading,subhead1,subhead2}=topic;
    
  return (
    <div className='abt-header'>
    <div className='test-head'>
        <div><ion-icon name="ellipse-outline" id='test-icon'></ion-icon></div><p className='h-color bold'>{heading}</p>
        </div>
       
       <div className='abt-subhead'>
          <p className='abt-sb-1'>{subhead1}</p>
          <p className='abt-sbt-2 g-color'>{subhead2}</p>
       </div>
       
     </div>
  )
}

export default SubHeader