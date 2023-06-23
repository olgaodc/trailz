import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import styles from './styles.module.css';
import formImage from '../../assets/form-image.jpg'

const NewTripPage = () => {
  const router = useRouter();

  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const createTrip = async () => {
    try {
      const response = await axios.post('https://643d6a856afd66da6af665bd.mockapi.io/tickets', {
        destination: destination,
        date: date,
        duration: duration,
        price: price,
        imageUrl: image,
        description: description,
      });

      console.log(response);

      setTimeout(() => {
        router.push('/');
      }, 500);

    } catch (err) {
      setMessage('Error, please try later');

      setTimeout(() => {
        setMessage('');
      }, 1000);

      console.log(err);
    }

  }

  const clearAllInputs = () => {
    setDestination('');
    setDate('');
    setDuration('');
    setPrice('');
    setImage('');
    setDescription('');
  }

  return (
    <>
      <Navbar />
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <div className={styles.form}>
              <h2 className={styles.formTitle}>Create your dream trip</h2>
              <div className={styles.formInputsWrapper}>
                <input
                  type='text'
                  placeholder='Destination'
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                />
                <input
                  type='date'
                  placeholder='Date'
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
                <input
                  type='number'
                  placeholder='Duration'
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}
                />
                <input
                  type='number'
                  placeholder='Price, Eur'
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
                <input
                  type='text'
                  placeholder='Image URL'
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
                <textarea
                  placeholder='Description'
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
                <button
                  className={styles.formButton}
                  onClick={() => { createTrip(); clearAllInputs() }}
                >
                  Create
                </button>
                <div className={styles.formMessage}>{message}</div>
              </div>
              <img className={styles.formImage} src={formImage.src} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default NewTripPage