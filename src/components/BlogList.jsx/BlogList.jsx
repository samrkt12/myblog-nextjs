import React from "react";
import Link from "next/link";
import Image from "next/image";
const BlogList = ({ styles, data }) => {
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item._id}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt="blog-image"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
