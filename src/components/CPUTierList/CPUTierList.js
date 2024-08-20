import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import fetchCsvData from '@/utils/fetchCsvData'; 
import styles from './CPUTierList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faMedal } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip, faRocket } from '@fortawesome/free-solid-svg-icons'; 

const getPositionIcon = (index, cpu) => {
  const excludeIconCpus = [
    "Intel 7000 - 4000 4c/8t",
    "Ryzen 1000 - 2000 8c/16t",
    "Any 4c/4t CPU",
    "Ryzen 1000 - 2000 6c/12t or worse",
    "Intel's 2nd and 3rd Gen",
    "AMD FX CPUs",
    "Anything Older",
    "No mobile CPUs have reached this tier"
  ];

  if (excludeIconCpus.includes(cpu)) {
    return null;
  }

  switch (index) {
    case 0:
      return <FontAwesomeIcon icon={faCrown} style={{ color: 'gold' }} />;
    case 1:
      return <FontAwesomeIcon icon={faMedal} style={{ color: 'silver' }} />;
    case 2:
      return <FontAwesomeIcon icon={faMedal} style={{ color: '#cd7f32' }} />; // Bronze color
    default:
      return null;
  }
};

const getTierDescription = (tier) => {
  const descriptions = {
    S: "The absolute best. Performance far above what a PlayStation 3 can achieve.",
    A: "Excellent performance. Beats the PlayStation 3 framerates in most if not all the titles.",
    B: "Good performance. Plays every 'Playable' title with ease, lacks performance in some 'In-game' titles.",
    C: "A-OK performance. Below the recommended requirements. Stick to 'Playable' titles.",
    D: "Very budget oriented. Most non-AAA 'Playable' titles should work.",
    F: "Avoid these CPUs. CPUs in this tier are very old and perform very badly."
  };
  return descriptions[tier] || '';
};

const CpuTierList = ({ url }) => {
  const [tiers, setTiers] = useState({});
  const [avx512Cpus, setAvx512Cpus] = useState([]);
  const [similarPerformanceCpus, setSimilarPerformanceCpus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        //header: false for CPU TIER LIST
        const result = await fetchCsvData(url, false); 
        const parsedTiers = {};
        const avx512 = [];
        const similarPerformance = [];

        result.forEach((row) => {
          const [category, tierName, ...cpus] = row;

          if (category === 'avx512Cpus') {
            avx512.push(...cpus.filter(cpu => cpu));
          } else if (category === 'similarPerformanceCpus') {
            similarPerformance.push(...cpus.filter(cpu => cpu));
          } else if (tierName) {
            parsedTiers[tierName.trim()] = cpus.filter(cpu => cpu);
          }
        });

        setTiers(parsedTiers);
        setAvx512Cpus(avx512);
        setSimilarPerformanceCpus(similarPerformance);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) return <p className={styles.tierDescriptionText}>Loading...</p>;
  if (error) return <p className={styles.tierDescriptionText}>Error loading data: {error}</p>;

  return (
    <div ref={ref} className={styles.gridContainer}>
      {Object.entries(tiers).map(([tierName, cpuList], tierIndex) => (
        <motion.div
          key={tierName}
          className={styles.tierSection}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: tierIndex * 0.2 }}
        >
          <div className={styles.tierContentWrapper}>
            <div className={styles.stickyHeader}>
              <h2 className={styles.tierTitle}>
                <span className={styles.tierName}>{tierName}</span>
                <span className={styles.tierLabel}>Tier</span>
              </h2>
              <p className={styles.tierDescriptionText}>{getTierDescription(tierName)}</p>
            </div>

            <ul className={styles.cpuList}>
              {cpuList.map((cpu, index) => (
                <li
                  key={`${cpu}-${index}`}
                  className={`${styles.cpuListItem} ${avx512Cpus.includes(cpu) ? styles.avx512Badge : ''} ${similarPerformanceCpus.includes(cpu) ? styles.similarPerformanceBadge : ''}`}
                >
                  {getPositionIcon(index, cpu)} {cpu}
                  <div className={styles.badgeWrapper}>
                    {avx512Cpus.includes(cpu) && (
                      <span className={`${styles.badge} ${styles.avx512Badge}`}>
                        <FontAwesomeIcon icon={faMicrochip} /> AVX512
                      </span>
                    )}
                    {similarPerformanceCpus.includes(cpu) && (
                      <span className={`${styles.badge} ${styles.similarPerformanceBadge}`}>
                        <FontAwesomeIcon icon={faRocket} /> Similar
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CpuTierList;
