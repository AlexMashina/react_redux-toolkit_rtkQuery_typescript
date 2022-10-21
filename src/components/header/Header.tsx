import React, { FC } from "react";
import { Triangle } from "../triangle/Triangle";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__decor}>
          <Triangle type={"tl"} />
          <Triangle type={"bl"} />
        </div>
        <div>
          <h1 className={styles.header__title}>Stack Of Technologies</h1>
          <div className={styles["header__list-wrapper"]}>
            <ul className={styles.header__list}>
              <li className={styles["header__list-item"]}>React</li>
              <li className={styles["header__list-item"]}>Typescript</li>
            </ul>
            <ul className={styles.header__list}>
              <li className={styles["header__list-item"]}>Redux-Saga</li>
              <li className={styles["header__list-item"]}>Redux-Query</li>
              <li className={styles["header__list-item"]}>Redux-Toolkit</li>
            </ul>
          </div>
          <p className={styles.header__text}>
            This is a simple application with API requests via redux-saga and
            redux-query
          </p>
        </div>
        <div className={styles.header__decor}>
          <Triangle type={"tr"} />
          <Triangle type={"br"} />
        </div>
      </div>
    </div>
  );
};
