import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import HomeLink from "../../components/shared/HomeLink";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;
  return (
    <Container>
      <Row className="mt-2 mb-2">
        <Col sm={12}>
          <Breadcrumb>
            <HomeLink />
            <Link href="/products" passHref>
              <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>{loadedProduct.name}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row className="g-5 mt-4 mb-4">
        <Col sm={6}>
          <div className="text-center">
            {/* <Image
              src={loadedProduct.image}
              alt={loadedProduct.name}
              width={1300}
              height={500}
              layout="responsive"
            /> */}

            <img
              src={loadedProduct.image}
              alt={loadedProduct.name}
              className="img-fluid curved__img"
            />
          </div>
        </Col>
        <Col sm={6}>
          <h1>{loadedProduct.name}</h1>
          <h5 className="primaryBlack mt-3">₹ {loadedProduct.price}</h5>
          <p className="para__md mt-4">{loadedProduct.info}</p>
        </Col>
      </Row>
    </Container>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  // file configuration
  const data = await getData();
  // access object data using product id
  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  // file configuration
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default ProductDetailPage;
