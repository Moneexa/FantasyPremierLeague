import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const changeLoggedIn = useStoreActions(actions => actions.obj.changeLogging)
    useEffect(() => {

        changeHeading("")
        changePara("")


    })
    function navigate() {
        changeLoggedIn(false)
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-center menu">
            <img src="Profile.png" style={{ height: "5rem" }} />
            <h2>Welcome John</h2>
            <Link to="/wallet">
                <button style={{
                    "borderRadius": "26px",
                    padding: "0.25rem 2.5rem 0.25rem 2.5rem",
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#492477",
                    border: "none"

                }}>
                    My Wallet
                 </button>

            </Link>
            <Link className="home-menu mt-md-3 mt-sm-1" to="/profile">
                My Profile
                </Link>
            <Link className="home-menu" to="/my-winnings">
                My Winnings
                </Link>

            <Link className="home-menu" to="/faq">
                FAQ's
                </Link>
            <Link className="home-menu" to="/settings">
                Settings
                </Link>
            <Link className="home-menu" to="/tracker">
                Tracker
                </Link>
            <Link className="home-menu" to="/sync-fpl" style={{ border: "none" }}>
                Sync FPL Account
                </Link>
            <Link to="/home" className="mt-md-2 mt-sm-1 mb-5">
                <button style={{
                    "borderRadius": "17px",
                    padding: "0.25rem 2.5rem 0.25rem 2.5rem",
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#492477",
                    border: "none"


                }} onClick={navigate}>
                    Logout
                 </button>

            </Link>

        </div>




    )
}
