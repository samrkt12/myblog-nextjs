import React from "react";
import styles from "./blogPost.module.css";
import { notFound } from "next/navigation";
import SingleBlog from "@/components/SingleBlog/SingleBlog";

async function getData(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.blogId);
  return {
    title: data.title,
    description: data?.description,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.blogId);
  return <SingleBlog styles={styles} data={data} />;
};

export default BlogPost;
