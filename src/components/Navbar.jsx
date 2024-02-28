import React from 'react'
import styles from "./Navbar.module.css";
import Logo from './Logo/Logo';
import Button from './Button/Button';
import Search from './Search/Search';

const Navbar = () => {
    return ( < nav className = { styles.navbar } >
        <
        div className = { styles.logo } >
        <
        Logo / >
        <
        /div> < div > <
        Search placeholder = "Search a album of your choice" / >
        <
        /div> <div className = { styles.button } > <Button text = "Give Feedback"
        font - Poppins / >
        <
        /div> <
        /nav >
    );
};

export default Navbar;