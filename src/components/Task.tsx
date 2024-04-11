import styles from "./Task.module.css";
import Trash from "../assets/trash.svg";
import { useState } from "react";

interface TaskProps {
  taskDescription: string;
}

export function Task({ taskDescription, isChecked  }: TaskProps) {
  const [taskChecked, setTaskChecked] = useState(false);

  function checkedTask() {
    const checked = event.target.checked;
   
    setTaskChecked(checked)
    isChecked(checked)
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

      <button>
        <img src={Trash} alt="" />
      </button>
    </div>
  );
}
