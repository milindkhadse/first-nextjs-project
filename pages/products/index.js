import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import HomeLink from "../../components/shared/HomeLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
// using clientside data fatching
// import { getProductURL } from "../../data/products-api";

import fs from "fs";
import path from "path";

const Products = (props) => {
  const { products } = props;
  // using clientside data fatching
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function getPData() {
  //     const response = await fetch(getProductURL);
  //     const products = await response.json();
  //     setProducts(products);
  //     setLoading(false);
  //   }
  //   getPData();
  // }, []);

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

      <Row className="mt-5 mb-5">
        {products.map((item) => {
          return (
            <Col sm={6} key={item.id} className="product__list mb-4">
              <Link href={`/products/${item.id}`}>
                <a>
                  <Card>
                    {/* <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    /> */}

                    <Image
                      src={item.image}
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                    <Card.Body>
                      <h2 className="h4">{item.name}</h2>
                      <p className="text-secondary mt-3">{item.timeStamp}</p>
                      <Card.Text className="color__primary mt-4">
                        {item.info}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>

      {/* client side data fatching with useEffect */}

      {/* <Row className="mt-5 mb-5">
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
              <Col sm={6} key={item.id} className="product__list mb-4">
                <Link href="">
                  <a>
                    <Card>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                      /> 
                      <Card.Body>
                        <h2 className="h4">{item.name}</h2>
                        <h5 className="primaryBlack mt-3">{item.timeStamp}</h5>
                        <Card.Text className="color__primary mt-4">
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
      </Row>  */}
    </Container>
  );
};

export async function getStaticProps() {
  // file configuration
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default Products;
