import { signIn } from "next-auth/react";
import React from "react";

const LoginForm = ({ styles, handleSubmit, error }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        className={styles.input}
        required
      />
      <input
        type="password"
        placeholder="password"
        className={styles.input}
        required
      />
      {error && <p style={{ textAlign: "center" }}>{error}</p>}
      <button className={styles.btn}>Login</button>
      <button
        type="button"
        onClick={() => signIn("google")}
        className={styles.btn + " " + styles.google}
      >
        Login with Google
      </button>
    </form>
  );
};

export default LoginForm;
