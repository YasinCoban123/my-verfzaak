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
        Locatie Pagina
        </h1>
        <p>Bij VerfXpert hebben we bewust gekozen voor één vestiging. 
          Dit stelt ons in staat om jou de beste service te bieden met een consistent kwaliteitsniveau.
          Onderaan kunt u meer info vinden over waar wij geloceerd zijn.</p>
        <Image
          className={styles.fotosverfzaak}
          src="/schild9.jpg"
          alt="Foto verfwebsite"
          width={500}
          height={300}
          quality={100}
        />
        <ul>
          <li>
            <p>Adress: Beijerlandselaan 173D</p>
          </li>
          <li>
            <p>Postcode: 3074EH</p>
          </li>
          <li>
            <p>Stad: Rotterdam-Zuid-Holland</p>
          </li>
        </ul>
        <p>
         Hieronder vindt u onze openingstijden op onze fysieke locatie. 
         Voor meer informatie over het maken van een telefonische afspraak 
         verwijzen wij u graag naar onze contactpagina.</p>
        <ul>
          <li>
            <p>Open dage: Maandag t/m Zondag</p>
          </li>
          <li>
            <p>Open uren: 9.00 t/m 18.00</p>
          </li>
        </ul>
        <br/><br/><br/><br/><br/><br/><br/>
      </main>
    </div>
    </section>
  );
}
