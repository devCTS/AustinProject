import React from "react"
import { withPrefix } from "gatsby"
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import Footer1 from "../components/footer-1";

export default function Layout() {


  useEffect(() => {
    if (!isLoggedIn()) { navigate('/signin'); }
  }, []);

  const changesrc = (_src) => {
    document.getElementById('show-img').src = _src
  }



  return (
    <>
      <Helmet>
        <script src={withPrefix("assets/js/all-over-print-backpack.js")} />
      </Helmet>
      <div className="container-main" id="page">
        {/* Header */}
        <Header></Header>
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
                    <div className="show backpack_main"><img id="show-img" src="img/product-bag-1.png" alt="product-bag-1" /></div>
                    <div className="bottom-btns">
                      <a href="#" className="btn btn-dark-blue">Edit</a>
                      <a href="#" className="btn btn-blue">Buy Now</a>
                    </div>
                  </div>
                  <div className="small-img">
                    <div className="small-container">
                      <div id="small-img-roll">
                        {/* <img id="img_one" className="show-small-img" onClick={changesrc(this.src)} src="assets/img/product-bag-1.png" alt="product-bag-1" />
                      <img id="img_two" className="show-small-img" onClick={changesrc(this.src)} src="assets/img/product-bag-2.png" alt="product-bag-2" />
                      <img id="img_three" className="show-small-img" onClick={changesrc(this.src)} src="assets/img/product-bag-1.png" alt="product-bag-1" /> */}
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