import { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const onClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="leftSide" id={showLinks ? "open" : "close"}>
        <img src={logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={onClick}>
          <ReorderIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
