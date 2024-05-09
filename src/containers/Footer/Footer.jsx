import React from 'react';
import './Footer.css';
import Logo from '../../images/NeerTechlogo.png';
import { FiPhone,FiMail,FiMapPin,FiInstagram,FiFacebook,FiLinkedin} from 'react-icons/fi';
import {BsBuildingsFill} from 'react-icons/bs';
import {GrCertificate} from 'react-icons/gr';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <>
        <div className='main-footer'>
            <div className='footer-split1'>
                <div className='footer1'>
                    <div className='footer-logo'>
                        <img src={Logo} alt=" "/>
                        <div><p>NeerTech<span id="logo-name">Research and Innovation</span></p></div>
                    </div>
                    <div className='footer-social'>
                        <div className='footer-contact'>
                            <div className='contact1'>
                                <ul>
                                    <li><i><FiPhone/></i>9641350464 / 7455824624</li>
                                    <li><i><FiMail/></i>neertech2023@gmail.com</li>
                                    <li><i><FiMapPin/></i>3RD-FLOOR, FLAT-3A, 14, ISWAR GANGULY STREET, KALIGHAT KOLKATA WB 700026 IN</li>
                                </ul>
                            </div>
                            <div className='social-links'>
                                <a href='https://www.instagram.com'><FiInstagram className='size'/></a>
                                <a href='https://www.facebook.com/people/Neertech-Research-And-Innovation/100090055891596/'><FiFacebook className='size'/></a>
                                <a href='https://www.linkedin.com/company/neertech-research-and-innovation-private-limited/'><FiLinkedin className='size'/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer2'>
                    <div className='footer-items'>
                        <h2>Quick Links</h2>
                        <ul className='footer-itemlist'>
                            <li><Link className='footer-link' to='/'>Home</Link></li>
                            <li><Link className='footer-link' to='/services'>Services</Link></li>
                            <li><Link className='footer-link' to='/aboutus'>About us</Link></li>
                            <li><Link className='footer-link' to='/contactus'>Contact Us</Link></li>
                            <li><Link className='footer-link' to='/gallery'>Gallery</Link></li>
                        </ul>
                    </div>

                    <div className='footer-newsitem'>
                        <h2>News and Events</h2>
                        <ul className='footer-newslist'>
                            <li>
                                <a href='https://www.zaubacorp.com/company/NEERTECH-RESEARCH-AND-INNOVATION-PRIVATE-LIMITED/U72900WB2023PTC259621'>
                                    <div className='news-img'>
                                        <i><BsBuildingsFill className='img'/></i>
                                    </div>
                                    <div className='news-text'>
                                        <p>Documentation Details<br/>(<i>Click here to learn more</i>)</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='/aboutus'>
                                    <div className='news-img'>
                                        <i><GrCertificate className='img'/></i>
                                    </div>
                                    <div className='news-text'>
                                        <p>Certification information</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='footer-split2'>
                <p>© 2023 NeerTech Pvt.Ltd. All Rights Reserved | In Collaboration with <a href='https://www.weslab.co.in'>WESLAB</a></p>
            </div>
        </div>
        </>
    );
}

export default Footer;
