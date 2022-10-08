import * as React from "react"
import Helmet from "react-helmet";
import { withPrefix } from "gatsby"
import jQuery from "jquery";

import Footer1 from "../components/footer-1";
import Header1 from "../components/header-1";


export default function Layout({ children }) {
  return (
    <>
    <div> 
    <Helmet>
          <link href={withPrefix("assets/css/bootstrap.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/brands.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/light.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/regular.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/solid.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/duotone.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/fontawesome.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/custom-styles.css")} rel="stylesheet"/>
      </Helmet>
      <Header1></Header1>
      {/* Content - Main */}
      <main className="content-main">
        <div className="content-inner">
          <div className="container">
            <p /><div name="termly-embed" data-id="af8f4a0d-9970-4505-986b-754665bf4dcc" data-type="iframe" />
            <p />
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer1></Footer1>
    </div>
    </>
  )
}