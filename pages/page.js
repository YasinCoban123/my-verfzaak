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
          <h1>Welcome to Verfxpert</h1>
          <p>We are a professional painting company dedicated to transforming your space with artistry and expertise.</p>
          <p>Our team of skilled painters will bring new life to your walls, creating a fresh and vibrant atmosphere.</p>
          <p>Whether it's residential or commercial painting, we provide top-quality service and deliver outstanding results.</p>
          <p>Contact us today for a free consultation and let Verfxpert be your painting solution!</p>
        </main>
      </div>
    </section>
  );
}
