import React from 'react';
import Link from 'next/link';
import facebookIcon from '../../assets/facebook_icon.png';
import linkedinIcon from '../../assets/linkedin_icon.png';
import instagramIcon from '../../assets/instagram_icon.png';
import styles from './style.module.css';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.footer}>
          <ul className={styles.contactsList}>
            <li className={`${styles.contactsItem} ${styles.logo}`}>Trailz</li>
            {/* <li className={styles.contactsItem}>Vytenio str 10, Vilnius</li> */}
            <li className={styles.contactsItem}>Write us: info@trailz.com</li>
            <li className={styles.contactsItem}>Call us: +37052732367</li>
          </ul>

          <ul className={styles.socialMediaList}>
            <li className={styles.socialMediaItem}>
              <Link className={styles.itemLink} href={'https://www.facebook.com/'} target='blank'>
                <img className={styles.linkImage} src={facebookIcon.src} alt='facebook icon'/>
              </Link>
            </li>
            <li className={styles.socialMediaItem}>
              <Link className={styles.itemLink} href={'https://www.linkedin.com/'} target='blank'>
                <img className={styles.linkImage} src={linkedinIcon.src} alt='linkedin icon'/>
              </Link>
            </li>
            <li className={styles.socialMediaItem}>
              <Link className={styles.itemLink} href={'https://www.instagram.com/'} target='blank'>
                <img className={styles.linkImage} src={instagramIcon.src} alt='instagram icon'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>




  )
}

export default Footer