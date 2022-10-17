import React, {
    useState, useEffect
} from "react";
import axios from "axios";
import {
    Helmet
} from "react-helmet";
import {
    withPrefix,
    Link,
    navigate
} from "gatsby";
import {
    useApplicationContext
} from "../../provider"
import $ from 'jquery';

export default function V1() {

    const [values, setValues] = useState({
        password: "",
        passwordConfirm: "",
        email: "",
    });
    useEffect(() => {
        if (applicationState.signupEmail) {
            setState({  ...state, email : applicationState.signupEmail })
        }
      }, [])

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = state;
        if (state.password == state.passwordConfirm) {
            try {
                console.log("!!!!!!!!!!!!!!!!!!!!!",state);
                const res = await axios.post("https://3.144.202.225:8080/api/v1/auth/register", {email: state.email, password:state.password} );
                setApplicationState({
                    ...applicationState,
                    accountstep: state.accountstep
                })
                navigate("/create-password");
                console.log("SignUp Success", res);
            } catch (error) {
                console.log(error.response);
            }
        }
    };

    const [state, setState] = React.useState({
        accountstep: 2,
    })
    const {
        applicationState,
        setApplicationState
    } = useApplicationContext()
 
    return (
        <>
            <div className="col-md-6 left-form">
            <Helmet>
                <script src={withPrefix("assets/js/auth.js")} type="text/javascript" />
            </Helmet>
                <div className="brand"><a href="#" /></div>
                <div className="heading-txt">
                <div className="aside">
                    <h2>Create your password</h2>
                </div>
                </div>
                <div className="form-field">

                <form action="#" method="post">
                    <ul>
                    <li>
                        <div className="label-with-txt">
                        <label>Password</label>
                        <div className="view" style={{width: '100%'}}><em><img src={withPrefix("assets/img/eye-solid.svg")} alt="eye" /></em> Show</div>
                        </div>
                        <input id="password" name="password" type="password" value={state.password} onChange={onChange} placeholder="Password" />
                        {/* <div class="required-txt">Password must be at least 8 characters</div> */}
                    </li>
                    <li>
                        <div className="label-with-txt">
                        <label>Confirm password</label>
                        <div className="view" style={{width: '100%'}}><em><img src={withPrefix("assets/img/eye-solid.svg")} alt="eye" /></em> Show</div>
                        </div>
                        <input id="passwordConfirm" name="passwordConfirm" type="password" value={state.passwordConfirm} onChange={onChange} placeholder="Password" />
                        {/* <div class="required-txt">Password does not match</div> */}
                    </li>
                    </ul>
                    <div className="bottom-btn">
                    <div className="btn-out"><button name="Continue" id="continue" className="btn" onClick={handleSubmit} >Continue</button></div>
                    <div className="steps">
                        <ul>
                        <li className="active">Dot</li>
                        <li>Dot</li>
                        <li>Dot</li>
                        </ul>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}