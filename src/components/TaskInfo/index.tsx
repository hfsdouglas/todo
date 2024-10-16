import styles from "./styles.module.css";

export function TaskInfo() {
  return (
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
  );
}
