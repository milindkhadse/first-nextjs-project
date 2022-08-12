import React from "react";
import { baseURL } from "../constant/Constant";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";

const HomeLink = () => {
  return (
    <>
      <Link href={baseURL} passHref>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Link>
    </>
  );
};

export default HomeLink;
