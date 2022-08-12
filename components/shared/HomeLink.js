import React from "react";
import { baseURL } from "../constant/Constant";
import Link from "next/link";

const HomeLink = () => {
  return (
    <>
      <li className="breadcrumb-item">
        <Link href={baseURL}>
          <a>Home</a>
        </Link>
      </li>
    </>
  );
};

export default HomeLink;
