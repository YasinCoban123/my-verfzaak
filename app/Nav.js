import Link from "next/link";
import styles from './page.module.css';


export default function Nav() {
  return (
    <nav className={styles.navbar}>
       <img src="/verfzaakLogo.png" alt="Your Picture" className={styles.picture} />
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <Link href="/page" className={styles.navlink}>
            Homepagina
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/over" className={styles.navlink}>
            Over ons
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/contact" className={styles.navlink}>
            Contact
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/blog" className={styles.navlink}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
