interface TaskClass {
  taskCondition: string;
  taskCounter: string;
}

import styles from "./TaskStatus.module.css";

export function TaskStatus({ taskCondition, taskCounter, taskComplete, status }: TaskClass) {
  return (
    <>
      {status === "progresso" ? (
        <div className={styles.taskContainer}>
          <h3>{taskCondition}</h3>
          <p>{taskCounter}</p>
        </div>
      ) : (
        <div className={`${styles.taskContainer} ${styles.completed}`}>
          <h3>{taskCondition}</h3>
          <p>{taskComplete} de {taskCounter}</p>
        </div>
      )}
    </>
  );
}
