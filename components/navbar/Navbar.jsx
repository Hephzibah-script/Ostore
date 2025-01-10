import logo from "/icons8-cart-48.png";
import cartIcon from "/icons8-cart-30.png";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div
      className="
    navbar"
    >
      <Link to="/" className="navLogo">
        <img src={logo} alt="logo" />
        <h2> O'store</h2>
      </Link>

      <ul className="navMenu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}{" "}
        </li>
      </ul>
      <div className="navLoginCart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="cart-icon" />
        </Link>
        <div className="navCartCount">0</div>
      </div>
    </div>
  );
};

export default Navbar;
