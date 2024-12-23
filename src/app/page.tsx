import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Apresentação</li>
        <li>Sobre</li>
        <li>Como funciona</li>
      </ul>
      <Link href="/login">
        Login
      </Link>
    </nav>
  );
}
