"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <Link href="/" className={styles.navbarLogo}>
                    <h1>RPCS3 CPU DATA</h1>
                </Link>
                <ul className={styles.links}>
                    <li> <a href="/#stock-cpus">Stock CPUs</a></li>
                    <li><a href="/#overclock-cpus">OverClock CPUs</a></li>
                    <li><a href="/#mobile-cpus">Mobile CPUs</a></li>
                    <li><a href="/#specific-game">Specific Games</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <a 
                    className={styles.action_btn} 
                    href="https://docs.google.com/spreadsheets/d/1Rpq_2D4Rf3g6O-x2R1fwTSKWvJH7X63kExsVxHnT2Mc/edit?gid=0#gid=0" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    List by Yahfz & Loweys Litsman
                </a>
                <div className={styles.toggle_btn} onClick={toggleDropdown}>&#9776;</div>
            </div>

            <div className={`${styles.dropdown_menu} ${isDropdownOpen ? styles.open : ''}`}>
                <div className={styles.close_btn} onClick={closeDropdown}>&#10006;</div>
                <li><a href="/#stock-cpus" onClick={closeDropdown}>Stock CPUs</a></li>
                <li><a href="/#overclock-cpus" onClick={closeDropdown}>OverClock CPUs</a></li>
                <li><a href="/#mobile-cpus" onClick={closeDropdown}>Mobile CPUs</a></li>
                <li><a href="/#specific-game" onClick={closeDropdown}>Specific Games</a></li>
                <li><a href="/about" onClick={closeDropdown}>About</a></li>
                <li>  
                    <a 
                        className={styles.action_btn} 
                        href="https://docs.google.com/spreadsheets/d/1Rpq_2D4Rf3g6O-x2R1fwTSKWvJH7X63kExsVxHnT2Mc/edit?gid=0#gid=0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={closeDropdown}
                    >
                        List by Yahfz & Loweys Litsman
                    </a>
                </li>
            </div>
        </div>
    );
};

export default Navbar;
