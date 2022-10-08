import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby"

import Home from "./Home";
import Layout from "../components/layout"


export default function Home1() {
  return (
    <>
    <Helmet>
        {/* <script src={withPrefix("assets/js/jquery.min.js")} type="text/javascript" /> */}
    </Helmet>

      <Home />
    </>
  )
}

export const Head = () => (
  <>
    <title>99 Generations | By robots, for humans.™</title>
    <link href="../styles/solid.min.css" rel="shortcut icon" type="image/x-icon" />
  </>
)