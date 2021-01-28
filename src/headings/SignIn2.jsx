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

        <div className="d-flex flex-column justify-content-center align-items-center signin-form p-5">
            <h1 className="signin-heading">Sign In</h1>
            <div className="py-3 px-2 para text-center">
                You are just a step away to enter the gaming experience, Sign in with your FPL account and get started.
                <br /><br />
                New here? <Link to="/create-account">Create an account now</Link>
            </div>
            <form className="d-flex flex-column align-items-center justify-content-center " style={{ margin: "-1rem" }}>
                <input value={email} onChange={(e) => handleEmailChange(e)} className="fpl-email" placeholder="Your email" />
                <input className="fpl-email" value={password} onChange={(e) => handlePasswordChange(e)}
                    placeholder="Your password" />
                <Link to="/blank">
                    <button className="py-1 px-3 my-5 signin-button bg-white" type="button" onClick={signin}>

                        Sign In</button>
                </Link>
            </form>

        </div >
    </>)

}



