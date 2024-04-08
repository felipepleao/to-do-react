import Plus from "../assets/plus.svg";
import styles from "./AddTask.module.css"

export function AddTask() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>

      <button>
        Criar
        <img src={Plus} />
      </button>
    </form>
  );
}
  