import React from "react";
import Image from "next/image";
import Link from "next/link";

const UserBlogs = ({ styles, data, handleDelete }) => {
  return (
    <div className={styles.blogs}>
      {data &&
        data.map((item) => (
          <div className={styles.blog} key={item._id}>
            <Link href={`/blog/${item._id}`} key={item._id}>
              <div className={styles.imgContainer}>
                {
                  <Image
                    src={item.image}
                    alt={`blog-image-${item._id}`}
                    width={200}
                    height={150}
                  />
                }
              </div>
            </Link>
            <h2 className={styles.title}>{item.title}</h2>
            <span
              className={styles.delete}
              onClick={() => handleDelete(item._id)}
            >
              ❌
            </span>
          </div>
        ))}
      {!data?.length && <h1 className={styles.add}>Add a new blog</h1>}
    </div>
  );
};

export default UserBlogs;
