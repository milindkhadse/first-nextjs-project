import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import HomeLink from "../../components/shared/HomeLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import { getProductURL } from "../../data/products-api";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPData() {
      const response = await fetch(getProductURL);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    }
    getPData();
  }, []);

  return (
    <Container>
      <Row className="mt-2 mb-2">
        <Col sm={12}>
          <Breadcrumb>
            <HomeLink />
            <Breadcrumb.Item active>Products</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="mt-5 mb-5 align-items-center">
        {loading ? (
          <h1
            style={{
              marginTop: "100px",
              textAlign: "center",
              fontSize: "72px",
            }}
          >
            Loading...
          </h1>
        ) : (
          products.map((item) => {
            return (
              <Col sm={4} key={item.id} className="product__list">
                <Link href="">
                  <a>
                    <Card>
                      <Image src={item.image} width={640} height={480} />
                      <Card.Body>
                        <h2 className="h4">{item.name}</h2>
                        <h5 className="primaryBlack">{item.price}</h5>
                        <Card.Text className="color__primary">
                          {item.info}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Link>
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default Products;

// export async function getStaticProps(){
//   return{
//     props: {
//       productdata:
//     }
//   }
// }
