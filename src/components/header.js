import * as React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet";
import { withPrefix } from "gatsby"
import {logout} from "../services/auth";


const Header = ({ siteTitle }) => (
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
        <div className="main-menu">
          <div className="menu-btn menu-bar"><div className="icon-bar"><span /></div></div>
          <div className="nav-bar">
            <div className="nav-inn">
              <div className="menu-close menu-bar"><button className="fal fa-times" /></div>
              <nav>
                <ul>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">My Creations</a></li>
                  <li><a href="#">My Store</a></li>
                </ul>
              </nav>
              <div className="btn-out">
                <a href="#" className="btn btn-gray">CREDITS: <span className="count">30</span></a>
                <a href="#" className="icon-user"><em className="fa fa-user" /></a>
                {/* <a href="#" className="btn btn-blue">Sign up</a>			 */}
                <a href="#" className="btn btn-blue" onClick={logout}>Signout</a>
                
                </div>

            </div>	
          </div>	
        </div>
        <div className="user-mbl"><a href="#" className="fa fa-user" /></div>
        <div className="overlay" />	
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
