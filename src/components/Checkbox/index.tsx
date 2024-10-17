import { useState } from "react";
import styles from "./styles.module.css";
import { Check } from "@phosphor-icons/react";

interface CheckboxProps {
  id: string;
  isChecked?: boolean;
  completeTask: (id: string) => void;
}

export function Checkbox({
  id,
  isChecked = false,
  completeTask,
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  function handleCheckboxClick() {
    setChecked((state) => !state);
    completeTask(id);
  }

  if (checked) {
    return (
      <button
        type="button"
        className={styles.checked}
        onClick={handleCheckboxClick}
      >
        <Check size={16} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={styles.notChecked}
      onClick={handleCheckboxClick}
    >
      {}
    </button>
  );
}
