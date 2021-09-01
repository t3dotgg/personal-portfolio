import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Navigation } from "../components/Navigation";
import { Work } from "../components/Work";

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
      <main>
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Page;
