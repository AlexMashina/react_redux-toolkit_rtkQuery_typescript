import React, { FC } from "react";
import { Container } from "../container/Container";
import { SectionTitle } from "../sectionTitle/SectionTitle";

import styles from "./SectionQuery.module.scss";

export const SectionQuery: FC = () => {
  return (
    <section className={styles.query}>
      <Container>
        <SectionTitle>
          Comments &amp;&amp;&nbsp;todos &amp;&amp;&nbsp;photos
        </SectionTitle>
      </Container>
    </section>
  );
};
