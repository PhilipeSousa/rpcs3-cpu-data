
import styles from './Footer.module.css'

const Footer = () => {
    const curr_year = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerSlogan}>In Emulation We Trust</p>
        </footer>
    );
};

export default Footer;