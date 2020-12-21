import React, { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import './SignIn.css'
export default function SignIn({ match }) {
    const heading = useStoreState(state => state.obj.heading)
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const loggedIn = useStoreActions(actions => actions.obj.changeLoggingRed)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        changeHeading("")
        console.log(match.path)

    }, [])

    function handleEmailChange(e) { }
    function handlePasswordChange(e) { }
    function signin() {
        loggedIn(true)
    }
    return (<>
        <div className="d-flex flex-column justify-content-center align-items-center signin-form">
            <h1 className="signin-heading">SignIn and Start Playing</h1>
            <p className="py-3 px-2 para">
                You are just a step away to enter the gaming experience, Sign in with your FPL account and get started
            </p>
            <form className="d-flex flex-column align-items-center justify-content-center " style={{ margin: "-1rem" }}>
                <input value={email} onChange={(e) => handleEmailChange(e)} className="fpl-email" placeholder="Your FPL email" />
                <input className="fpl-email" value={password} onChange={(e) => handlePasswordChange(e)}
                    placeholder="Your FPL password" />
                <button className="py-1 px-3 my-5 signin-button" type="button" onClick={signin}>

                    <Link to="/home">Start Playing</Link></button>
            </form>
            <div className="d-flex align-items-center justify-content-center last-para" >
                <div className="mr-1 d-flex align-items-center justify-content-center" style={{ width: "43%" }}>
                    <FontAwesomeIcon className="mb-1" icon={faQuestionCircle} style={{ font: "normal normal medium 25px Rubik", color: "white" }} />
                    <p style={{
                        font: "normal normal 300 0.8rem Rubik"
                    }}> Why we need your FPL credentials?
                    </p>
                </div>
                <div className="ml-1 d-flex align-items-center justify-content-center" style={{ width: "32%" }}>
                    <FontAwesomeIcon icon={faShieldAlt} className="mb-1" style={{ font: "normal normal medium 25px Rubik", color: "white" }} />
                    < p style={{
                        font: "normal normal 300 0.8rem Rubik"
                    }}>Completely Secure Find out how</p>
                </div>
            </div>
        </div >
    </>)

}



