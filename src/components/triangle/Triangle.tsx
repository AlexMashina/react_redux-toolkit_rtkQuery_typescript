import React, { FC } from "react";

import styles from "./Triangle.module.scss";

interface TriangleProps {
  type: string;
}

export const Triangle: FC<TriangleProps> = ({ type }) => {
  return (
    <div className={`${styles.triangle} ${styles[`triangle_${type}`]}`}></div>
  );
};
