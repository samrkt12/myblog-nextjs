"use client";
import Link from "next/link";
import React from "react";
import styles from "./navabar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        MyBlog
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={pathname === "/" ? `${styles.active}` : ""}>
          Home
        </Link>
        <Link
          href="/blog"
          className={pathname === "/blog" ? `${styles.active}` : ""}
        >
          Blog
        </Link>
        <Link
          href="/dashboard"
          className={pathname === "/dashboard" ? `${styles.active}` : ""}
        >
          Dashboard
        </Link>
        {session.status === "authenticated" && (
          <button
            className={styles.btn}
            onClick={() => {
              signOut();
              toast.success("Logged out");
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
