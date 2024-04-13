import styles from "./Task.module.css";
import Trash from "../assets/trash.svg";
import { FormEvent, useState } from "react";

interface TaskProps {
  taskDescription: string;
  isChecked: (isChecked: boolean) => void
  deleteTask: (taskToDelete: string, checked: boolean) => void
}

export function Task({ taskDescription, isChecked, deleteTask  }: TaskProps) {
  const [taskChecked, setTaskChecked] = useState(false);

  function checkedTask(event: FormEvent<HTMLInputElement>) {
    const checked = (event.target as HTMLInputElement).checked;
   
    setTaskChecked(checked)
    isChecked(checked)
  }

  function handleDeleteTask() {
    deleteTask(taskDescription, taskChecked)
  }

  return (
    <div
      className={`${styles.taskContainer} ${
        taskChecked ? styles.complete : null
      }`}
    >
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={checkedTask}
      />

      <p>{taskDescription}</p>

      <button onClick={handleDeleteTask}>
        <img src={Trash} alt="" />
      </button>
    </div>
  );
}
