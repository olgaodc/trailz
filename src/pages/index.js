import Head from 'next/head';
import styles from './styles.module.css';
import Navbar from '../components/navbar/navbar';
import InfoSection from '../components/infoSection/infoSection';
import Footer from '../components/footer/footer';
import TicketCard from '../components/ticketCard/ticketCard';
import { useState } from 'react';
import axios from 'axios';


export default function HomePage({ tickets }) {
  const [trips, setTickets] = useState(tickets);
  // const [isTripsExists, setTicketsExists] = useState(false)

  const scrollDown = () => {
    const trips = document.getElementById('trips');
    if (trips) {
      trips.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <Head>
        <title>Trailz</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.bgImage}>
        <div className={styles.heroBoxWrapper}>
          <Navbar/>
          <div className={styles.container}>
            <div className={styles.heroBox}>
              <h1 className={styles.heroBoxTitle}>Your adventure starts here</h1>
              <p className={styles.heroBoxDescription}>We believe in a traveling experience by providing our tour plan that suits your the best!</p>
              <button className={styles.heroBoxButton} onClick={scrollDown}>Explore now</button>
            </div>
          </div>
        </div>
      </div>

      <div id='trips' className={styles.tripsSectionWrapper}>
        <div className={styles.container}>
          <h2 className={styles.tripsTitle}>Top destinations</h2>
          <div className={styles.tripsSection}>
            {trips && trips.map(trip =>
              <TicketCard
                key={trip.id}
                id={trip.id}
                image={trip.imageUrl}
                destination={trip.destination}
                price={trip.price}
              />
            )}
            {!trips && <div className={styles.message}>Tickets not found, please try later</div>}
          </div>
        </div>
      </div>

      <InfoSection />

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://643d6a856afd66da6af665bd.mockapi.io/tickets');
    const { data } = response;
    return { props: { tickets: data } };
  } catch (err) {
    console.log(err);
    return { props: { tickets: null } };
  }
}