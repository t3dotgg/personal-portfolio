import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import { Footer } from "../sections/Footer";
import { Home } from "../sections/Home";
import { Navigation } from "../sections/Navigation";
import { Work } from "../sections/Work";

const title = "Tiger Abrodi's Portfolio";
const description =
  "About Tiger Abrodi, his experience, his work and how to contact him.";

const Page: NextPage = () => {
  const mainRef = React.useRef<null | HTMLElement>(null);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TAbrodi" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Navigation mainRef={mainRef} />
      <main id="main" ref={mainRef} tabIndex={-1}>
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
