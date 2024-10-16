import "./styles/globals.css";
import styles from "./app.module.css";

import { PlusCircle, Trash } from "@phosphor-icons/react";

import { Header } from "./components/Header";
import { Checkbox } from "./components/Checkbox";

export function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Adicione uma nova tarefa"
          />

          <button type="submit" className={styles.button}>
            Criar
            <PlusCircle size={22} />
          </button>
        </form>

        <div className={styles.info}>
          <div className={styles.created}>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>

          <div className={styles.completed}>
            <p>Concluídas</p>
            <span>2 de 5</span>
          </div>
        </div>

        <div className={styles.taskContainer}>
          <ul>
            <li className={styles.task}>
              <div>
                <Checkbox isChecked />
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  quod quam tempora mollitia facilis laudantium assumenda sed
                  omnis, culpa inventore fugiat saepe aut, vel praesentium in
                  laboriosam ipsa hic. Iusto.
                </p>
              </div>
              <button type="button" className={styles.delete}>
                <Trash size={22} />
              </button>
            </li>
            <li className={styles.task}>
              <div>
                <Checkbox isChecked />
                <p className={styles.description}>Tarefa 2</p>
              </div>
              <button type="button" className={styles.delete}>
                <Trash size={22} />
              </button>
            </li>
            <li className={styles.task}>
              <div>
                <Checkbox />
                <p className={styles.description}>Tarefa 3</p>
              </div>
              <button type="button" className={styles.delete}>
                <Trash size={22} />
              </button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
