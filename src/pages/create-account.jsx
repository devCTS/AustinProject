import React, {
    useState
} from "react";
import axios from "axios";
import Header1 from "../components/header-1";
import Footer1 from "../components/footer-1";
import Helmet from "react-helmet";
import {
    withPrefix,
    Link,
    navigate
} from "gatsby";

export default function Layout() {

    const [values, setValues] = useState({
        email: "",
        password:"pass"
    });

    const {
        email,
        password
    } = values;

    const handleChange = (name) => (event) => {
        setValues({
            ...values,
            [name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked", email,password);
        try {
            const res = await axios.post("https://localhost:8080/api/v1/auth/register", {
                email,
                password,
            });
            navigate("/create-password");
            console.log("SignUp Success", res);
        } catch (error) {
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
            <div className="feature-list form-container">
                <div className="container">
                <div className="container-box">
                    <div className="sign-in-form">
                    <div className="box">
                        <h3>Create your free account </h3>
                        <div className="form-field">
                        <form action="#" method="post">
                            <div className="input-out">
                            <label>Email</label>
                            <input id="email" name="email" type="text" value={email} onChange={handleChange("email")} placeholder="name@domain.com" />
                            </div>
                            {/* <div className="btn-out"><Link to="/create-password" className="btn">CONTINUE</Link></div> */}

                            <div className="btn-out"><button onClick={handleSubmit} className="btn">CONTINUE</button></div>
                        </form>
                        </div>
                        <div className="or-circle"><span>OR</span></div>
                        <div className="bottom-btns">
                        <ul>
                            <li><a href="#"><em><img src={withPrefix("assets/img/icon-apple.png")} alt="icon-apple" /></em> Apple</a></li>
                            <li><a href="#"><em><img src={withPrefix("assets/img/icon-google.png")} alt="icon-google" /></em> Google</a></li>
                            <li><a href="#"><em><img src={withPrefix("assets/img/icon-discord.png")} alt="icon-discord" /></em> Discord</a></li>
                        </ul>
                        </div>
                        <div className="bottom-txt">Already using 99 Generations? <a href="#"><Link to ="/signin">Sign in</Link></a></div>
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