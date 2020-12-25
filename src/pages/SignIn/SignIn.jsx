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

    function handleEmailChange(e) { }
    function handlePasswordChange(e) { }
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
                    }}>Unsure about giving your FPL Password?</h2>
                </div>
                <p style={{
                    font: "normal normal 300 20px Rubik",
                    color: "#0F1F4E", textAlign: "center"
                }}>All of the features at fplplay.com are specific to your FPL Squad, and therefore in order to use our site, you are required to upload your squad from the FPL website, and you can do this either by your FPL Password or ID.
                <br /><br />
                If you choose to login with your FPL Password, this information is not accessible to us, and is used only for the purpose of uploading your squad details directly from the FPL website. You will be asked to reconfirm your FPL Password each time you login, unless they are stored by the cookies in your browser.
                <br /><br />
                If you are having problems logging in, please refer to our FAQ. Please refer to our Privacy Policy for more information.</p>
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
                We use the email address you provide to create your account, however we do not store your FPL password.
                <br /><br />
                 You can choose to store your FPL password locally on your device using cookies,<br />
                 <b>but this information is not stored by us.</b>
                 <br /><br /><br />
                 See why we need your FPL Credentials?</p>
            </Modal.Body>
        </Modal>
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
                    }} onClick={handleShow}> Why we need your FPL credentials?
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



