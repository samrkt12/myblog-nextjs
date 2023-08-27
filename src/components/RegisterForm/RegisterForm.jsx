import React from "react";

const RegisterForm = ({ styles, handleSubmit, error }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        className={styles.input}
        required
      />
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
      <button className={styles.btn}>Register</button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </form>
  );
};

export default RegisterForm;
