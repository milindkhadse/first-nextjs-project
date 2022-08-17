import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import { chartIcon } from "../components/UI/chartIcon";
import { securityIcon } from "../components/UI/securityIcon";
import { accountIcon } from "../components/UI/accountIcon";
import styled from "../styles/Home.module.css";

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

          <Row className="g-4 mt-5 mb-5 align-items-center">
            <Col sm={4}>
              <h2 className="h1">
                Becoming No <strong>#1</strong> For Investment Needs
              </h2>
              <p className="para__md mt-3">
                Many people aspire to be writers. There is a certain romance to
                it, after all. However, many of these people don’t actually
                write, which can be a real problem. It takes a lot of hours to
                get proficient in anything, and writing is no exception. The
                majority of people can write to a reasonable level, but it takes
                time and effort to get good.{" "}
              </p>
            </Col>
            <Col sm={8}>
              <Image
                src="/savings_re_eq4w.svg"
                alt="Financial Assistance"
                width={800}
                height={400}
                layout="responsive"
              />
            </Col>
          </Row>

          <Row className="g-4 mt-5 mb-5">
            <Col sm={12} className="text-center">
              <h2 className="h1">Ways to grow your wealth</h2>
            </Col>
            <Col sm={12}>
              <Tabs
                defaultActiveKey="stocks"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="stocks" title="Stocks">
                  <Row className="pt-5 pb-5 align-items-center">
                    <Col sm={6}>
                      <Image
                        src="/stocks.svg"
                        alt="Financial Assistance"
                        width={800}
                        height={400}
                        layout="responsive"
                      />
                    </Col>
                    <Col sm={6}>
                      <h3 className="mb-4">Stocks</h3>
                      <ul>
                        <li className="para__md mb-3">
                          Discover stocks with smart lists and smart filters
                        </li>
                        <li className="para__md mb-3">
                          Access key company information
                        </li>
                        <li className="para__md">
                          Buy and sell stocks in a single click
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="ipo" title="IPO">
                  <Row className="pt-5 pb-5 align-items-center">
                    <Col sm={6}>
                      <Image
                        src="/ipo.svg"
                        alt="IPO"
                        width={800}
                        height={400}
                        layout="responsive"
                      />
                    </Col>
                    <Col sm={6}>
                      <h3 className="mb-4">IPO</h3>
                      <ul>
                        <li className="para__md mb-3">
                          An initial public offering (IPO) refers
                        </li>
                        <li className="para__md mb-3">
                          IPOs provide companies with an opportunity to obtain
                        </li>
                        <li className="para__md">
                          Companies hire investment banks to market, gauge
                          demand
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="mutualfund" title="Mutual Fund">
                  <Row className="pt-5 pb-5 align-items-center">
                    <Col sm={6}>
                      <Image
                        src="/fund.svg"
                        alt="Mutual Fund"
                        width={800}
                        height={400}
                        layout="responsive"
                      />
                    </Col>
                    <Col sm={6}>
                      <h3 className="mb-4">Mutual Fund</h3>
                      <ul>
                        <li className="para__md mb-3">
                          New fund Offerings lets you purchase units of any new
                          fund
                        </li>
                        <li className="para__md mb-3">
                          First Subcription offering by a new or existing AMC
                        </li>
                        <li className="para__md">
                          Comparable to IPO for companies. Profitable if
                          anlayzed carefully
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>

          <Row className="g-4 mt-5 mb-5">
            <Col sm={12} className="text-center">
              <h2 className="h1">For you. And everyone.</h2>
              <p className="para__md">
                Make informed investment decisions across equity, commodity, and
                currency segments with our specific event-based daily, weekly,
                and monthly reports.
              </p>
            </Col>
            <Col sm={4}>
              <Image
                src="/photo-1.jpg"
                alt="Photo 1"
                width={640}
                height={1139}
                layout="fill"
                objectFit="cover"
                className="curved__img"
              />
            </Col>
            <Col sm={4}>
              <Image
                src="/photo-2.jpg"
                alt="Photo 2"
                width={640}
                height={1139}
                layout="fill"
                objectFit="cover"
                className="curved__img"
              />
            </Col>
            <Col sm={4}>
              <Image
                src="/photo-3.jpg"
                alt="Photo 3"
                width={640}
                height={1139}
                layout="fill"
                objectFit="cover"
                className="curved__img"
              />
            </Col>
            <Col sm={12} className="text-center">
              <Button variant="outline-primary">Start Investing</Button>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
