
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

  if (error) return <p>Error loading data: {error}</p>;

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>What do I buy to play my favorite game/franchise in the best way possible?</h3>
        <ul className={styles.legend}>
          <li className={styles.legendItem}>
            <strong className={styles.strong}>SPU:</strong> PS3's CPU
          </li>
          <li className={styles.legendItem}>
            <strong className={styles.strong}>RSX:</strong> PS3's GPU
          </li>
        </ul>
      </div>

      {data.map((game, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.gameTitle}>{game['Game/Franchise']}</h2>
          <p className={styles.bottleneck}><strong>Bottleneck:</strong> {game['What is the Bottleneck?']}</p>
          <p className={styles.recommendedCpu}><strong>Recommended CPU:</strong></p>
          <p className={styles.highlightedCpu}>
            {game['Which CPU do I recommend?']}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SpecificGames;
