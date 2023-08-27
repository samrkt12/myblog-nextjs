"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./dashboard.module.css";
import Hero from "public/hero.png";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
import NewBlogForm from "@/components/NewBlogForm/NewBlogForm";
import UserBlogs from "@/components/UserBlogs/UserBlogs";
const Dashboard = () => {
  const session = useSession();
  const [invalidImg, setInvalidImg] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") router?.push("/dashboard/login");
  }, [session, router]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/blogs?username=${session?.data?.user.name}`,
    fetcher
  );

  function isValidURL(str) {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    if (!isValidURL(image)) {
      setInvalidImg(true);
      return;
    }
    setInvalidImg(false);
    const enteredData = JSON.stringify({
      title,
      description,
      image,
      content,
      username: session.data.user.name,
    });
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: enteredData,
      });
      if (res.status === 201) toast.success("Blog posted");
      else throw new Error("Error");
      mutate();
      e.target.reset();
    } catch (err) {
      toast.error("Error posting blog");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) toast.success("Blog deleted");
      else throw new Error();
      mutate();
    } catch (err) {
      toast.error("Error deleting blog");
    }
  };

  if (session.status === "loading") return <p>Loading...</p>;

  if (session.status === "authenticated")
    return (
      <div className={styles.container}>
        <UserBlogs styles={styles} data={data} handleDelete={handleDelete} />
        <NewBlogForm
          styles={styles}
          handleSubmit={handleSubmit}
          invalidImg={invalidImg}
        />
      </div>
    );
};

export default Dashboard;
