import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        Created by{" "}
        <Link
          href="https://satyamsingh-portfolio.vercel.app/"
          target="_blank"
          style={{ color: "#318ce7" }}
        >
          Satyam Singh
        </Link>{" "}
        ©
      </p>
    </div>
  );
};

export default Footer;
