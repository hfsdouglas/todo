import styles from "./styles.module.css";

import clipboard from "../../assets/clipboard.svg";

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} className={styles.img} alt="" />

      <div>
        <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.subtitle}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
}
