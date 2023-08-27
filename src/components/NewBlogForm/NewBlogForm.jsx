import React from "react";

const NewBlogForm = ({ styles, handleSubmit, invalidImg }) => {
  return (
    <form className={styles.new} onSubmit={handleSubmit}>
      <h3 style={{ textAlign: "center", marginBottom: "5px" }}>
        Add a new blog
      </h3>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Description"
        className={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Image link"
        className={styles.input}
        required
      />
      {invalidImg && (
        <p style={{ color: "#D2122E" }}>Please provide valid image link</p>
      )}
      <textarea
        placeholder="Content"
        className={styles.textArea}
        cols="30"
        rows="10"
        required
      ></textarea>
      <button className={styles.button}>Post</button>
    </form>
  );
};

export default NewBlogForm;
