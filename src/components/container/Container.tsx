import React, { FC, ReactElement, ReactNode } from "react";

import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactElement | ReactNode | undefined;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
