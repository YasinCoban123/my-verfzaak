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

        <p>Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <p>
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </p>
        <p>Find in-depth information about Next.js features and API.</p>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
        <p>Explore the Next.js 13 playground.</p>
        <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
      </main>
    </div>
    </section>
  );
}
