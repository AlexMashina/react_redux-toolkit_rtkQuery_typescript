import React, { FC, useState } from "react";

import styles from "./User.module.scss";
import IUser from "../../models/userTypes";

interface UserProps {
  customClass?: string;
  user: IUser;
}

export const User: FC<UserProps> = ({ user }) => {
  const [isActive, setActive] = useState(false);

  const onAccordion = () => {
    setActive(!isActive);
  };

  return (
    <li className={styles.user}>
      <div className={styles.user__accordion}>
        <div
          className={styles["user__accordion-title"]}
          onClick={onAccordion}
          role="button"
        >
          <div>{user.name}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
          <div className={styles["user__accordion-body"]}>
            <p>
              Email:
              <a href={`mailto:${user.email}`}> {user.email}</a>
            </p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>
              Adress:{" "}
              {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            </p>
          </div>
        )}
      </div>
    </li>
  );
};
