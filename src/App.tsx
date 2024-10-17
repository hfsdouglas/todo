import { type ChangeEvent, type FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

import "./styles/globals.css";
import styles from "./app.module.css";

import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "./components/Header";
import { TaskInfo } from "./components/TaskInfo";
import { Task } from "./components/Task";

interface TaskType {
  id: string;
  description: string;
  isCompleted: true | false;
}

export function App() {
  const [description, setDescription] = useState<string>("");
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleNewDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function deleteTask(id: string) {
    setTasks((state) => state.filter((task) => task.id !== id));
  }

  function completeTask(id: string) {
    setTasks((state) => {
      return state.map((task) => {
        if (task.id === id) {
          return task.isCompleted
            ? { ...task, isCompleted: false }
            : { ...task, isCompleted: true };
        }

        return task;
      });
    });
  }

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (description.length === 0) {
      return alert("Digite a descrição da tarefa para criar!");
    }

    const newTask = {
      id: uuid(),
      description,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTask]);
    setDescription("");
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.reduce((total, current) => {
    if (current.isCompleted) {
      return total + 1;
    }

    return total;
  }, 0);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleAddTask}>
          <input
            type="text"
            name="description"
            className={styles.input}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewDescriptionChange}
            value={description}
          />

          <button type="submit" className={styles.button}>
            Criar
            <PlusCircle size={22} />
          </button>
        </form>

        <TaskInfo total={totalTasks} completed={completedTasks} />

        <div className={styles.taskContainer}>
          <ul>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
