import { FormEvent, useState } from "react";
import Plus from "../assets/plus.svg";
import styles from "./AddTask.module.css";

export function AddTask({ getTextTask }) {
  const [newText, setNewText] = useState("");

  function handleNewTextChange(event: FormEvent) {
    event.target.setCustomValidity("");
    setNewText(event.target.value);
  }

  function handleNewTaksIvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório");
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
        onInvalid={handleNewTaksIvalid}
        placeholder="Adicione uma nova tarefa"
        required
      />

      <button>
        Criar
        <img src={Plus} />
      </button>
    </form>
  );
}
