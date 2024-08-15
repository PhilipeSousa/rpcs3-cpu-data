import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navbarContainer}>

            <Link href="/" className={styles.navbarLogo}>
                <h1>RPCS3 CPU DATA</h1>
            </Link>

            <ul className={styles.navLinksList}>
                <li className={styles.navLinkItem}><a className={styles.navLink} href="/#stock-cpus">Stock CPUs</a></li>
                <li className={styles.navLinkItem}><a className={styles.navLink} href="/#overclock-cpus">Overclock CPUs</a></li>
                <li className={styles.navLinkItem}><a className={styles.navLink} href="/#mobile-cpus">Mobile CPUs</a></li>
                <li className={styles.navLinkItem}><a className={styles.navLink} href="/#specific-game">Specific Games</a></li>
                <li className={styles.navLinkItem}><a className={styles.navLink} href="/about">About</a></li>
            </ul>

            <div className={styles.externalLinkSection}>
                <a 
                    className={styles.externalLinkButton} 
                    href="https://docs.google.com/spreadsheets/d/1Rpq_2D4Rf3g6O-x2R1fwTSKWvJH7X63kExsVxHnT2Mc/edit?gid=0#gid=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    List by Yahfz & Loweys Litsman
                </a>
            </div>
        </nav>
    );
};

export default Navbar;