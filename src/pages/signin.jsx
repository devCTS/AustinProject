import React, { useState } from "react"
import Header1 from "../components/header-1";
import Footer1 from "../components/footer-1";
import axios from "axios";
import Helmet from "react-helmet";
import { withPrefix, Link, navigate } from "gatsby";
import { setUser } from "../services/auth";

import $ from "jquery";

export default function Layout() {

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = state;
    try {
        const res = await axios.post("https://back-end-99gens.herokuapp.com/api/v1/auth/login", {email: state.email, password:state.password}); 
        if(res.data.status){
          setUser(res.data);
          navigate("/staging");
        }
        // console.log("SignUp Success", res);
    } catch (error) {
      $('#password').parents('li').find('.required-txt').remove();
        $('#password').after(`
            <div class="required-txt">* Invalid Email or Password</div>
        `);
        console.log(error.response);
    }
  };

    return (
      <>
      <div className="container-main" id="page">
      <Helmet>
        <link href={withPrefix("assets/css/progress-bar.css")} rel="stylesheet"/>
        <script src={withPrefix("assets/js/progress-bar.js")} type="text/javascript" />
      </Helmet>
        <Header1></Header1>
        <main className="content-main">
          <div className="form-container">
              <div className="container">
              <div className="container-box">
                  <div className="sign-in-form">
                  <div className="box">
                      <div className="heading-top">
                      <h3>Sign in</h3>
                      <p>or <Link to ="/create-account">Create an Account</Link></p>
                      </div>
                      <div className="form-field">
                      <form action="#" method="post">
                          <div className="input-out">
                            <label>Email</label>
                            <input id="email" name="email" type="text" value={state.email} onChange={onChange} placeholder="name@domain.com"/>
                          </div>
                          <div className="input-out">
                            <label>Password</label>
                            <li className="signinli">
                              <input id="password" name="password" type="password" value={state.password} onChange={onChange} />
                            </li>
                          </div>
                          <div className="btn-out"><button className="btn" onClick={handleSubmit}>Sign in</button></div>
                      </form>

                      </div>
                      <div className="or-circle"><span>OR</span></div>
                      <div className="bottom-btns">
                      <ul>
                          <li><a ><em><img src={withPrefix("assets/img/icon-apple.png")} alt="icon-apple" /></em> Apple</a></li>
                          <li><a ><em><img src={withPrefix("assets/img/icon-google.png")} alt="icon-google" /></em> Google</a></li>
                          <li><a ><em><img src={withPrefix("assets/img/icon-discord.png")} alt="icon-discord" /></em> Discord</a></li>
                      </ul>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
          </div>
        </main>
        <Footer1></Footer1>
      </div>
      </>
    )
}