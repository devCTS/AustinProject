import React from "react"
import Helmet from "react-helmet";
import { withPrefix } from "gatsby"

import Footer1 from "../components/footer-1";
import Header1 from "../components/header-1";


export default function Layout({ children }) {
  return (
    <>
    <div className="container-main" id="page">
        <Helmet>
            <link href={withPrefix("assets/css/search.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/css/bootstrap.min.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/css/brands.min.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/css/light.min.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/css/regular.min.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/css/solid.min.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/css/duotone.min.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/css/fontawesome.min.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/css/custom-styles.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/plugins/LC-Lightbox-LITE/css/lc_lightbox.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/plugins/LC-Lightbox-LITE/skins/light.css")} rel="stylesheet"/>
            <link href={withPrefix("assets/plugins/LC-Lightbox-LITE/skins/minimal.css")} rel="stylesheet"/>

            <script src={withPrefix("assets/js/jquery.min.js")} type="text/javascript" />
            <script src={withPrefix("assets/js/popper.min.js")} type="text/javascript" />
            <script src={withPrefix("assets/js/bootstrap.min.js")} type="text/javascript" />
            {/* <script src={withPrefix("assets/js/custom.js")} type="text/javascript" /> */}
            <script src={withPrefix("assets/js/search.js")} type="text/javascript" />
            <script src={withPrefix("assets/plugins/LC-Lightbox-LITE/js/lc_lightbox.lite.custom.js")} type="text/javascript" />
            <script src={withPrefix("assets/plugins/LC-Lightbox-LITE/lib/AlloyFinger/alloy_finger.min.js")} type="text/javascript" />
        </Helmet>
                <Header1></Header1>
                {/* Content - Main */}

                <main className="content-main">
                    <div className="search-block">
                        <div className="container">
                            <div className="heading-txt">
                                <div className="sub-heading">Remixer</div>
                                <h3>Edit over 10,000,000 amazing images available through Lexica art:</h3>
                            </div>
                            <div className="search-form">
                                <label>Start typing...</label>
                                <div className="input-out">
                                    <div className="input-inn">
                                        <input type="text" className="search-input" placeholder="Search..." />
                                        <button className="btn btn-blue btn-search">Search</button>
                                    </div>
                                    <div className="feature-links">
                                        <div className="aside">
                                            <ul>
                                                <li className><a href="#">Doggies</a></li>
                                                <li><a href="#">Space</a></li>
                                                <li><a href="#">Cars</a></li>
                                                <li><a href="#">Bubbles</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Diamonds</a></li>
                                                <li><a href="#">Superhero’s</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Fashion</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Funny</a></li>
                                                <li><a href="#">Games</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                                <li><a href="#">Category</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sml-txt">Click Remix to generate a new image from the original prompt or, Click Merchify to see any AI image on a wide variety of merchandise.</div>
                                <div className="required-box"><em><img src={withPrefix("assets/img/icon-info.png")} alt="icon-info" /></em> We do not filter the images shown.</div>
                            </div>
                            <div className="search-results row" style={{ display: "grid" }}>
                            </div>
                            <div className="loading-spin-container">
                                <i className="loading-spin fa fa-circle-o-notch fa-spin" style={{ fontSize: 24 }} />
                            </div>
                            <div className="row">
                                <button className="btn btn-blue btn-loadmore mx-auto my-4" style={{ display: "flex" }}>
                                    Load More...
                                </button>
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