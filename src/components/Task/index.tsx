import { Trash } from "@phosphor-icons/react";
import { Checkbox } from "../Checkbox";
import styles from "./styles.module.css";

export function Task() {
  return (
    <li className={styles.task}>
      <div>
        <Checkbox isChecked />

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quod
          quam tempora mollitia facilis laudantium assumenda sed omnis, culpa
          inventore fugiat saepe aut, vel praesentium in laboriosam ipsa hic.
          Iusto.
        </p>
      </div>

      <button type="button" className={styles.delete}>
        <Trash size={22} />
      </button>
    </li>
  );
}
