import styles from "./EmptyList.module.css";
import Clipboard from "../assets/clipboard.svg"

export function EmptyList() {
  return (
    <div className={styles.emptyContainer}>
      <img src={Clipboard} />
      <h2>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </h2>
    </div>
  )
}