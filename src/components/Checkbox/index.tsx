import { useState } from "react";
import styles from "./styles.module.css";
import { Check } from "@phosphor-icons/react";

interface CheckboxProps {
  isChecked?: boolean;
}

export function Checkbox({ isChecked = false }: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  function handleCheckboxClick() {
    setChecked((state) => !state);
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
