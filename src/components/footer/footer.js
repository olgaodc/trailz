import React from 'react';
import Link from 'next/link';
import facebookIcon from '../../assets/facebook_icon.png';
import linkedinIcon from '../../assets/linkedin_icon.png';
import instagramIcon from '../../assets/instagram_icon.png';
import styles from './style.module.css';
import callIcon from '../../assets/call-icon.png';
import mailIcon from '../../assets/mail-icon.png';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.footer}>
          <ul className={styles.contactsList}>
            <li className={`${styles.contactsItem} ${styles.logo}`}>Trailz</li>
            {/* <li className={styles.contactsItem}>Vytenio str 10, Vilnius</li> */}
            <li className={styles.contactsItem}>
              <a className={styles.contactsItemLink} href="mailto: info@trailz.com">
                <img className={styles.contactsLinkImage} src={mailIcon.src} alt='mail icon' />
                <span className={styles.contactsLinkText}>info@trailz.com</span>
              </a>
            </li>
            <li className={styles.contactsItem}>
              <a className={styles.contactsItemLink} href="tel:+37052732367">
                <img className={styles.contactsLinkImage} src={callIcon.src} alt='phone icon' />
                <span className={styles.contactsLinkText}>+37052732367</span>
              </a>
            </li>
          </ul>

          <ul className={styles.socialMediaList}>
            <li className={styles.socialMediaItem}>
              <Link className={styles.socialMediaItemLink} href={'https://www.facebook.com/'} target='blank'>
                <img className={styles.socialMediaLinkImage} src={facebookIcon.src} alt='facebook icon' />
              </Link>
            </li>
            <li className={styles.socialMediaItem}>
              <Link className={styles.socialMediaItemLink} href={'https://www.linkedin.com/'} target='blank'>
                <img className={styles.socialMediaLinkImage} src={linkedinIcon.src} alt='linkedin icon' />
              </Link>
            </li>
            <li className={styles.socialMediaItem}>
              <Link className={styles.socialMediaItemLink} href={'https://www.instagram.com/'} target='blank'>
                <img className={styles.socialMediaLinkImage} src={instagramIcon.src} alt='instagram icon' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>




  )
}

export default Footer