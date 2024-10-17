import styles from "./styles.module.css";

interface TaskInfoProps {
  completed: number;
  total: number;
}

export function TaskInfo({ completed, total }: TaskInfoProps) {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <p>Tarefas criadas</p>
        <span>{total}</span>
      </div>

      <div className={styles.completed}>
        <p>Concluídas</p>
        <span>
          {completed} de {total}
        </span>
      </div>
    </div>
  );
}
