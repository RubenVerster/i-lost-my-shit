import type { NextPage } from "next";
import Head from "next/head";

import Info from "../components/Info";
import List from "../components/List";
import Footer from "../components/Footer";

import { useStoreActions, useStoreState } from "../store";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const adminPage = useStoreState((state) => state.adminPage);
  const setAdminPage = useStoreActions((actions) => actions.setAdminPage);
  const [localState, setLocalState] = useState(adminPage);

  useEffect(() => {
    setLocalState(!adminPage);
  }, [adminPage, setAdminPage]);

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
        <h1>I Lost My 💩!</h1>
        <div>
          <>
            <Info />
            <List />
          </>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
