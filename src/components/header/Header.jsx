import './header.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png.webp';
import profileIcon from '../../assets/icons/user.png';
import bagIcon from '../../assets/icons/parcel.png';
import Hamburger from '../../assets/icons/hamburger.png';
import Cancel from '../../assets/icons/close.png'
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import snapchat from '../../assets/icons/snapchat.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import SearchIcon from '../../assets/icons/SearchIcon.png'

export const Header = (props) => {        
    const headerElem = document.getElementById("header");
    const [showNavbar, setShowNavbar] = useState(false);
    const openNavbar = () => {
        setShowNavbar(true);
    }
    const closeNavbar = () => {
        setShowNavbar(false);
    }

    return(
        <div className={`header ${props.fixed? "headerFixed":"headerStatic"} `} id="header">
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
            {showNavbar ? <section id='hidden-or-visible' className='dropdown-navbar'>
                <button id='close_dropdown' onClick={closeNavbar}>&times;</button>
                <section>
                    {/* <div className='social-links'>
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
                    </div> */}
                    <div className='searchBar'>
                        <form action="">
                            <button id='search_now'>
                                <img src={SearchIcon} alt="search"/>
                            </button>
                            <input type="text" name="search" id="search" placeholder='Search...' />
                            <button id='cancel_search'>&times;</button>
                        </form>
                    </div>
                </section>
                <div className='sm-quick-links'>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
            </section> : <></> }      
        </div>
    )
}
export const LandingPageHeader = (props) => {
    return(
        <div className="header" id="header">
            <section>
                <a href="">
                    <img src={logo} alt="logo/link-to-home"/>
                </a>
                <div className='links-right'>
                    <Link to="/signup">
                        Signup
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </section>  
        </div>
    )
}
