import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import HomeLink from "../components/shared/HomeLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <Row className="mt-2 mb-2">
        <Col sm={12}>
          <Breadcrumb>
            <HomeLink />
            <Breadcrumb.Item active>About</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="g-5 mt-5 mb-5 align-items-center">
        <Col sm={6}>
          <Image
            src="/about.svg"
            alt="About"
            width={500}
            height={542}
            layout="responsive"
          />
        </Col>
        <Col sm={6}>
          <h1>We Care About Your Life’s Important Things</h1>
          <p className="para__md mt-4">
            Exercitation llamco laboris nis aliquip sed conseqrure dolorn repreh
            deris voluptate velit excepteur duis aute irure dolor voluptate
            voluptatem accusa ntium dolor lemq laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis ent quas sed ipsum dui
            architecto beatae.
          </p>
        </Col>
      </Row>

      <Row className="mt-5 mb-5">
        <Col sm={12}>
          <p className="color__primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            voluptas nisi corporis sunt accusamus minima ut. Quasi inventore
            dignissimos delectus deleniti sequi, mollitia illo molestiae
            distinctio nihil assumenda sint pariatur, dolor esse. Tempora
            excepturi vel exercitationem ducimus voluptate alias iure accusamus
            amet quis facilis. Sequi, fugit eos cum quod repudiandae alias
            aspernatur vero? Facere vitae fuga, incidunt aliquid numquam
            necessitatibus laborum quia inventore magni, at natus voluptas in
            deserunt commodi adipisci beatae ipsa repellendus, praesentium
            labore accusantium delectus. Quos odit voluptate aliquam sapiente,
            repudiandae reiciendis quas id nam! Aliquam, facilis voluptates
            incidunt ipsum quod voluptate amet exercitationem dolorem voluptas
            soluta voluptatibus cumque quis.
          </p>

          <p className="color__primary">
            Culpa dignissimos, harum dolores fugiat at mollitia dolorem ipsa
            facilis ullam laudantium molestiae inventore excepturi alias porro
            unde omnis vitae, placeat accusamus velit atque? Reiciendis in,
            excepturi ullam ipsam nostrum nisi hic pariatur magnam consequuntur
            unde quasi nobis fugit maxime veniam exercitationem consectetur rem
            porro quas nihil est? Quam, aut eveniet? Soluta exercitationem
            corporis, quia itaque a, officiis voluptatem minus voluptates autem
            quae totam, asperiores similique doloremque est magnam harum
            consequatur facere neque veritatis laudantium nulla earum!
            Temporibus officia assumenda omnis aspernatur quae explicabo esse
            perspiciatis! Nisi distinctio minima maxime iure minus autem, magni
            ex aperiam placeat veniam tempora earum ullam suscipit beatae
            accusantium blanditiis est, quasi eaque facilis quibusdam
            perspiciatis consequatur odit delectus? Esse unde labore, magnam
            ducimus sapiente corporis aliquid aut impedit minima libero
            accusantium corrupti recusandae temporibus cum similique quo, rerum
            veniam suscipit voluptas ex molestiae.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
