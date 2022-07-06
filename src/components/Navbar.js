import {React, useRef} from "react";
import nasroLogo from "../img/nasro-67.png";
import { FaBars } from "react-icons/fa";
const Navbar = (props) => {
    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("res-nav")
    }
  return (
    <>
    <header className="navbar">
      <img src={nasroLogo} width="67px" alt="nasro-logo" />
      <nav ref={navRef} className="nav-links">
        <a href="/#">Home</a>
        <a href="/#">Skills</a>
        <a href="/#">Projects</a>
        <a href="/#">Contact</a>
        <input
        className="dark-btn"
          type="submit"
          onClick={props.toggleDark}
          value={props.dark ? "Light Mode" : "Dark Mode"}
        />
      </nav>
      
    </header>
        <button className="nav-btn" onClick={showNav}>
        <FaBars />
      </button>
    </>
  );
};

export default Navbar;
