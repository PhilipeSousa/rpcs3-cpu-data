import styles from './page.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>RPCS3 CPU DATA</h1>
            <p className={styles.text}>
                is a website designed to help you find the best processor (CPU) for running PlayStation 3
                games using the RPCS3 emulator. With an easy-to-use interface, the site lets you visualize
                and compare the performance of different CPUs.This way, you can choose the ideal processor
                to get the best possible experience when playing on the emulator.
            </p>
    
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.sectionTitle}>What is AVX512?</h2>
                    <p>
                        AVX512 is an Intel instruction set for parallel processing that can enhance performance in specific applications. 
                        Note that only 12th Gen Intel CPUs require additional configuration to enable AVX512, while other CPUs with AVX512 support have it enabled by default.
                    </p>
                    <br />
                    <a className={styles.link} href="https://www.reddit.com/r/rpcs3/comments/tqt1ko/clearing_up_some_avx512_misinformation_and_how_to/" target="_blank" rel="noopener noreferrer">
                        How to find a 12th Gen CPU with AVX512 and clearing some misinformation about it
                    </a>
                    <br />
                    <br />
                    <a className={styles.link} href="https://whatcookie.github.io/posts/why-is-avx-512-useful-for-rpcs3/" target="_blank" rel="noopener noreferrer">
                        Learn more about AVX512 in RPCS3 by Whatcookie
                    </a>
                    <br />
                    <h2 className={styles.sectionTitle}>Similar Performance</h2>
                    <p>
                        When CPUs of the same generation offer similar performance, it is usually more economical to choose the cheaper option, 
                        as the performance difference is minimal.
                    </p>
                </div>
            </div>

            <h2 className={styles.sectionTitle}>Data Credits</h2>
            <p className={styles.text}>
            The data presented on this site is maintained by  <strong>Yahfz</strong> and <strong>Loweys Litsman</strong>.
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
