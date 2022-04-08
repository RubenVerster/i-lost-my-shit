import type { NextPage } from "next";
import Head from "next/head";

import Info from "../components/Info";
import List from "../components/List";
import Footer from "../components/Footer";

import { useStoreState } from "../store";

const Home: NextPage = () => {
  const page = useStoreState((state) => state.page);
  console.log(page);

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

      <main>
        <h1>I Lost My 💩</h1>
        <div>
          <Info />
          <List />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
