import React from "react";
import styles from "./blog.module.css";
import BlogList from "@/components/BlogList.jsx/BlogList";

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data;
}

const Blog = async () => {
  const data = await getData();
  return <BlogList styles={styles} data={data} />;
};

export default Blog;
