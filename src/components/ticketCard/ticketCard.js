import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const ticketCard = ({id, image, destination, price}) => {
  return (
    <Link className={styles.ticketCard} href={`trip/${id}`}>
      <img className={styles.ticketCardImage} src={image} alt='ticket destination image'/>
      <div className={styles.ticketCardInfo}>
        <span className={styles.ticketCardDestination}>{destination}</span>
        <span className={styles.ticketCardPrice}>{price}€</span>
      </div>
    </Link>
  )
}

export default ticketCard