import React from "react"
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import {isLoggedIn} from "../services/auth";
import { useEffect } from 'react';
import { navigate } from "gatsby";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";

export default function Layout() {

  useEffect(() => {
    if(!isLoggedIn()){navigate('/signin');}    
  }, []);


  return (
    <>
    <div className="container-main" id="page">
    <Helmet>
      <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/flick/jquery-ui.css" />

      {/* <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" />
      <script src={withPrefix("assets/plugins/resize-drag-rotate-box-modeling/box-modeling-custom.js")} type="text/javascript" /> */}
      {/* <script src={withPrefix("assets/js/mockup.js")} type="text/javascript" /> */}

    </Helmet>
        <Header></Header>
        <main className="content-main">
        <div className="feature-list">
            <div className="container">
            <div className="heading-top">
                <h2>Design Mockup</h2>
                <div className="see-more"><a href="#">Add product</a></div>
            </div>
            {/* Page */}
            <div className="design-mockup">
                <ul className="mockup-tabs">
                <li className="mockup-tab active" data-id="front">Front &amp; Pocket</li>
                <li className="mockup-tab" data-id="top">Top panel</li>
                <li className="mockup-tab" data-id="bottom">Bottom panel</li>
                <li className="mockup-tab" data-id="inside">Inside pocket</li>
                </ul>
                <div className="designer-toolbar" />
                <div className="main-mockup-area">
                <div className="generator-mockup">
                    <div className="upload-design">
                    {/* <img src={withPrefix("assets/img/photo-1.png")} alt="photo-1" /> */}
                    <img className="btn-upload" src={withPrefix("assets/mockup/tap-your-design-here.svg")} alt />
                    <input type="file" className="upload-file" />
                    </div>
                    <div className="mockup-design">
                    {/* <img class="mockup-img" src={withPrefix("assets/mockup/backpack-img-b.jpg")} alt="" /> */}
                    </div>
                    <div className="backpack-mockup inside">
                    <img src={withPrefix("assets/mockup/backpack/inside.png")} alt />
                    <span className="safe-print-area-bottom">Safe Print Area</span>
                    <span className="placement-on-product">Placement on product</span>
                    </div>
                    {/* <div class="mockup-design-over">
            <div class="mockup-handler" id="mockupHandler"></div>
        </div> */}
                </div>
                </div>
                <div className="designer-toolbar">
                <span className="scale-button minus">-</span>
                <input type="range" className="scale-slider" min="0.1" max={2} defaultValue={1} step="0.01" />
                <span className="scale-button plus">+</span>
                </div>
            </div>
            {/* ./Page */}
            <div className="btn-out"><a href="#" className="btn btn-blue">Setup Store</a></div>
            </div>
        </div>
        </main>
      <Footer1></Footer1>
    </div>
    </>
  )
}