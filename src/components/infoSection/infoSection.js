import React from 'react';
import tripImage from '../../assets/travel.png';
// import trippingImage from '../../assets/tripping.jpg';
// import campingImage from '../../assets/camping.jpg';
import styles from './styles.module.css';

const InfoSection = () => {
  return (
    <div className={styles.infoSectionWrapper}>
      <div className={styles.container}>
        <h3 className={styles.infoSectionTitle}>What Can We Offer for You</h3>
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
            <p className={styles.aboutSectionDescription}>We believe in a traveling experience by providing our tour plan that suits your the best!</p>
          </div>

          <img className={styles.aboutSectionImage} src={tripImage.src} />
        </div>
      </div>
    </div>


  )
}

export default InfoSection