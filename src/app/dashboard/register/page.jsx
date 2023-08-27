"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 201) {
        toast.success("Account created");
        router.push("/dashboard/login?success=Account has been created");
      } else throw new Error("Error creating account!");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <RegisterForm styles={styles} handleSubmit={handleSubmit} error={error} />
      <span className={styles.or}>- OR -</span>
      <Link href="/dashboard/login" className={styles.link}>
        Already a user? Login
      </Link>
    </div>
  );
};

export default Register;
