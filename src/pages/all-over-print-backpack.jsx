import React from "react"
import Helmet from "react-helmet";
import { withPrefix } from "gatsby"

import Header1 from "../components/header-1";
import Footer1 from "../components/footer-1";

export default function Layout({ children }) {
  return (
    <>
    <div className="container-main" id="page">

    <Helmet>
        <link href={withPrefix("assets/css/bootstrap.min.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/brands.min.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/light.min.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/regular.min.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/solid.min.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/duotone.min.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/fontawesome.min.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/custom-styles.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/python.css")} rel="stylesheet"/>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/zoom-image.js"></script>
        <script src="assets/js/custom.js"></script>
      </Helmet>

      {/* Header */}
      <Header1></Header1>
      {/* Content - Main */}
      <main className="content-main">
        <div className="product-details">
          <div className="container">
            <div className="heading-top">
              <h2>All-Over-Print Backpack</h2>
              <div className="see-more"><a href="#">Back</a></div>
            </div>
            <div className="product-img-out">
              <div className="product-img">
                <div className="product-lrg">
                  <div className="show"><img id="show-img" src={withPrefix("assets/img/product-bag-1.png")} alt="product-bag-1" /></div>
                  <div className="bottom-btns">
                    <a href="#" className="btn btn-dark-blue">Edit</a>
                    <a href="#" className="btn btn-blue">Buy Now</a>
                  </div>
                </div>				
                <div className="small-img">
                  <div className="small-container">
                    <div id="small-img-roll">
                      <img className="show-small-img" src={withPrefix("assets/img/product-bag-1.png")} alt="product-bag-1" />
                      <img className="show-small-img" src={withPrefix("assets/img/product-bag-2.png")} alt="product-bag-2" />
                      <img className="show-small-img" src={withPrefix("assets/img/product-bag-1.png")} alt="product-bag-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer1></Footer1>
    </div>
    </>
  )
}