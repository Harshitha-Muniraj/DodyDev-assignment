import React from 'react'
import './Video.css'
const Video = () => {
  return (
    <section className='video '>
     
        <figure>
            <img src='https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=612x612&w=0&k=20&c=d7mWQhdzKrowHYTWXXcCrNn02uyfLYQYB78M75G8lKg='/>
            <div className='h-color bold video-btm-text'>
                <p>Watch the creative process behind our digital works.</p>
                <div><ion-icon name="play-circle"></ion-icon></div>
            </div>
        </figure>
   
    </section>
  )
}

export default Video