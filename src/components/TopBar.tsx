import { HeaderText } from "./HeaderText"
import '../assets/styles/TopBar.scss'
import { useState } from "react"
import burger from '../assets/images/menu-hamburger.svg';
import { Link } from "react-router-dom";

export const TopBar = () => {

    const loggedIn = window.localStorage.getItem('token');

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className="top-bar">
            <HeaderText />
            <span className="login-register-buttons">
                { !loggedIn && <Link to='/login'>
                    <button className="login-button">Log in</button>
                </Link>}
                { !loggedIn && <Link to='/signup'>
                    <button className="register-button">Register</button>
                </Link>}
                {loggedIn && <button className="register-button">Logout</button>}
            </span>
            <div className="harmburger-menu">
                <button className="menu-button" onClick={handleClick}>
                <img src={burger} alt="" />
                </button>
                {showMenu && (
                    <ul className="menu-list">
                        <li className="menu-item"><button className="login-button">Log in</button></li>
                        <li className="menu-item"><button className="register-button">Register</button></li>
                    </ul>
                )}
                
            </div>
        </div>
    )
}