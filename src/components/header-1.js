import * as React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet";
import { withPrefix } from "gatsby"


const Header1 = ({ siteTitle }) => (
    <header className="header-main">
        <Helmet>
          <link href={withPrefix("assets/css/bootstrap.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/brands.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/light.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/regular.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/solid.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/duotone.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/fontawesome.min.css")} rel="stylesheet"/>
          <link href={withPrefix("assets/css/custom-styles.css")} rel="stylesheet"/>
      </Helmet>
      <div className="container">
        <div className="brand"><a href="../staging" title="99 Generations">
          <img src={withPrefix("img/brand-99-generations.svg")} alt="brand-99-generations" /></a></div>
        <div className="overlay" />	
      </div>
  </header>
)

Header1.propTypes = {
  siteTitle: PropTypes.string,
}

Header1.defaultProps = {
  siteTitle: ``,
}

export default Header1
