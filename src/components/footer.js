import React from "react";
import { Link } from "gatsby"
import Helmet from "react-helmet";
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"


const samplePageLinks = [
  {
    text: "Terms & Conditions",
    url: "../terms",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "Privacy", url: "../privacy" },
  { text: "Cookie Policy", url: "../cookie-policy" },
  // { text: "Staging", url: "../staging" },
  // { text: "Search", url: "../search/" },
  // { text: "Choose-Art", url: "../choose-art" },

]

const Footer = ({ siteTitle }) => (

  
  <footer className="footer-main">

  <Helmet>
  <link href={withPrefix("assets/css/custom-styles.css")} rel="stylesheet"/>
  </Helmet>
    <div className="container">
      <div className="newsletter-form-wrap">
        <div className="newsletter-form">
          <label>Begin creating</label>
          <form method="get" action="#">
            <input type="text" name="newsletter" id="newsletter" placeholder="Enter your email" />
            <input type="submit" name="newslettersubmit" id="newslettersubmit" className="btn btn-blue"/>
          </form>
        </div>
      </div>

      <div className="icons"><img src={withPrefix("img/icons-ai.svg")} /></div>
      <div className="brand"><a href="index.html" title="AtlasHoldings"> <img src={withPrefix("img/brand-99generations.svg")}/></a></div>
      {/* <div > */}
        <ul className="absolute-footer">
          <li className="absolute-footer"><p href="./privacy">Pricing</p></li>
          <li className="absolute-footer"><p href="#">My Creations</p></li>
          <li className="absolute-footer"><p href="#">My Store</p></li>
        </ul>
      {/* </div>	 */}
      <div className="foot-sub-title">By robots, for humans.™</div>
      <div className="foot-wrap">
        <p>©2022</p>
        <div className="foot-menu2">
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
