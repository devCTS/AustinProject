import React from "react"
import { withPrefix } from "gatsby"

import Header from "../components/header";
import Footer1 from "../components/footer-1";

export default function Layout() {
  return (
    <>
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
                  <div className="show"><img id="show-img" src={withPrefix("assets/img/product-bag-1.png")} style={{width:"100%", height:"100%"}} alt="product-bag-1" /></div>
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