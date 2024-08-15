
import styles from './page.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>RPCS3 CPU DATA</h1>
            <p className={styles.text}>
                <strong>RPCS3 CPU DATA </strong> 
                is a website designed to help you find the best processor (CPU) for running PlayStation 3
                games using the RPCS3 emulator. With an easy-to-use interface, the site lets you visualize
                 and compare the performance of different CPUs.This way, you can choose the ideal processor
                  to get the best possible experience when playing on the emulator.
            </p>
    
            <h2 className={styles.sectionTitle}>Data Credits</h2>
            <p className={styles.text}>
            The data presented on this site is maintained by  <strong>Yahfz</strong> and <strong>Loweys Litsman</strong> .
             Shout out to them for their contributions to the data lists that power this project.
            </p>
            <br />
            <br />
            <h2 className={styles.sectionTitle}>Disclaimer</h2>
            <p className={styles.text}>
            This site does not condone piracy of any kind. Please purchase legitimate game copies 
            for use with the emulator.
            </p>
        </div>
    );
};

export default About;
