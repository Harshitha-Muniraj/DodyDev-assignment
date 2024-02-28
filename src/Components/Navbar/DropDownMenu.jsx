import React, { useEffect, useState } from 'react'

const DropDownMenu = ({dd}) => {
    
  return (
    <div className='dropdown'>
        {dd.map((item)=>{
            return(
                <li id={item.id} className="h-color bold dropdown-item">{item.item}</li>
            )
        })}
    </div>
    
  )
}

export default DropDownMenu