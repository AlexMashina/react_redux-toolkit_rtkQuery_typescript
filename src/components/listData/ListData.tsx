import React, { FC, ReactElement, ReactNode } from "react";

import styles from "./ListData.module.scss";

interface ListDataProps {
  customClass?: string;
  children: ReactElement | ReactNode | undefined;
}

export const ListData: FC<ListDataProps> = ({ customClass, children }) => {
  return <ul className={`${styles.data} ${customClass}`}>{children}</ul>;
};
