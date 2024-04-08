interface TaskClass {
  taskCondition: string;
  taskCounter: string;
}

import styles from "./TaskStatus.module.css";

export function TaskStatus({ taskCondition, taskCounter }: TaskClass) {
  return (
    <div className={styles.taskContainer}>
      <h3>{taskCondition}</h3>
      <p>{taskCounter}</p>
    </div>
  );
}
