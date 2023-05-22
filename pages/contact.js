import Image from 'next/image';
import styles from './page.module.css';
import Nav from './Nav';
import React from "react";

export default function Home() {
  return (
    <section className={styles.normcss}>
    <div className={styles.container}>
      <Nav /> {/* Use the Nav component */}

      <main className={styles.main}>
      <h1 className={styles.h1home}>
        Contact Pagina
        </h1>
        <p>
          Bij VerfXpert staan we elke dag van de week voor u klaar. 
          U kunt eenvoudig contact met ons opnemen via telefoon of e-mail. 
          Daarnaast nodigen we u graag uit om een bezoek te brengen aan onze fysieke locatie,
          waar u meer informatie kunt vinden op onze locatiepagina.
          </p>
        <Image
          className={styles.fotosverfzaak}
          src="/schild11.jpg"
          alt="Foto verfwebsite"
          width={100}
          height={100}
        />
        <p>
          Onderaan deze pagina vindt u alle informatie die u nodig heeft om contact met ons op te nemen. 
          U kunt ons telefonisch bereiken of een e-mail sturen naar het verstrekte contactnummer en e-mailadres. 
          Daarnaast hebben we voor uw gemak een handig contactformulier toegevoegd,
          waarmee u uw vragen of verzoeken rechtstreeks naar ons kunt sturen.
          </p>
          <ul>
          <li>
            <p>Email Adress: cobanyasin234@gmail.com</p>
          </li>
          <li>
            <p>Telefoonnummer: 0678238501</p>
          </li>
          <li>
            <p>Stad: Rotterdam-Zuid-Holland</p>
          </li>
        </ul>
        <h1>Contact Form</h1>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>

          <button className={styles.submitButton} type="submit">Submit</button>
        </form>
        <br/><br/><br/><br/><br/><br/><br/>
      </main>
    </div>
    </section>
    
  );
}
