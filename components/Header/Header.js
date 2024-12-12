import React from 'react'
import { SiReactquery } from "react-icons/si";
import { CiSearch,CiHeart,CiUser  } from "react-icons/ci";
import { FiLock } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

import './Header.css'


const Header = () => {
  return (
   <>
   <div className="header-container">
     <div className="header-items-container">
        <SiReactquery className='header-logo-icon' />
           <h1 className="logo-heading">Logo</h1>
            <div className="icons-container">
              <CiSearch className="icons search" />
              <CiHeart className="icons heart"  />
              <FiLock className="icons lock"  />
              <CiUser className="icons user" />
    <span className="language">Eng <RiArrowDropDownLine/></span>
    </div>
    </div>

    <div className="mobile-device-view">
        <div className="left">
          <FaBars  className="bars"/>
          <SiReactquery className='header-logo-icon' />  
       </div>
       <h1 className="logo-heading">Logo</h1>
       <div className="right">
       <CiSearch className="icons search" />
              <CiHeart className="icons heart"  />
              <FiLock className="icons lock"  />
       </div>
    </div>

    <div className="mobile-text">
      <span className="home-text"> HOME | </span>
      <span className="shop">SHOP</span>
    </div>

    
    
    </div>
    
    <div className="tabs-container">
      <li className='list-item'>SHOP</li>
      <li className='list-item'>SKILLS</li>
      <li className='list-item'>STORIES</li>
      <li className='list-item'>ABOUT</li>
      <li className='list-item'>CONTACT US</li>
    </div>

    <div className="discover-container">
      <h1 className="discover-heading">DISCOVER OUR PRODUCTS</h1>
      <p className="description">Lorem ipsum dolor sit amet consectetur. 
        Amet est posuere rhoncus scelerisque. 
        Dolor integer scelerisque nibh 
        amet mi ut elementum dolor.</p>
    </div>

   
   </>
  )
}

export default Header