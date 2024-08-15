"use client";

import styles from "./page.module.css";
import CardBadge from "@/components/CardBadge/CardBadge";
import CPUTierList from "@/components/CPUTierList/CPUTierList";
import SpecificGames from "@/components/SpecificGames/SpecificGames";

const StockUrl = process.env.NEXT_PUBLIC_STOCK_URL;
const OverclockUrl = process.env.NEXT_PUBLIC_OVERCLOCK_URL;
const MobileUrl = process.env.NEXT_PUBLIC_MOBILE_URL;
const favoriteUrl_Stock = process.env.NEXT_PUBLIC_FAVORITE_URL_STOCK;

export default function Home() {
  return (
    <div className={styles.container}>
      <CardBadge/>
      <div>
        <section id="stock-cpus" className={styles.section}>
          <h2 className={styles.h2}>Stock CPUs</h2>
          <CPUTierList url={StockUrl} />
        </section>
        
        <section id="overclock-cpus" className={styles.section}>
          <h2 className={styles.h2}>Overclock CPUs</h2>
          <CPUTierList url={OverclockUrl} /> 
        </section>
        
        <section id="mobile-cpus" className={styles.section}>
          <h2 className={styles.h2}>Mobile CPUs</h2>
          <CPUTierList url={MobileUrl} />
        </section>

        <section id="specific-game" className={styles.section}>
          <h2 className={styles.h2}>CPU Recommendations for Specific Games</h2>
          <div>
            <SpecificGames url={favoriteUrl_Stock}/>
          </div>
        </section>
      </div>
    </div>

  );
}

