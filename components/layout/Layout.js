import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextTurn - Made in ReactJs & NextJs</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="description"
          content="Trusting in the security of the Global leader in broker, more than 3 million products are waiting for you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ flex: "1" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
