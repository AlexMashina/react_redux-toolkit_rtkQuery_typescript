import React, { FC } from "react";

import ITodo from "../../models/todoTypes";
import styles from "./Todo.module.scss";

interface TodoProps {
  customClass?: string;
  todo: ITodo;
}

export const Todo: FC<TodoProps> = ({ customClass, todo }) => {
  return (
    <li className={`${styles.todo} ${customClass}`}>
      <div className={styles.todo__wrapper}>
        <p>Task: {todo.title}</p>
        <p>
          Status:{" "}
          <span
            className={
              todo.completed ? styles.todo__completed : styles.todo__uncompleted
            }
          >
            {todo.completed ? "completed" : "uncompleted"}
          </span>
        </p>
      </div>
    </li>
  );
};
