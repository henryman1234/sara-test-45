import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../images/sara.png"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const Header = function() {

    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true:false)

    const closeNavHandler = function() {
        if (window.innerWidth < 800) {
            setIsNavShowing(false)
        } else {
            setIsNavShowing(true)
        }
    }

    return (
        <nav className="container nav_container">
            <Link to= "/" className="nav_logo"  onClick={closeNavHandler}  >
                <img src={Logo} alt="navbar_logo" className="nav_image" />
                <span className="nav_image-name">Sara</span>
            </Link>
            {isNavShowing && <ul className="nav_menu">
                <li><Link onClick={closeNavHandler} to="/profile/sdfsdf">Mon Profile</Link></li>
                <li><Link  onClick={closeNavHandler}  to="/create">Créer un post</Link></li>
                <li><Link  onClick={closeNavHandler}  to="/authors">Auteurs</Link></li>
                <li><Link  onClick={closeNavHandler}  to="/logout">Se déconnecter</Link></li>
            </ul>}

            <button className="nav_toggle-btn" onClick={function(){
                setIsNavShowing(!isNavShowing)
            }}>
                {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
            </button>
        </nav>
    )
}

export default Header