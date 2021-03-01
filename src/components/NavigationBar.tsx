import Link from "next/link";

import styles from "../styles/components/NavigationBar.module.css";

export function NavigationBar() {
  return (
    <div className={styles.navigationBarContainer}>
      <Link href="/">
        <img src="/logo.svg" alt="Next Focus Logo" />
      </Link>

      <ul className={styles.navigation}>
        <Link href="/">
          <li>
            <img src="/home.svg" alt="Home" />
          </li>
        </Link>
        <Link href="/scoreboard">
          <li>
            <img src="/award.svg" alt="Scoreboard"></img>
          </li>
        </Link>
      </ul>
    </div>
  );
}
