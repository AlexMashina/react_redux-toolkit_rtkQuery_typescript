import React, { FC } from "react";

import styles from "./SectionUnderTitle.module.scss";

interface SectionUnderTitleProps {
  children: string;
}

export const SectionUnderTitle: FC<SectionUnderTitleProps> = ({ children }) => {
  return <p className={styles.sectionUnderTitle}>{children}</p>;
};
