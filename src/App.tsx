import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskStatus } from "./components/TaskStatus";
import { Task } from "./components/Task";
import { EmptyList } from "./components/EmptyList";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <AddTask />
          <div className={styles.taskWrapper}>
            <TaskStatus taskCondition="Tarefas criadas" taskCounter="5" />
            <TaskStatus taskCondition="Concluídas" taskCounter="5" />
          </div>

          <div className={styles.taskListWrapper}>
            <EmptyList />
            {/* <Task taskDescription="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.qweqwe" /> */}
          </div>
        </div>
      </main>
    </>
  );
}
