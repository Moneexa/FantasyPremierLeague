import React from 'react'
import './Footer.css'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import fb from './facebook-white.svg'
import inst from './instagram-white.svg'
import tw from './twitter-white.svg'
import { useLocation, Link } from 'react-router-dom'
export default function Footer() {
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
                            <p className="py-2" style={{
                                fontSize: "0.8rem", color:"white"
                            }}>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                                </p>
                            <p className="py-2" style={{
                                fontSize: "0.8rem"
                            }}>Disclaimer</p>
                            <p className="py-2" style={{
                                fontSize: "0.8rem"
                            }}>Terms and Conditions</p>
                        </div>
                        <div className="d-flex align-items-center mt-auto foot" style={{
                            justifyContent: "space-around",
                            borderTop: "1px solid lightslategray",
                            borderBottom: "1px solid lightslategray",

                            background: "linear-gradient(to left, #B90D8E, #110A3E)",
                            color: "white"
                        }}>
                            <p className="py-2" style={{
                                fontSize: "1rem"
                            }}>© Copyrights 2020 FPL Play - All Rights Reserved</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={fb} className="mx-1"style={{ height: "2rem" }} />
                                <img src={inst} className="mx-1" style={{ height: "2rem" }} />
                                <img src={tw} className="mx-1" style={{ height: "2rem" }} />
                            </div>
                        </div>

                    </>
                    :
                    <>
                        <div className="mb-5 first-footer">
                            <div className="ml-5 d-flex align-items-center justify-content-center first-child">
                                <img src="logo.png" className="fpl-logo" />
                                <p className="text">
                                    FPL Play is a fantasy platform built to make the fantasy experience as enjoyable and competitive as possible. Take part and stand a chance of <b>winning weekly and monthly prizes.</b></p>
                            </div>
                            <div className="ml-5 d-flex flex-column align-items-flex-start">
                                <p className="bold-text">Explore</p>
                                <p className="text">About FPL Play</p>
                                <p className="text">How To play</p>
                                <p className="text"><Link to="/faq">FAQs</Link></p>

                            </div>
                            <div className="ml-5 d-flex flex-column align-items-flex-start">
                                <p className="bold-text">Legal</p>
                                <p className="text">
                                    <Link to="/privacy-policy"> Privacy Policy</Link>
                                    </p>
                                <p className="text">Terms and Conditions</p>
                                <p className="text">Disclaimer</p>

                            </div>
                            <div className="ml-5 d-flex flex-column align-items-flex-start">
                                <p className="bold-text">Need Help</p>
                                <p className="text">Info@fplplay.com</p>
                                <p className="bold-text">Get Social</p>
                                <div className="d-flex align-items-flex-start">
                                    <img className="mx-2 social-icon" src={Facebook} />
                                    <img className="mx-2 social-icon" src={Instagram} />
                                    <img className="mx-2 social-icon" src={Twitter} />

                                </div>

                            </div>
                        </div>
                        <div className="last-footer">
                            <p className="last-footer-text py-1">© Copyrights 2020 FPL Play - All Rights Reserved</p>
                        </div>
                    </>
            }
        </footer >



    )
}