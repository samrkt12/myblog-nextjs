import React from "react";
import styles from "./blog.module.css";
// import BlogList from "@/components/BlogList.jsx/BlogList";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error;
  }
}

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      {data &&
        data.map((item) => (
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
  // return <BlogList styles={styles} data={data} />;
};

export default Blog;
