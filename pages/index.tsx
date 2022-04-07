import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>I Lost It!</title>
        <meta
          name="description"
          content="The amount of times I lost it looking at 💩 code :P"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>I Lost My 💩</h1>

        <p className={styles.description}>
          This is the amount of times I lost it while I was looking at bad code
        </p>

        <div className={styles.grid}>42</div>
      </main>

      <footer className={styles.footer}>&copy; Ruben Verster 2022</footer>
    </div>
  );
};

export default Home;
