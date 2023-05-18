import Link from 'next/link';
import styles from './page.module.css';
import Nav from './Nav';

const LocationPage = () => {
  return (
    <div>
      <Nav />
      <div className={styles['location-container']}>
        <h1 className={styles['location-heading']}>Locatie pagina</h1>
        <p className={styles['location-info']}>Welkom naar ons locatie pagina. hier kunt u vinden waar ons vestiging is.</p>
        <p className={styles['location-info']}>Address:  Pendrechtstraat 100-Rotterdam</p>
        <p className={styles['location-info']}>Contact: 06-37157527</p>
      </div>
    </div>
  );
};

export default locatie;
