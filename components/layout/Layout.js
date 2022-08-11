import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { Container, Row, Col } from "../react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          Dummy Title - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis, odit.
        </title>
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam rem nostrum obcaecati quia assumenda animi consequuntur illum, in ut asperiores. Laudantium laboriosam porro omnis eius aut dolorem autem sequi!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
