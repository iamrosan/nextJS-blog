import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <div>logo</div>
        <Links />
      </div>
    </>
  );
};

export default NavbarComponent;
