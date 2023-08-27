import React from "react";
import Image from "next/image";
import Link from "next/link";

const UserBlogs = ({ styles, data, handleDelete }) => {
  return (
    <div className={styles.blogs}>
      {data?.length > 0 ? (
        <h3
          style={{
            textAlign: "center",
            marginBottom: "1.35rem",
            textDecoration: "underline",
          }}
        >
          Your blogs
        </h3>
      ) : (
        ""
      )}
      {data &&
        data.map((item) => (
          <div className={styles.blog} key={item._id}>
            <Link
              href={`/blog/${item._id}`}
              key={item._id}
              className={styles.blogData}
            >
              <div className={styles.imgContainer}>
                {<Image src={item.image} alt={`blog-image-${item._id}`} fill />}
              </div>
              <h2 className={styles.title}>{item.title}</h2>
            </Link>
            <span
              className={styles.delete}
              onClick={() => handleDelete(item._id)}
            >
              ❌
            </span>
          </div>
        ))}
      {!data?.length && (
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className={styles.add}>So empty</h2>
        </div>
      )}
    </div>
  );
};

export default UserBlogs;
