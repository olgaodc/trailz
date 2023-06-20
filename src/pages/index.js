import Head from 'next/head';
import styles from './styles.module.css';
import Navbar from '../components/navbar/navbar';


export default function HomePage() {

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Major+Mono+Display&family=MuseoModerno:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700&family=Prompt:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" rel="stylesheet"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.bgImage}>
        <div className={styles.heroBoxWrapper}>
          <div className={styles.container}>
            <Navbar />
            <div className={styles.heroBox}>
              <h1 className={styles.heroBoxTitle}>Your adventure starts here</h1>
              <button className={styles.heroBoxButton} onClick={scrollDown}>See more</button>
            </div>
          </div>
        </div>
      </div>
      <div id='trips' className={styles.tripsSectionWrapper}>
        <div className={styles.container}>
          <div className={styles.tripsSection}>
            <h2 className={styles.tripsTitle}>Popular Tours</h2>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}
