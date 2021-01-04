import React, { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import './SignIn.css'
import { Modal, Button } from 'react-bootstrap'
export default function SignIn({ match }) {
    const heading = useStoreState(state => state.obj.heading)
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const loggedIn = useStoreActions(actions => actions.obj.changeLoggingRed)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const [_show, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const _handleClose = () => setShow1(false);

    const handleShow = () => setShow(true);
    const _handleShow = () => setShow1(true);

    useEffect(() => {
        changeHeading("")
        console.log(match.path)

    }, [])

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    function signin() {
        loggedIn(true)
    }
    return (<>
        <Modal show={show} onHide={handleClose} style={{ borderRadius: "100px" }}>
            <Modal.Header closeButton>
            </Modal.Header>

            <Modal.Body className="mx-md-5 mx-sm-3">
                <div className="d-flex align-items-center justify-content-center mx-md-5 my-3 mx-md-3">
                    <h2 style={{
                        textAlign: "center",
                        font: "normal normal medium 30 Rubik",
                        color: "#0F1F4E"
                    }}>Sign in – Why we need your Fantasy Premier League credentials</h2>
                </div>
                <p style={{
                    font: "normal normal 300 20px Rubik",
                    color: "#0F1F4E", textAlign: "center"
                }}>
                    Fplplay.com operates on the users own fantasy team. To ensure that, you are required to login with your fantasy.premierleague.com login. We, however, do not store your username or password on our end. We need to authenticate the user and create a profile within our site that pertains to your Fantasy login. Rest assured, the data on our site is compliant with all legalities.
                    <br /><br />
                    If you are having problems logging in, please refer to our FAQ. Please refer to our Privacy Policy for more information.
                </p>
            </Modal.Body>
        </Modal>
        <Modal show={_show} onHide={_handleClose} style={{ borderRadius: "100px" }}>
            <Modal.Header closeButton>
            </Modal.Header>

            <Modal.Body className="mx-md-5 mx-sm-3">
                <div className="d-flex align-items-center justify-content-center mx-md5 my-2 p-md-5 p-sm-3 mx-sm-3">
                    <h2 style={{
                        textAlign: "center",
                        font: "normal normal medium 30 Rubik",
                        color: "#0F1F4E"
                    }}>Completely Secure</h2>
                </div>
                <p style={{
                    font: "normal normal 300 18px Rubik",
                    color: "#0F1F4E", textAlign: "center"
                }}>We care about your security and we do not store any of your information on our servers.
                <br /><br />
                We care about your security and do not store any of your information on our servers. We use your login and create a backend account on our end that associates with your Fantasy premier league login.
                <br /><br />
                We have used OAuth 2.0 to enable 3rd party logins and have utmost trust in the software token and the process.
                 <br /><br />
                 You can choose to store your FPL username and password locally on your device using cookies, but this information is not stored by us.

                   </p>
            </Modal.Body>
        </Modal>
        <div className="d-flex flex-column justify-content-center align-items-center signin-form p-5">
            <h1 className="signin-heading">SignIn and Start Playing</h1>
            <p className="py-3 px-2 para">
                You are just a step away to enter the gaming experience, Sign in with your FPL account and get started
            </p>
            <form className="d-flex flex-column align-items-center justify-content-center " style={{ margin: "-1rem" }}>
                <input value={email} onChange={(e) => handleEmailChange(e)} className="fpl-email" placeholder="Your FPL email" />
                <input className="fpl-email" value={password} onChange={(e) => handlePasswordChange(e)}
                    placeholder="Your FPL password" />
                <Link to="/blank">
                    <button className="py-1 px-3 my-5 signin-button" type="button" onClick={signin}>

                        Start Playing</button></Link>
            </form>
            <div className="d-flex align-items-center justify-content-center last-para" >
                <div className="mr-1 d-flex align-items-center justify-content-center" style={{ width: "43%" }}>
                    <FontAwesomeIcon className="mb-1" icon={faQuestionCircle} style={{ font: "normal normal medium 25px Rubik", color: "white" }} />
                    <p style={{
                        font: "normal normal 300 0.8rem Rubik"
                    }} onClick={handleShow}> Sign in – Why we need your Fantasy Premier League credentials
                    </p>
                </div>
                <div className="ml-1 d-flex align-items-center justify-content-center" style={{ width: "32%" }}>
                    <FontAwesomeIcon icon={faShieldAlt} className="mb-1" style={{ font: "normal normal medium 25px Rubik", color: "white" }} />
                    < p style={{
                        font: "normal normal 300 0.8rem Rubik"
                    }} onClick={_handleShow}>Completely Secure Find out how</p>
                </div>
            </div>
        </div >
    </>)

}



