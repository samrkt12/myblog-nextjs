"use client";
import Link from "next/link";
import React from "react";
import styles from "./navabar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        MyBlog
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/dashboard" className={styles.link}>
          Dashboard
        </Link>
        {session.status === "authenticated" && (
          <button
            className={styles.btn}
            onClick={() => {
              toast.success("Logged out");
              signOut();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
