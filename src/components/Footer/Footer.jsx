import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <h4>
        Created by{" "}
        <Link href="https://www.google.com/" style={{ color: "#318ce7" }}>
          Satyam Singh
        </Link>{" "}
        ©
      </h4>
    </div>
  );
};

export default Footer;
