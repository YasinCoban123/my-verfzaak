import Image from 'next/image';
import styles from './page.module.css';
import Nav from './Nav';
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.normcss}>
    <div className={styles.container}>
      <Nav /> {/* Use the Nav component */}

      <main className={styles.main}>
      <h1 className={styles.h1home}>
        Over Ons
        </h1>
        <p>VerfXpert, opgericht in 1999 door Yasin Coban, is gevestigd in de prachtige Beijerlandselaan. 
          Al vanaf het begin is VerfXpert dé betrouwbare en kwalitatieve plek die jouw huis omtovert met een vakkundige schilderbeurt.
          Met meer dan twee decennia ervaring hebben we een sterke reputatie opgebouwd in de schildersindustrie. 
          Ons team van gepassioneerde vakmensen is toegewijd aan het leveren 
          van hoogwaardige schilder- en decoratiediensten die voldoen aan de verwachtingen van onze gewaardeerde klanten.
          </p>
        <Image
          className={styles.fotosverfzaak}
          src="/schild5.png"
          alt="Foto verfwebsite"
          width={350}
          height={150}
          quality={80}
        />
        <p>Bij VerfXpert geloven we in maatwerk en streven we ernaar om jouw visie werkelijkheid te laten worden. 
          Of het nu gaat om een interieur- of exterieurproject, we werken nauw met jou samen om de perfecte kleuren, 
          afwerkingen en technieken te kiezen die passen bij jouw stijl en behoeften.
          Onze vakbekwame schilders zijn getraind in de nieuwste technieken en maken gebruik van 
          hoogwaardige verfproducten om duurzame en prachtige resultaten te garanderen. 
          We begrijpen dat jouw huis een belangrijke investering is, 
          daarom zetten we ons in voor uitmuntend vakmanschap en zorgen we ervoor dat elk detail met zorg wordt behandeld.
          </p>
        <Image
          className={styles.fotosverfzaak}
          src="/schild6.jpg"
          alt="Foto verfwebsite"
          width={350}
          height={150}
          quality={80}
        />
        <p>Naast ons schilderwerk bieden we ook aanvullende diensten aan, 
          zoals wandafwerking, behangen en kleuradvies. We streven ernaar om een allesomvattende oplossing te bieden 
          voor al jouw schilder- en decoratiebehoeften, 
          zodat je één vertrouwde bron hebt voor het transformeren van jouw leefruimte.
          </p>
        <Image
          className={styles.fotosverfzaak}
          src="/schild7.jpeg"
          alt="Foto verfwebsite"
          width={350}
          height={150}
          quality={80}
        />
        <p>Bij VerfXpert geloven we in een persoonlijke aanpak en uitstekende klantenservice. 
          We luisteren naar jouw wensen, beantwoorden al jouw vragen en zorgen ervoor dat je tevreden bent met het 
          eindresultaat. Jouw tevredenheid is onze grootste beloning.
          Bedankt dat je de tijd hebt genomen om meer te weten te komen over VerfXpert. 
          We kijken ernaar uit om met jou samen te werken en jouw huis te laten stralen met onze expertise en passie voor schilderwerk.
          </p>
        <Image
          className={styles.fotosverfzaak}
          src="/schild8.png"
          alt="Foto verfwebsite"
          width={350}
          height={150}
          quality={80}
        />
        <br/><br/><br/><br/><br/><br/><br/>
      </main>
    </div>
    </section>
  );
}
