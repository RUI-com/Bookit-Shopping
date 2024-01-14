// Nav CSS import ....
import './Nav.css';

// import Router Link ....
import {Link,NavLink} from 'react-router-dom';

// import Logo ...
import Logo from '../../../logo/B-c-logo.svg';

// import NavData......
import {navLinks,navRight} from '../../Data/Data';
// icons
import {CgMenuGridO} from 'react-icons/cg'
import {FaWindowClose} from 'react-icons/fa'

//imports use State ...
import { useState } from 'react';

export default function Nav() {

    //use State For Navlinks show and hide
    const [isNavLinkShowing,setIsNavLinkShowing]=useState(false);


    // windows Scroll Nav-Link Effects ..
    if (innerWidth  < 1024){
      window.addEventListener('scroll',()=>{
        document.querySelector('.nav-links').classList.add('navlinkHide');
        setIsNavLinkShowing(false);
        
      })
    };
    window.addEventListener('scroll',()=>{
      document.querySelector('nav').classList.add('navShadow',
      window.scrollY > 0);
      
    })

  return (

    <nav>
      <div className='container nav-container'>
        {/* .........Logo.......... */}
        <Link to={'/'} className='logo'>
          <img src={Logo} alt='Logo'/>
        </Link>
        {/* .........Nav-Links.......... */}
        <ul className={`nav-links ${isNavLinkShowing?'navlinkShow':'navlinkHide'}`}>
          {
            navLinks.map(({name,path} ,index)=>{
              return(
                <li key={index}>
                  <NavLink to={path} className={document.addEventListener('click',({isActive})=>{
                    isActive ? 'active' : ''
                  }) 
                     
                  }>{name} </NavLink>
                </li>
              )
            })
          }
         

        </ul>
        {/* .........Nav-Right.......... */}
        <div className='nav-right'>
          {
            navRight.managements.map((item,index)=>{
              return(
                <Link key={index} 
                // target='_blank'
                className='management-icons' to={item.link}>
                  <item.icon/>
                </Link>
              )
            })
          }
          
            <button className='menu-buttom ' onClick={()=>setIsNavLinkShowing(!isNavLinkShowing)}>
             {
               !isNavLinkShowing ? <CgMenuGridO/> :<FaWindowClose/>
               
             }


            </button>


         

        </div>
      </div>
    </nav>
  )
}
