import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Read.
          <br />
          Write.
          <br />
          Inspire.
        </h1>
        <p className={styles.text}>
          Unleash your creativity, share your experiences, and be part of a
          vibrant community that celebrates the magic of words.
        </p>
        <Link href="/blog">
          <button className={styles.btn}>Read blogs</button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Hero image" className={styles.img}></Image>
      </div>
    </div>
  );
}
