import React from "react";
import styles from "./blog.module.css";
import BlogList from "@/components/BlogList.jsx/BlogList";

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
    throw error;
  }
}

const Blog = async () => {
  const data = await getData();
  return <BlogList styles={styles} data={data} />;
};

export default Blog;
