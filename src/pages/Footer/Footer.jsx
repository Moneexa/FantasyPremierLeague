import React from 'react'
import './Footer.css'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import fb from './facebook-white.svg'
import inst from './instagram-white.svg'
import tw from './twitter-white.svg'
import { useLocation, Link } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy'
export default function Footer() {
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    let location = useLocation()

    return (
        <footer id="footer">
            {
                location.pathname === "/menu" ?
                    <>
                        <div className="d-flex align-items-center mt-auto foot" style={{
                            justifyContent: "space-around",
                            borderTop: "1px solid lightslategray",
                            borderBottom: "1px solid lightslategray",

                            background: "linear-gradient(to left, #B90D8E, #110A3E)",
                            color: "white"
                        }}>

                            <Link target="_blank" to="/privacy-policy">
                                <p className="py-2" style={{
                                    fontSize: "0.8rem", color: "white"
                                }}>
                                    Privacy Policy
                            </p>
                            </Link>
                            <Link to="/blank" target="_blank">
                                <p className="py-2 text-white" style={{
                                    fontSize: "0.8rem"
                                }}>Disclaimer</p>
                            </Link>
                            <Link to="/blank" target="_blank">
                                <p className="py-2 text-white" style={{
                                    fontSize: "0.8rem"
                                }}>Terms and Conditions</p>
                            </Link>

                        </div>
                       
                    </>
                    :
                    <>
                        <div id="footer-length" className="">
                            <div className="my-5 first-footer main-padding">
                                <div className="ml-sm-5 ml-md-0 d-flex align-items-center first-child mb-auto">
                                    <img src="logo.png" className="fpl-logo" />
                                    <p className="text" style={{ maxWidth: "11.5rem" }}>
                                        FPL Play is a fantasy platform built to make the fantasy experience as enjoyable and competitive as possible. Take part and stand a chance of <b>winning weekly and monthly prizes.</b></p>
                                </div>
                                <div className="ml-5 d-flex flex-column align-items-flex-start mb-auto">
                                    <p className="bold-text">Explore</p>
                                    <Link to="/faq" target="_blank">
                                        <p className="text">
                                            FAQs</p>
                                    </Link>

                                </div>
                                <div className="ml-5 d-flex flex-column align-items-flex-start mb-auto">
                                    <p className="bold-text">Legal</p>
                                    <Link to="/privacy-policy" target="_blank">
                                        <p className="text">

                                            Privacy Policy
                                </p>
                                    </Link>
                                    <Link to="/blank" target="_blank" onClick={() => {
                                        changeHeading("Terms and Conditions")
                                    }}>
                                        <p className="text">Terms and Conditions</p>
                                    </Link>
                                    <Link to="/blank" target="#blank" onClick={() => {
                                        changeHeading("Disclaimer")
                                    }}>
                                        <p className="text">Disclaimer</p>

                                    </Link>

                                </div>
                                <div className="ml-5 d-flex flex-column align-items-flex-start mb-auto">
                                    <p className="bold-text">Need Help</p>
                                    <p className="text">Info@fplplay.com</p>
                                    <p className="bold-text">Get Social</p>
                                    <div className="d-flex align-items-flex-start">
                                        <img className="mx-2 social-icon" src={Twitter} />

                                    </div>

                                </div>
                            </div>
                            <div className="last-footer">
                                <p className="last-footer-text py-1">© Copyrights 2020 FPL Play - All Rights Reserved</p>
                            </div>
                        </div>
                    </>
            }
        </footer >




    )
}