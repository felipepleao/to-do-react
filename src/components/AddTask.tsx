import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";
import Plus from "../assets/plus.svg";
import styles from "./AddTask.module.css";

interface GetTask {
  getTextTask: (text: string) => void;
}

export function AddTask({ getTextTask }: GetTask) {
  const [newText, setNewText] = useState("");

  function handleNewTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewText(event.target.value);
  }

  function handleNewTaksIvalid(event: InvalidEvent<HTMLInputElement>) {
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
