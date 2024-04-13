import "./global.css";
import styles from "./App.module.css";
import { useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskStatus } from "./components/TaskStatus";
import { Task } from "./components/Task";
import { EmptyList } from "./components/EmptyList";


export function App() {
  const [tasks, setTasks] = useState([]);
  const [taskComplete, setTaskComplete] = useState(0);
  const [numberOfTasks, setNumberOfTasks] = useState(0);

  function getTextTask(text: string) {
    setTasks([...tasks, text]);
    setNumberOfTasks(tasks.length + 1);
  }

  function isChecked(check: boolean) {
    const isChecked = check;

    setTaskComplete(() => {
      return isChecked ? taskComplete + 1 : taskComplete - 1;
    });
  }

  function deleteTask(taskToDelete:[], checked:boolean) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);

    setNumberOfTasks(tasks.length - 1);

    if (checked) {
      setTaskComplete((prevComplete) => prevComplete - 1);
    }
  }

  const haveList = tasks.length > 0;

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <AddTask getTextTask={getTextTask} />
          <div className={styles.taskWrapper}>
            <TaskStatus
              taskCondition="Tarefas criadas"
              taskCounter={numberOfTasks}
              status="progresso"
            />
            <TaskStatus
              taskCondition="Concluídas"
              taskComplete={taskComplete}
              taskCounter={numberOfTasks}
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
                    deleteTask={deleteTask}
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
