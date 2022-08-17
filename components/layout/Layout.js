import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import LoginModal from "../UI/modal";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          NextTurn - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis, odit.
        </title>
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="description"
          content="Trusting in the security of the Global leader in broker, more than 3 million products are waiting for you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LoginModal />
      <main style={{ flex: "1" }}>
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
