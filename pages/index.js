import styled from "../styles/Home.module.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { chartIcon } from "../components/UI/chartIcon";
import { securityIcon } from "../components/UI/securityIcon";
import { accountIcon } from "../components/UI/accountIcon";

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <Row className="mt-5 mb-5">
            <Col sm={6}>
              <h1 className={styled.h1}>
                Financial Assistance
                <br />
                With True Purpose
              </h1>
              <p className="mt-3 para__md">
                Trusting in the security of the Global leader in broker, more
                than 3 million products are waiting for you.
              </p>
              <div className="mt-5">
                {/* <Link href="/about" passHref> */}
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
                {/* </Link> */}
              </div>
            </Col>
            <Col sm={6}>
              <Image
                src="/illustration-2.png"
                alt="Financial Assistance"
                width={800}
                height={530}
                layout="responsive"
              />
            </Col>
          </Row>

          <Row className="g-4 mt-5 mb-5">
            <Col sm={4}>
              <Card className="pt-4 pb-4 pl-5 pr-5 text-center">
                <div>{chartIcon}</div>
                <Card.Body>
                  <h5>Ratio Trend Chart</h5>
                  <Card.Text className="color__primary mt-3">
                    A chart employing the Cartesian coordinate system in which
                    the points on a curve are determined by measuring time as
                    the independent variable along one axis and the logarithms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="pt-4 pb-4 pl-5 pr-5 text-center">
                <div>{securityIcon}</div>
                <Card.Body>
                  <h5>Fund Security</h5>
                  <Card.Text className="color__primary mt-3">
                    Like stocks, mutual funds are considered equity securities
                    because investors purchase shares that correlate to an
                    ownership stake in the fund as a whole.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="pt-4 pb-4 pl-5 pr-5 text-center">
                <div>{accountIcon}</div>
                <Card.Body>
                  <h5>Individual Accounts</h5>
                  <Card.Text className="color__primary mt-3">
                    An individual account contrasts with a <br />
                    joint account and a partnership account, <br />
                    both of which may have more than one account holder.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
