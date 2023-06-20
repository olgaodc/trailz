import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.logoLink} href={'/'}>Trailz</Link>
      <ul className={styles.navbarList}>
        <li className={styles.listItem}>
          <Link className={styles.itemLink} href={'/'}>Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.itemLink} href={'/'}>Add Trip</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar