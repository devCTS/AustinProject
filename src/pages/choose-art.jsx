import React, { useEffect } from 'react'
import { useApplicationContext } from '../../provider'
import { withPrefix } from "gatsby"
// import ApplicationLayout from '../components/Layout/index';
import Footer from "../components/footer";
import Header from "../components/header";


export default function Layout({ location }) {
  const appContext = useApplicationContext()
  const { applicationState } = appContext

  const generateArt = async (phrase) => {
    const el = document.querySelectorAll('.image_art');
    for (let i = 0; i < el.length; i++) {
      let image = document.querySelector("#image_art" + i)
      let str = phrase || "cyber punk"
      fetch("http://52.207.235.77/api/diffusion/generate?prompt=" + str)
        .then(response => response.blob())
        .then(blob => {
          let objectURL = URL.createObjectURL(blob)
          image.src = objectURL
        })
    }
  }
  useEffect(() => {
    if (applicationState.detailedDescription) {
      generateArt(applicationState.detailedDescription)
    }
  }, [])

  return (
    <>
      {/* <ApplicationLayout> */}
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
      {/* </ApplicationLayout> */}
      <Footer></Footer>

    </>

  )
}