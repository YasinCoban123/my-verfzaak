import Image from 'next/image';
import Nav from './Nav';
import React from "react";
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.normcss}>
      <div className={styles.container}>
        <Nav />
       
        <main className={styles.main}>
          <h1 className={styles.h1home}>
            Welcome to Verfxpert
          </h1>
          <p>Welkom op de website van Verfxpert. Wij zijn trots om een breed scala aan services aan te bieden, 
            zodat u precies kunt krijgen wat u zoekt. Of u nu op zoek bent naar professioneel schilderwerk, 
            decoratieve afwerkingen of kleuradvies, wij staan klaar om u te helpen uw visie tot leven te brengen.</p>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.fotosverfzaak}
              src="/verfzaakLogo.png"
              alt="Foto verfwebsite"
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <p>Op onze website vindt u gedetailleerde informatie over onze vestiging, 
            inclusief het adres en een interactieve kaart voor eenvoudige navigatie. 
            Daarnaast kunt u onze openingstijden raadplegen, zodat u weet wanneer u ons kunt bezoeken.</p>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.fotosverfzaak}
              src="/schild2.jpg"
              alt="Foto verfwebsite"
              width={500}
              height={300}
              quality={100}
            />
          </div>
          <p>Bij Verfxpert streven we ernaar om hoogwaardige service en vakmanschap te leveren.
            Ons team van ervaren schilders en decorateurs zet zich in om uw verwachtingen te overtreffen. 
            We luisteren naar uw wensen en werken nauw met u samen om het gewenste resultaat te bereiken.</p>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.fotosverfzaak}
              src="/schild3.jpg"
              alt="Foto verfwebsite"
              width={500}
              height={300}
              quality={80}
            />
          </div>
          <p>Heeft u vragen, wilt u een afspraak maken of wilt u meer informatie over onze diensten? Neem gerust contact met ons op.
             Onze vriendelijke en deskundige medewerkers staan klaar om uw vragen te beantwoorden en u te voorzien van persoonlijk advies.</p>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.fotosverfzaak}
              src="/schild4.jpg"
              alt="Foto verfwebsite"
              width={500}
              height={300}
              quality={80}
            />
          </div>
          <br/><br/><br/><br/><br/><br/><br/>
        </main>
      </div>
    </section>
  );
}
