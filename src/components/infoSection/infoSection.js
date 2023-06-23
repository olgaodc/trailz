import React from 'react';
import tripImage from '../../assets/travel.png';
// import trippingImage from '../../assets/tripping.jpg';
// import campingImage from '../../assets/camping.jpg';
import styles from './styles.module.css';

const InfoSection = () => {
  return (
    <div className={styles.infoSectionWrapper}>
      <div className={styles.container}>
        <h3 className={styles.infoSectionTitle}>What We Offer to You</h3>
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <span className={styles.infoCardTitle}>Various Destinations</span>
            <span className={styles.infoCardDescription}>Discover captivating locations and uncover hidden treasures worldwide.</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoCardTitle}>Everything is Included</span>
            <span className={styles.infoCardDescription}>Enjoy a hassle-free journey where all essentials, from accommodations to activities, are taken care of.</span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoCardTitle}>Affordable Prices</span>
            <span className={styles.infoCardDescription}>Experience your dream getaway without breaking the bank  for an unforgettable adventure.</span>
          </div>
        </div>

        <div className={styles.aboutSection}>
          <div className={styles.aboutSectionTitleWrapper}>
            <h2 className={styles.aboutSectionTitle}>Discover the world in a new way</h2>
            <p className={styles.aboutSectionDescription}>Get ready to venture into captivating destinations, uncover hidden treasures, and engage with diverse cultures. From breathtaking landscapes to vibrant cities, our curated trips will ignite your sense of wonder and leave you with unforgettable memories. Join us and embark on a transformative travel experience that will redefine the way you see the world.</p>
          </div>

          <img className={styles.aboutSectionImage} src={tripImage.src} />
        </div>
      </div>
    </div>


  )
}

export default InfoSection