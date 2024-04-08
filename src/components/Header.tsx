import todoLogo from "../assets/todo-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <h1 className={styles.header}>
      <img src={todoLogo} alt="Logo da aplicação todo" />
    </h1>
  );
}
