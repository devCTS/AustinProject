import { navigate } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { useApplicationContext } from "../../provider"
import $ from 'jquery';


export default function V1() {

    // const onPassShow = (e) => {
    //     var input = $(this).parents('li').find('input')[0];
    //     if(input.type === 'password') {
    //         input.type = 'text';
    //         $(this).html(`
    //             <em><img src={withPrefix("assets/img/eye-slash-solid.svg" alt="eye" /></em> Hide
    //         `);
    //     } else {
    //         input.type = 'password';
    //         $(this).html(`
    //             <em><img src={withPrefix("assets/img/eye-solid.svg" alt="eye" /></em> Show
    //         `);
    //     }        console.log("PRRREESSEEDDD!!!")
    // }

    const [state, setState] = React.useState({
        accountstep: 2,
      })

      const { applicationState, setApplicationState } = useApplicationContext()

      const onContinueClick = (e) => {
        e.preventDefault()
        console.log("i have been clicked", state)
        setApplicationState({ ...applicationState, accountstep: state.accountstep })
        navigate('/create-password')
      }

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
                        <input id="password" name="password" type="password" placeholder="Password" />
                        {/* <div class="required-txt">Password must be at least 8 characters</div> */}
                    </li>
                    <li>
                        <div className="label-with-txt">
                        <label>Confirm password</label>
                        <div className="view" style={{width: '100%'}}><em><img src={withPrefix("assets/img/eye-solid.svg")} alt="eye" /></em> Show</div>

                        </div>
                        <input id="passwordConfirm" name="passwordConfirm" type="password" placeholder="Password" />
                        {/* <div class="required-txt">Password does not match</div> */}
                    </li>
                    </ul>
                    <div className="bottom-btn">
                    <div className="btn-out"><button name="Continue" id="continue" className="btn" onClick={onContinueClick} >Continue</button></div>
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