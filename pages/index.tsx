import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tiger Abrodis Personal Portfolio</title>
        <meta
          name="description"
          content="More about Tiger Abrodi. His experience, about him, getting in touch with him and some of his work."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
    </>
  );
};

export default Home;
