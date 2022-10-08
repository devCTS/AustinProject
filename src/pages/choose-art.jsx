import React from "react"
import Helmet from "react-helmet";
import { withPrefix } from "gatsby"

import Header from "../components/header";
import Footer from "../components/footer-1";




export default function Layout({ location }) {

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
        <link href={withPrefix("assets/css/styles.css")} rel="stylesheet"/>
        <link href={withPrefix("assets/css/python.css")} rel="stylesheet"/>

        <script src={withPrefix("assets/js/jquery.min.js")} type="text/javascript" />
        <script src={withPrefix("assets/js/python.js")} type="text/javascript" />
        <script src={withPrefix("assets/js/popper.min.js")} type="text/javascript" />
        <script src={withPrefix("assets/js/bootstrap.min.js")} type="text/javascript" />
        <script src={withPrefix("assets/js/custom.js")} type="text/javascript" />
        <script src={withPrefix("assets/js/choose-art.js")} type="text/javascript" />
      </Helmet>

      <div className="new_gif" style={{display: 'none'}}>
        <img src={withPrefix("assets/img/green-little-balls.gif")} className="img-fluid mw_50" alt="loading" />
      </div>
      <div className="container-main vh-100 custom_container_css" id="page">
        {/* Header */}
        <Header></Header>
        {/* Content - Main */}
        <main className="content-main">
          <div className="feature-list">
            <div className="container">
              <div className="heading-top">
                <h2>Choose Art</h2>
              </div>
              <div className="row" id="artContainer">
                <div className="col-md-4">
                  <a href="#" className="box art-image">
                    <div className="figure">
                      <img className="image_art" id="image_art0" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-1.png" />
                    </div>
                    <div className="aside">
                    </div>
                  </a>
                </div>
                <div className="col-md-4 ">
                  <a href="#" className="box art-image">
                    <div className="figure">
                      <img className="image_art" id="image_art1" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-2.png" />
                    </div>
                    <div className="aside">
                    </div>
                  </a>
                </div>
                <div className="col-md-4 "><a href="#" className="box art-image">
                    <div className="figure"><img className="image_art" id="image_art2" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-3.png" /></div>
                    <div className="aside">
                    </div>
                  </a></div>
                <div className="col-md-4"><a href="#" className="box art-image">
                    <div className="figure"><img className="image_art" id="image_art3" src={withPrefix("assets/img/green-little-balls.gif")} alt="img/art-4.png" /></div>
                    <div className="aside">
                    </div>
                  </a></div>
                <div className="col-md-4"><a href="#" className="box art-image">
                    <div className="figure"><img className="image_art" id="image_art4" src={withPrefix("assets/img/green-little-balls.gif")} alt="art-5" /></div>
                    <div className="aside">
                    </div>
                  </a></div>
                <div className="col-md-4"><a href="#" className="box art-image">
                    <div className="figure"><img className="image_art" id="image_art5" src={withPrefix("assets/img/green-little-balls.gif")} alt="art-6" /></div>
                    <div className="aside">
                    </div>
                  </a></div>
              </div>
              <div className="btn-out">
                <div className="btn btn-blue">Merchify It</div>
              </div>
            </div>
          </div></main>
        {/* Footer */}
          <Footer></Footer>
      </div>
    </div>
    </>
  )
}