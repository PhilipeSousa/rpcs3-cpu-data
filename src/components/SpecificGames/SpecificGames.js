import { useEffect, useState } from 'react';
import fetchCsvData from '@/utils/fetchCsvData';
import styles from './SpecificGames.module.css';

const SpecificGames = ({ url }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCsvData(url);
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  if (error) return <p className={styles.error}>Error loading data: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ul className={styles.legend}>
          <li className={styles.legendItem}>
            <strong className={styles.strong}>SPU:</strong> PS3&apos;s CPU
          </li>
          <li className={styles.legendItem}>
            <strong className={styles.strong}>RSX:</strong> PS3&apos;s GPU
          </li>
        </ul>
      </div>

      <div className={styles.cardsContainer}>
        {data.map((game, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.gameTitle}>{game['Game/Franchise']}</h2>
              <p className={styles.bottleneck}><strong>Bottleneck:</strong> {game['What is the Bottleneck?']}</p>
              <p className={styles.recommendedCpu}><strong>Recommended CPUs:</strong></p>
              <ul className={styles.highlightedCpu}>
                {game['Which CPU do I recommend?']
                  .split(' > ')
                  .map((cpu, i) => (
                    <li key={i}>{cpu.trim()}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificGames;
