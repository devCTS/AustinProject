import { navigate } from "gatsby"
import * as React from "react"
import { useApplicationContext } from "../../provider"

export default function V2() {

    const [state, setState] = React.useState({
        accountstep: 3,
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
                <div className="brand"><a href="#" /></div>
                    <div className="heading-txt">
                        <div className="aside">
                        <h2>Check your email inbox</h2>
                        </div>
                    </div>
                    <div className="form-field">
                        <form action="#" method="post">
                        <div className="verification-code">
                            <label>Four Digit Code</label>
                            <ul>
                            <li><input id="code" name="code" type="text" placeholder /></li>
                            <li><input id="code2" name="code2" type="text" placeholder /></li>
                            <li><input id="code3" name="code3" type="text" placeholder /></li>
                            <li><input id="code4" name="code4" type="text" placeholder /></li>
                            </ul>
                        </div>
                        <div className="bottom-btn">
                            <div className="btn-out w-100 pos-l-0 pb-32"><button name="Continue" id="continue" onClick={onContinueClick} className="btn btn-sml w-100">Confirm code</button></div>
                            <p> Didn't get the code? <a href="#">Resend</a></p>
                            <div className="steps w-100 pos-r-0">
                            <ul>
                                <li>Dot</li>
                                <li className="active">Dot</li>
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