import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Home } from "../components/Home";
import { Navigation } from "../components/Navigation";

const Page: NextPage = () => {
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
      <Home />
      <About />
      <Experience />
    </>
  );
};

export default Page;
