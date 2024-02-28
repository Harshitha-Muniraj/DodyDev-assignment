import React, { useEffect, useState } from 'react'
import './Navbar.css';
import DropDownMenu from './DropDownMenu';


const Navbar = () => {
  const [btnToggle,SetBtnToggle]=useState(false);
  const [showClass,SetShowClass]=useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [name,setName]=useState("")
 
  const handleMouseEnter = (name) => {
    setDropdownVisible(true);
   setName(name)
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  function toggle(){
    SetBtnToggle(!btnToggle);
    console.log("ss")

  }
  function res(){
    if(btnToggle===false){
      console.log(btnToggle)
      SetShowClass('resp-hide')
    }else SetShowClass("")
  }
  useEffect(()=>{
      res()
  },[btnToggle])
  const items = [
    {
      id: 1,
      topic: "Home",
      dropdrown: [
        { id: 1, item: "Home 1" },
        { id: 2, item: "Home 2" },
        { id: 3, item: "Home 3" },
      ],
    },
    {
      id: 2,
      topic: "Services",
      dropdrown: [
        { id: 1, item: "Service 1" },
        { id: 2, item: "Service 2" },
      ],
    },
    {
      id: 3,
      topic: "portfolio",
      dropdrown: [
        { id: 1, item: "Portfolio 1" },
        { id: 2, item: "Portfolio 2" },
        { id: 3, item: "Portfolio 3" },
      ],
    },
    {
      id: 4,
      topic: "pages",
      dropdrown: [
        { id: 1, item: "Page 1" },
        { id: 2, item: "Page 2" },
        { id: 3, item: "Page 3" },
      ],
    },
    {
      id: 5,
      topic: "blog",
      dropdrown: [
        { id: 1, item: "Blog 1" },
        { id: 2, item: "Blog 2" },
        { id: 3, item: "Blog 3" },
      ],
    },
    {
      id: 6,
      topic: "contact",
      dropdrown: [
        { id: 1, item: "Contact 1" },
        { id: 2, item: "Contact 2" },
      ],
    },
  ];
  return (
    <nav>
      <h1 className="h-color bold">
        <span className="title">X</span>able
      </h1>
      <div>
        <ul className={`navlist ${showClass}`} style={btnToggle?{opacity:'1',visibility:'visible'}:null}>
          {items.map((item) => {
            const dd=item.dropdrown
            return (
              <li key={item.id} className="h-color bold drop-position" onClick={toggle} onMouseEnter={()=>handleMouseEnter(item.topic)} onMouseLeave={handleMouseLeave}>
                <p>{item.topic}</p>
                <span>
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
                {isDropdownVisible && name==item.topic ?<DropDownMenu dd={dd}  />:null}
                </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-right" style={btnToggle ? { display: "none" } : { display: "flex" }}>
        <div className="nav-call">
          <ion-icon name="call" id="nav-call"></ion-icon>
        </div>
        <button className="h-color bold hov-btn" id='nav-btn'>
          <span>
            <ion-icon name="navigate" id="nav-ryt-icon"></ion-icon>
          </span>
          GET STARTED
        </button>
      </div>
      <button className="btn-mobile-nav" onClick={toggle}>
        <ion-icon
          name="menu-outline"
          id="icon-mobile-nav"
          style={btnToggle ? { display: "none" } : { display: "block" }}
        ></ion-icon>
        <ion-icon
          name="close-outline"
          id="icon-mobile-nav"
          style={btnToggle ? { display: "block" } : { display: "none" }}
        ></ion-icon>
      </button>
    </nav>
  );
}

export default Navbar