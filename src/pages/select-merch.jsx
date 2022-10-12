import React from "react"
import { withPrefix } from "gatsby"
import Header from "../components/header";
import Footer1 from "../components/footer-1";

export default function Layout({ children }) {
  return (
    <>
    <div className="container-main" id="page">
      {/* Header */}
      <Header></Header>
      {/* Content - Main */}
       <main className="content-main">
        <div className="feature-list">
            <div className="container">
            <div className="heading-top">
                <h2>Select Merch</h2>
                <div className="see-more"><a href="#" id="btnSeeMore">See More</a></div>
            </div>
            <div className="row select-merch" id="artContainer">
                <div className="col-md-4"><a href="#" className="box">
                    <div className="figure"><img src={withPrefix("assets/img/art-7.png")} alt="art-7" /></div>
                    <div className="aside">
                    {/* <div class="number">1</div> */}
                    </div>
                </a></div>
                <div className="col-md-4"><a href="#" className="box">
                    <div className="figure"><img src={withPrefix("assets/img/art-8.png")} alt="art-8" /></div>
                    <div className="aside">
                    {/* <div class="number">5</div> */}
                    </div>
                </a></div>
                <div className="col-md-4"><a href="#" className="box">
                    <div className="figure"><img src={withPrefix("assets/img/art-9.png")} alt="art-9" /></div>
                    <div className="aside">
                    {/* <div class="number">3</div> */}
                    </div>
                </a></div>
                <div className="col-md-4"><a href="#" className="box">
                    <div className="figure"><img src={withPrefix("assets/img/art-10.png")} alt="art-10" /></div>
                    <div className="aside">
                    {/* <div class="number">4</div> */}
                    </div>
                </a></div>
                <div className="col-md-4"><a href="#" className="box">
                    <div className="figure"><img src={withPrefix("assets/img/art-11.png")} alt="art-11" /></div>
                    <div className="aside">
                    {/* <div class="number">2</div> */}
                    </div>
                </a></div>
                <div className="col-md-4"><a href="#" className="box">
                    <div className="figure"><img src={withPrefix("assets/img/art-12.png")} alt="art-12" /></div>
                    <div className="aside">
                    {/* <div class="number">6</div> */}
                    </div>
                </a></div>
            </div>
            <div className="btn-out"><a href="#" className="btn btn-blue">Setup Store</a></div>
            </div>
        </div>
       </main>
      {/* Footer */}
      <Footer1></Footer1>
    </div>
    </>
  )
}