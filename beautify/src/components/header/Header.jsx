import './header.css';
import { useState } from 'react';
import logo from '../../assets/images/logo.png.webp';
import profileIcon from '../../assets/icons/user.png';
import bagIcon from '../../assets/icons/parcel.png';
import Hamburger from '../../assets/icons/hamburger.png';
import Cancel from '../../assets/icons/close.png'
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import snapchat from '../../assets/icons/snapchat.png';
import whatsapp from '../../assets/icons/whatsapp.png';

export const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const openNavbar = () => {
        document.getElementById("header").style.height = "auto";
        setShowNavbar(true);
    }
    const closeNavbar = () => {
        document.getElementById("header").style.height = "70px";
        setShowNavbar(false);
    }
    return(
        <div className="header" id="header">
            <section>
                <a href="">
                    <img src={logo} alt="logo/link-to-home"/>
                </a>
                <div className='links-right'>
                    <a href="">
                        <img src={profileIcon} alt="profile"/>
                    </a>
                    <a href="">
                        <img src={bagIcon} alt="shopping bag"/>
                    </a>
                    {!showNavbar ? (<button onClick={openNavbar}><img src={Hamburger} alt="navbar-toggle"/></button>
                    ):(<button onClick={closeNavbar}><img src={Cancel} alt="navbar-toggle"/></button>)}
                </div>
            </section> 
            <section id='hidden-or-visible'>
                <div className='social-links'>
                    <a href="">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a href="">
                        <img src={instagram} alt="instagram"/>
                    </a>
                    <a href="">
                        <img src={snapchat} alt="snapchat"/>
                    </a>
                    <a href="">
                        <img src={whatsapp} alt="whatsapp"/>
                    </a>
                </div>
                <div className='quick-links'>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
            </section>       
        </div>
    )
}