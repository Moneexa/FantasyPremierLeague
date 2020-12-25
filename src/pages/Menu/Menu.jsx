import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const changeLoggedIn = useStoreActions(actions=>actions.obj.changeLogging)
    useEffect(() => {

        changeHeading("")
        changePara("")


    })
    function navigate(){
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
            <Link className="home-menu mt-md-3 mt-sm-1" to="/home">
                Home
                </Link>
            <Link className="home-menu" to="/my-leagues">
                My Leagues
                </Link>
            <Link className="home-menu" to="">
                How  To Play
                </Link>
            <Link className="home-menu" to="/faq">
                FAQs
                </Link>
            <Link className="home-menu" to="" style={{ border: "none" }}>
                Get Support
                </Link>
            <Link to="/home" className="mt-md-2 mt-sm-1">
                <button style={{
                    "borderRadius": "26px",
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