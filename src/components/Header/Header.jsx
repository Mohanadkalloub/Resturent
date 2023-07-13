import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <section className="header">
      <NavLink to="#" className="logo">
        <i className="fas fa-utensils"></i> food.
      </NavLink>
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <NavLink to="/Home">home</NavLink>
        <NavLink to="/About">about</NavLink>
        <NavLink to="/Food">food</NavLink>
        <NavLink to="/Gallery">gallery</NavLink>
        <NavLink to="/Blogs">blogs</NavLink>
      </nav>
      {/* <div id="menu-btn" className="fas fa-bars"></div> */}
      <button onClick={handleMenuClick} id="menu-btn">
        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    </section>
  );
};
export default Header;
