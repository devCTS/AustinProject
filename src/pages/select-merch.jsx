import React from "react"
import { withPrefix } from "gatsby"
import Header from "../components/header";
import Footer1 from "../components/footer-1";
import { isLoggedIn } from "../services/auth";
import { useEffect } from 'react';
import { navigate } from "gatsby";
import { Helmet } from "react-helmet"
import $ from "jquery";
export default function Layout() {

    useEffect(() => {
        if (!isLoggedIn()) { navigate('/signin'); }
    }, []);
    return (
        <>
            <div className="container-main" id="page">
                <Helmet>
                    <script src={withPrefix("assets/js/owl.carousel.js")} type="text/javascript" />
                    {/* <script src={withPrefix("assets/js/custom.js")} type="text/javascript" /> */}
                    {/* <script src={withPrefix("assets/js/choose-art.js")} type="text/javascript" /> */}
                    <script src={withPrefix("assets/js/select-merch.js")} type="text/javascript" />
                </Helmet>
                <Header></Header>
                <main className="content-main">
                    <div className="breadcrumb">
                        <ul>
                            <li><a href="#">Generate</a></li>
                            <li><a href="#">Choose Art</a></li>
                            <li>Choose Merch</li>
                            <li><a href="#">Checkout</a></li>
                        </ul>
                    </div>
                    <div className="select-feature-list">
                        <div className="container">
                            <div className="select-merch">
                                <div className="row-container">
                                    <div className="container-inn">
                                        <div className="heading-top">
                                            <h2>Merchification Results</h2>
                                            <div className="results"><a href="#">Results (#0001)</a></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="owl-select-merch" className="owl-carousel">
                                    <div className="item">
                                        <div className="container-inn">
                                            <div className="row">
                                                <div className="col-md-4"><a href="#" className="box selected">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-1.png")} alt="select-merch-1" /></div>
                                                    <div className="aside">
                                                        <div className="number">1</div>
                                                        <div className="expand-btn">Expand</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-2.png")} alt="select-merch-2" /></div>
                                                    <div className="aside">
                                                        <div className="number">5</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box selected">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-3.png")} alt="select-merch-3" /></div>
                                                    <div className="aside">
                                                        <div className="number">3</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-4.png")} alt="select-merch-4" /></div>
                                                    <div className="aside">
                                                        <div className="number">4</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box selected">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-5.png")} alt="select-merch-5" /></div>
                                                    <div className="aside">
                                                        <div className="number">2</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-6.png")} alt="select-merch-6" /></div>
                                                    <div className="aside">
                                                        <div className="number">6</div>
                                                    </div>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="container-inn">
                                            <div className="row">
                                                <div className="col-md-4"><a href="#" className="box">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-7.png")} alt="select-merch-7" /></div>
                                                    <div className="aside">
                                                        <div className="number">3</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-8.png")} alt="select-merch-8" /></div>
                                                    <div className="aside">
                                                        <div className="number">5</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box selected">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-9.png")} alt="select-merch-9" /></div>
                                                    <div className="aside">
                                                        <div className="number">1</div>
                                                        <div className="expand-btn">Edit</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-10.png")} alt="select-merch-10" /></div>
                                                    <div className="aside">
                                                        <div className="number">4</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box ">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-10.png")} alt="select-merch-10" /></div>
                                                    <div className="aside">
                                                        <div className="number">6</div>
                                                    </div>
                                                </a></div>
                                                <div className="col-md-4"><a href="#" className="box selected">
                                                    <div className="figure"><img src={withPrefix("assets/img/select-merch-11.png")} alt="select-merch-11" /></div>
                                                    <div className="aside">
                                                        <div className="number">2</div>
                                                    </div>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-container">
                                    <div className="container-inn">
                                        {/* <div className="btn-out"><a href="#" className="btn btn-blue"><em className  "fal fa-shopping-cart" /> ADD TO CART</a></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-thumbnails">
                        <div className="container">
                            <div className="thumbnails-inn">
                                <div className="thumbnails">
                                    <ul>
                                        <li><a href="#" className="box selected">
                                            <div className="figure"><img src={withPrefix("assets/img/placeholder-1.png")} alt="placeholder-1" /></div>
                                            <div className="aside">
                                                <div className="number">1</div>
                                            </div>
                                        </a></li>
                                        <li><a href="#" className="box">
                                            <div className="figure"><img src={withPrefix("assets/img/placeholder-1.png")} alt="placeholder-1" /></div>
                                            <div className="aside">
                                                <div className="number">2</div>
                                            </div>
                                        </a></li>
                                        <li><a href="#" className="box">
                                            <div className="figure"><img src={withPrefix("assets/img/placeholder-1.png")} alt="placeholder-1" /></div>
                                            <div className="aside">
                                                <div className="number">3</div>
                                            </div>
                                        </a></li>
                                        <li><a href="#" className="box">
                                            <div className="figure"><img src={withPrefix("assets/img/placeholder-1.png")} alt="placeholder-1" /></div>
                                            <div className="aside">
                                                <div className="number">4</div>
                                            </div>
                                        </a></li>
                                        <li><a href="#" className="box">
                                            <div className="figure"><img src={withPrefix("assets/img/placeholder-1.png")} alt="placeholder-1" /></div>
                                            <div className="aside">
                                                <div className="number">5</div>
                                            </div>
                                        </a></li>
                                        <li><a href="#" className="box">
                                            <div className="figure"><img src={withPrefix("assets/img/placeholder-1.png")} alt="placeholder-1" /></div>
                                            <div className="aside">
                                                <div className="number">6</div>
                                            </div>
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="btn-out"><a href="#" className="btn btn-blue"><em className="fal fa-shopping-cart" /> ADD TO CART</a></div>
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