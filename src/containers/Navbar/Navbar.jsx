import React,{ useState } from "react";
import './Navbar.css';
import Logo from '../../images/NeerTechlogo.png';
import { FiPhone,FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {RxHamburgerMenu, RxCross1} from 'react-icons/rx';

function Navbar(){
    
    const [activeItem, setActiveItem] = useState('/');

    const handleItemClick = (item) => {
      setActiveItem(item);
    };


    return(
        <>
            <div className="start-navbar">
                <div className="navbar-logo">
                    <img src={Logo}></img>
                    <div><p>NeerTech<span id="logo-name">Research and Innovation</span></p></div>
                    <div className="hamburger">
                        <RxHamburgerMenu/>
                    </div>
                </div>
                <div className="navbar-items">
                    <ul>
                        <li><Link className={activeItem === '/' ? 'active' : 'link'} onClick={() => handleItemClick('/')} to='/'>Home</Link></li>
                        <li><Link className={activeItem === '/services' ? 'active' : 'link'} onClick={() => handleItemClick('/services')} to='/services'>Services</Link></li>
                        <li><Link className={activeItem === '/aboutus' ? 'active' : 'link'} onClick={() => handleItemClick('/aboutus')} to='/aboutus'>About Us</Link></li>
                        <li><Link className={activeItem === '/contactus' ? 'active' : 'link'} onClick={() => handleItemClick('/contactus')} to='/contactus'>Contact Us</Link></li>
                        <li><Link className={activeItem === '/gallery' ? 'active' : 'link'} onClick={() => handleItemClick('/gallery')} to='/gallery'>Gallery</Link></li>
                    </ul>
                </div>
                <div className="navbar-contact">
                    <ul>
                        <li><i><FiPhone/></i>8302476768</li>
                        <li><i><FiMail/></i>neertech@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="mobile-navbar">
                <div className="mobile-navbaritems">
                    <ul>
                        <li><Link className={activeItem === '/' ? 'active' : 'link'} onClick={() => handleItemClick('/')} to='/'>Home</Link></li>
                        <li><Link className={activeItem === '/services' ? 'active' : 'link'} onClick={() => handleItemClick('/services')} to='/services'>Services</Link></li>
                        <li><Link className={activeItem === '/aboutus' ? 'active' : 'link'} onClick={() => handleItemClick('/aboutus')} to='/aboutus'>About Us</Link></li>
                        <li><Link className={activeItem === '/contactus' ? 'active' : 'link'} onClick={() => handleItemClick('/contactus')} to='/contactus'>Contact Us</Link></li>
                        <li><Link className={activeItem === '/gallery' ? 'active' : 'link'} onClick={() => handleItemClick('/gallery')} to='/gallery'>Gallery</Link></li>
                    </ul>
                </div>
                <div className="mobile-navbarcontact">
                    <ul>
                        <li><i><FiPhone/></i>8302476768</li>
                        <li><i><FiMail/></i>neertech@gmail.com</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;