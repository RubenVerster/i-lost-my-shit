import type { NextPage } from "next";
import Head from "next/head";

import Info from "../components/Info";
import List from "../components/List";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>I Lost It!</title>
        <meta
          name="description"
          content="The amount of times I lost it looking at 💩 code :P"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="base">
        <h1 className="base_title">I Lost My 💩!</h1>
        <h2 className="base_subtitle">
          Bad code made me lose it a couple of times...
        </h2>
        <div className="base_content">
          <Info />
          <List />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
