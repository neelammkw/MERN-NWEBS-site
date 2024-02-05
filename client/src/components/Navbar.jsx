import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <header>
                <NavLink to="/">
                        <img src="/images/logo.jpg" alt="Login" height="80" />
                    </NavLink>
            <nav className="navcontainer">
                {/* <div className="logo"> */}
            
                {/* </div> */}
                {/* <div className="navbar"> */}
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul className="nav-links">
                    <label htmlFor="close-btn" className="btn close-btn">
                        <i className="fas fa-times"></i>
                    </label>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    {isLoggedIn ? (
                        <li>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/registration">Registration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        </>
                    )}
                </ul>
                
            </nav>
        </header>
    );
};
