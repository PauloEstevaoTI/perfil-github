import logo from "../../assets/logo-git.png";
import github from "../../assets/git-text.png";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="logo github" width={58} height={58} />
      <h1 className={styles.h1}>Perfil</h1>
      <img src={github} alt="texto github" width={160} height={45} />
    </header>
  );
}
