import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Helmet from "react-helmet";
import { withPrefix } from "gatsby"
// import "../../styles/css/bootstrap.min.css"
// import "../../styles/css/brands.min.css"
// import "../../styles/css/light.min.css"
// import "../../styles/css/regular.min.css"
// import "../../styles/css/solid.min.css"
// import "../../styles/css/duotone.min.css"
// import "../../styles/css/fontawesome.min.css"
// import "../../styles/css/python.css"
// import "../../styles/css/styles.css"
// import "../../styles/css/custom-styles.css"
export default function ApplicationLayout({ children }) {
    return (
        <div>
            <Helmet>
                <script src={withPrefix("assets/js/popper.min.js")} type="text/javascript" />
                <script src={withPrefix("assets/js/bootstrap.min.js")} type="text/javascript" />
                <script src={withPrefix("assets/js/custom.js")} type="text/javascript" />
                <script src={withPrefix("assets/js/python.js")} type="text/javascript" />
                <script src={withPrefix("assets/js/choose-art.js")} type="text/javascript" />
            </Helmet>
            <div class="new_gif" style={{ display: "none" }}>
                <img src="/assets/img/green-little-balls.gif" class="img-fluid mw_50" alt="loading" />
            </div>
            <div class="container-main vh-100 custom_container_css" id="page">

                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}
