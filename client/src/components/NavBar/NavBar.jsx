import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Service from "../../pages/Services";
import Contact from "../../pages/Contact";
import SignIn from "../../pages/auth/SignIn";
// import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from "../../features/auth/authSlice";

function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY <= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header
      className={`smooth-transition
        ${
          color
            ? "shadow-lg sticky top-0 z-50"
            : "shadow-lg sticky top-0 z-50 bg-white"
        }
      `}
    >
      <img
        src="https://seeklogo.com/images/C/credit-du-maroc-logo-80D6D85982-seeklogo.com.png"
        alt=""
        className="logo"
      />
      <>
        <nav ref={navRef}>
          <span>
            <Link to="/" element={<Home />}>
              Home
            </Link>
          </span>
          <span>
            <Link to="/service" element={<Service />}>
              Our services
            </Link>
          </span>
          <span>
            <Link to="/about" element={<About />}>
              About Us
            </Link>
          </span>
          <span>
            <Link to="/Contact" element={<Contact />}>
              Contact Us
            </Link>
          </span>
          <Link to="/signIn" element={<SignIn />}>
            <button className="res-sign px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">
              sign in
            </button>
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <Link to="/signIn" element={<SignIn />}>
          <button className="sign px-4 py-1.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">
            sign in
          </button>
        </Link>
      </>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
