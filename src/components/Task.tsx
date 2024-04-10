import styles from "./Task.module.css";
import Trash from "../assets/trash.svg";

interface TaskProps {
  taskDescription: string;
}

export function Task({ taskDescription }: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <input type="checkbox" name="checkbox" id="checkbox" />

      <p>{taskDescription}</p>
      
      <button>
        <img src={Trash} alt="" />
      </button>
    </div>
  );
}
