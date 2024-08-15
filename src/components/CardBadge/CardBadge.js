import React from 'react';
import styles from './CardBadge.module.css';

const CardBadge = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.tooltipTrigger}>
                <span className={styles.avx512Badge}>AVX-512</span>
                <span className={styles.similarBadge}>Similar Performance</span>
                <div className={styles.tooltipContent}>
                    <h4>What is AVX512?</h4>
                    <p>
                        AVX512 is an Intel instruction set for parallel processing that can enhance performance in specific applications. 
                        Note that only 12th Gen Intel CPUs require additional configuration to enable AVX512, while other CPUs with AVX512 support have it enabled by default.
                    </p>
                    <h4>Similar Performance</h4>
                    <p>
                        When CPUs of the same generation offer similar performance, it is usually more economical to choose the cheaper option, 
                        as the performance difference is minimal.
                    </p>
                    <a href="https://www.reddit.com/r/rpcs3/comments/tqt1ko/clearing_up_some_avx512_misinformation_and_how_to/" target="_blank" rel="noopener noreferrer">
                        How to find a 12th Gen CPU with AVX512 and clearing some misinformation about it
                    </a>
                    <br />
                    <br />
                    <a href="https://whatcookie.github.io/posts/why-is-avx-512-useful-for-rpcs3/" target="_blank" rel="noopener noreferrer">
                        Learn more about AVX512 in RPCS3 by Whatcookie
                    </a>

                </div>
            </div>
            
        </div>
    );
};

export default CardBadge;