import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <AddTask />
        </div>
      </main>
    </>
  );
}
