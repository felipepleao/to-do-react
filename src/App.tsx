import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskStatus } from "./components/TaskStatus";
import { Task } from "./components/Task";
import { EmptyList } from "./components/EmptyList";
import { useState } from "react";

export function App() {
  // const [taskText, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function getTextTask(text) {
    setTasks([...tasks, text]);
  }

  const haveList = tasks.length > 0;
  const taskQuantity = tasks.length

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <AddTask getTextTask={getTextTask} />
          <div className={styles.taskWrapper}>
            <TaskStatus taskCondition="Tarefas criadas" taskCounter={taskQuantity} />
            <TaskStatus taskCondition="Concluídas" taskCounter="5" />
          </div>

          <div className={styles.taskListWrapper}>
            {haveList ? (
              tasks.map((task, index) => {
                return <Task key={index} taskDescription={task} />;
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
