import "./global.css";
import styles from "./App.module.css";
import { useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskStatus } from "./components/TaskStatus";
import { Task } from "./components/Task";
import { EmptyList } from "./components/EmptyList";

export function App() {
  // const [taskText, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskComplete, setTaskComplete] = useState(0);

  function getTextTask(text) {
    setTasks([...tasks, text]);
  }

  function isChecked(check) {
    const isChecked = check;

    setTaskComplete(() => {
      return isChecked ? taskComplete + 1 : taskComplete - 1;
    });
  }

  const haveList = tasks.length > 0;
  const taskQuantity = tasks.length;

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <AddTask getTextTask={getTextTask} />
          <div className={styles.taskWrapper}>
            <TaskStatus
              taskCondition="Tarefas criadas"
              taskCounter={taskQuantity}
              status="progresso"
            />
            <TaskStatus
              taskCondition="Concluídas"
              taskComplete={taskComplete}
              taskCounter={taskQuantity}
              status="concluido"
            />
          </div>

          <div className={styles.taskListWrapper}>
            {haveList ? (
              tasks.map((task, index) => {
                return (
                  <Task
                    key={index}
                    taskDescription={task}
                    isChecked={isChecked}
                    taskComplete={taskComplete}
                  />
                );
              })
            ) : (
              <EmptyList />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
