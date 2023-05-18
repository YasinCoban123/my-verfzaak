import Image from 'next/image';
import styles from './page.module.css';
import Nav from './Nav';
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav /> {/* Use the Nav component */}

      <main className={styles.main}>
        Get started by editing&nbsp;
        <code className={styles.code}>app/page.js</code>
        <br />
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
        <p>Find in-depth information about Next.js features and API.</p>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
        <p>Explore the Next.js 13 playground.</p>
        <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
      </main>
    </div>
  );
}
