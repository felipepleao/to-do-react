import { FormEvent, useState } from "react";
import Plus from "../assets/plus.svg";
import styles from "./AddTask.module.css";

export function AddTask({ getTextTask }) {
  const [newText, setNewText] = useState("");

  function handleNewTextChange(event: FormEvent) {
    setNewText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    getTextTask(newText);
    setNewText("");
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input
        type="text"
        value={newText}
        name="text"
        onChange={handleNewTextChange}
        placeholder="Adicione uma nova tarefa"
      />

      <button>
        Criar
        <img src={Plus} />
      </button>
    </form>
  );
}
