import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../img/Gym-Logo-Graphics.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="main" className={styles.logo} smooth={true} duration={2000}>
          <img src={logo} alt="logo" />
        </Link>

        <FontAwesomeIcon
          icon={faAlignJustify}
          className={styles.icon10}
        ></FontAwesomeIcon>

        <ul className={styles.menu}>
          <h2 className={styles.h2}>MBX</h2>
          <p className={styles.h2para}>Keeping fit is our business</p>
          <li>
            <Link to={"/"}>
              Home
            </Link>{" "}
          </li>

          <li>
            <Link to={"/about"}>
              About
            </Link>{" "}
          </li>

          <li>
            <Link to={"/products"}>
              Products
            </Link>{" "}
          </li>

          <li className={styles.gallery}>
            <Link to={"/gallery"}>
              Gallery
            </Link>{" "}
          </li>

          <li className={styles.testimonials}>
            <Link to={"/testimonials"}>
              Testimonials
            </Link>{" "}
          </li>

          <li>
            <Link to={"/contact"}>
              Contact
            </Link>{" "}
          </li>

          <img src={logo} alt="logo" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
