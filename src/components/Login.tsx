import { signIn } from "next-auth/client";
import styles from "../styles/components/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginform}>
        <img src="/logo-full.svg" alt="" />
        <p>
          Não quer um Internal Server Error? <br />
          move.IT te ajuda a cuidar da sua saúde,
          <br /> e assim todos codamos felizes!
        </p>
        <a onClick={(): Promise<void> => signIn("github")}>
          Entrar com Github
          <img src="/icons/github.svg" alt="Github Logo" />
        </a>
      </div>
    </div>
  );
}
