import { Trash } from "@phosphor-icons/react";
import { Checkbox } from "../Checkbox";
import styles from "./styles.module.css";

interface TaskProps {
  id: string;
  description: string;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Task({ id, description, completeTask, deleteTask }: TaskProps) {
  function handleDeleteTask() {
    deleteTask(id);
  }

  return (
    <li className={styles.task}>
      <div>
        <Checkbox id={id} completeTask={completeTask} />

        <p className={styles.description}>{description}</p>
      </div>

      <button
        type="button"
        className={styles.delete}
        onClick={handleDeleteTask}
      >
        <Trash size={22} />
      </button>
    </li>
  );
}
