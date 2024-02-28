import React, { useState } from 'react'
import SubHeader from '../SubHeaders/SubHeader';
import "./Portfolio.css";
const Portfolio = () => {
  const [mouseOver,setMouseover]=useState(false);
  const [classes,setClass]=useState("");

  function handleMouseover(name){
    setMouseover(true);
    setClass(name)
  }
    const topic=
    {
      heading:"PORTFOLIO",
      subhead1:'Creating impact with every project, experience the innovation.',
      subhead2:"A showcase of our commitment to delivering top-tier, innovative digital solutions. We believe in the power of technology and design to transform businesses, catapulting them into the future. Our commitment to quality and excellence is unparalleled."
    }
  const picData=[
    
    {
      id:1 ,
      pic:"https://png.pngtree.com/thumb_back/fw800/background/20231003/pngtree-sleek-3d-render-black-headphones-on-a-sophisticated-gray-background-image_13520103.png",
      
      head:"Pixel Pioneers",
      subhead:"Pioneering Health Innovations",
      class:"fourt-pic"
    },
    {
      id: 2,
      pic:"https://img.freepik.com/free-photo/cylinder-empty-black-podium-pedestal-product-display-stand-background-3d-rendering_56104-1366.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1708992000&semt=ais",
      head:"FilmSphere",
      subhead:"Redifing film platforms",
      class:"sec-pic"
    },
    {
      id: 3,
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9mECvk3WbFwmi4VOwCZOFgCN0RU6nRdUYQ&usqp=CAU",
      head:"Code Crafstman",
      subhead:"Tailored Programs for financial technology",
      class:"third-pic",
    },
    
    {
      id:5 ,
      pic:"https://png.pngtree.com/thumb_back/fw800/background/20230703/pngtree-3d-printed-abstract-black-object-image_3729975.jpg",
      head:"Dynamic Odyssey",
      subhead:"Road to achecieve success",
      class:"fifth-pic"
    },
  ]
  return (
  <section className='portfolio container'>
    <SubHeader topic={topic}/>
    <div className='grid-container ' data-aos="fade-up">
    <div className='portfolio-left flex border grid-position'>
      <figure className=''>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VPKMJ-rNJJkjYZJNRELERuUYL1y0JDUVPWd_0fdUi2bzI9EuaP__nySnIlcT9R545ZA&usqp=CAU'/>
        
      </figure>
      <div className='h-color pic-info bg-grad'>
                <p >Pixel Pioneers</p>
                <p>Pioneering Health Innovations</p>
              </div>
    </div>
    <div className='portfolio-right flex'>
      {
        picData.map((item)=>{
          return(
            <div key={item.id} className="pic-container border gradient" onMouseEnter={()=>handleMouseover(item.id)} onMouseLeave={()=>setMouseover(false)} >
              <figure>
                <img src={item.pic} />
              </figure>
              <div className={`h-color pic-info ${mouseOver&& classes==item.id ?"bg-grad":""}`}>
                <p  >{item.head}</p>
                <p className='small-font'>{item.subhead}</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
   </section>
  )
}

export default Portfolio