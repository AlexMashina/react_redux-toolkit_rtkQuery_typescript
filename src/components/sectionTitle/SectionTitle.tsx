import React, { FC } from "react";

import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  children: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
};
