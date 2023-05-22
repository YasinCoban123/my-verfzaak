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
            Welcome to Verfxpert
            </h1>
          <p>Welkom op de website van Verfxpert. Wij zijn trots om een breed scala aan services aan te bieden, 
            zodat u precies kunt krijgen wat u zoekt. Of u nu op zoek bent naar professioneel schilderwerk, 
            decoratieve afwerkingen of kleuradvies, wij staan klaar om u te helpen uw visie tot leven te brengen.</p>
          <Image
          className={styles.fotosverfzaak}
          src="/schild1.jpg"
          alt="Foto verfwebsite"
          width={100}
          height={100}
        />
          <p>Op onze website vindt u gedetailleerde informatie over onze vestiging, 
            inclusief het adres en een interactieve kaart voor eenvoudige navigatie. 
            Daarnaast kunt u onze openingstijden raadplegen, zodat u weet wanneer u ons kunt bezoeken.</p>
          <Image
          className={styles.fotosverfzaak}
          src="/schild2.jpg"
          alt="Foto verfwebsite"
          width={100}
          height={100}
        />
          <p>Bij Verfxpert streven we ernaar om hoogwaardige service en vakmanschap te leveren.
            Ons team van ervaren schilders en decorateurs zet zich in om uw verwachtingen te overtreffen. 
            We luisteren naar uw wensen en werken nauw met u samen om het gewenste resultaat te bereiken.</p>
          <Image
          className={styles.fotosverfzaak}
          src="/schild3.jpg"
          alt="Foto verfwebsite"
          width={100}
          height={100}
        />
          <p>Heeft u vragen, wilt u een afspraak maken of wilt u meer informatie over onze diensten? Neem gerust contact met ons op.
             Onze vriendelijke en deskundige medewerkers staan klaar om uw vragen te beantwoorden en u te voorzien van persoonlijk advies.</p>
          <Image
          className={styles.fotosverfzaak}
          src="/schild4.jpg"
          alt="Foto verfwebsite"
          width={100}
          height={100}
        />
        <br/><br/><br/><br/><br/><br/><br/>
        </main>
      </div>
    </section>
  );
}
