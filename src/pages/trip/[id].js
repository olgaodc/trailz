import React, { useState } from 'react';
import axios from 'axios';
import ConfettiGenerator from 'confetti-js';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer'
import calendarIcon from '../../assets/calendar.png';
import styles from './styles.module.css';


const TripPage = ({ ticket }) => {
  const [trip, setTrip] = useState(ticket);

  function startConfetti() {
    const canvas = document.getElementById("confettiCanvas");
  
    const confettiSettings = {
      target: canvas,
      max: 80,
      size: 2,
      animate: true,
      props: ["circle", "square", "triangle", "line"],
      colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
      clock: 35
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(() => {
      confetti.clear();
    }, 3000);
  }


  return (
    <>
    <canvas id="confettiCanvas" className={styles.confetti}></canvas>
      <Navbar />
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          {trip && (
            <div className={styles.tripCardWrapper}>
              <div className={styles.tripCard}>
                <img className={styles.tripCardImage} src={trip.imageUrl} />
                <div className={styles.tripCardInfo}>
                  <div className={styles.tripTitleWrapper}>
                    <h3 className={styles.tripTitle}>{trip.destination}</h3>
                    <span className={styles.tripPrice}>{`${trip.price}€`}</span>
                  </div>
                  <p className={styles.tripDescription}>{trip.description}</p>
                  <span className={styles.tripDateWrapper}>
                    <img className={styles.dateImage} src={calendarIcon.src} alt='calendar icon'/>
                    <span>{trip.date}</span>
                  </span>
                  <span className={styles.durationWrapper}>
                    <span className={styles.durationTitle}>Duration: </span>
                    <span>{`${trip.duration} days`}</span>
                  </span>
                  <button className={styles.tripButton} onClick={startConfetti}>Book Trip</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TripPage

export async function getServerSideProps(ctx) {
  const id = ctx.query.id
  try {
    const response = await axios.get(`https://643d6a856afd66da6af665bd.mockapi.io/tickets/${id}`);
    const { data } = response;
    return { props: { ticket: data } };
  } catch (err) {
    console.log(err);
  }
}