"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import LoginForm from "@/components/LoginForm/LoginForm";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (session.status === "authenticated") router?.push("/dashboard");
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [session, router, params]);

  if (session.status === "loading") return <p>Loading...</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signIn("credentials", { email, password });
      toast.success("Logged in");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Welcome"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>
      <LoginForm styles={styles} handleSubmit={handleSubmit} error={error} />
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
