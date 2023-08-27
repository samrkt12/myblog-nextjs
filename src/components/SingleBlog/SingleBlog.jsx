import React from "react";
import Avatar from "public/avatar.png";
import Image from "next/image";
import { formatDistanceToNowStrict } from "date-fns";
const SingleBlog = ({ data, styles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
          <div className={styles.author}>
            <Image
              src={Avatar}
              alt={`user-image-${data.username}`}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
            <span className={styles.datetime}>
              {`${formatDistanceToNowStrict(new Date(data.createdAt))} ago`}
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.image}
            alt={`blog-image-${data._id}`}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
