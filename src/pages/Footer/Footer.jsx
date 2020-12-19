import React from 'react'
import './Footer.css'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
export default function Footer() {
    return (
        <footer id="footer">
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
                    <p className="text">FAQs</p>

                </div>
                <div className="ml-5 d-flex flex-column align-items-flex-start">
                    <p className="bold-text">Legal</p>
                    <p className="text">Privacy Policy</p>
                    <p className="text">Terms and Conditions</p>
                    <p className="text">Disclaimer</p>

                </div>
                <div className="ml-5 d-flex flex-column align-items-flex-start">
                    <p className="bold-text">Need Help</p>
                    <p className="text">Info@fplplay.com</p>
                    <p className="bold-text">Get Social</p>
                    <div className="d-flex align-items-flex-start">
                        <img className="mx-3 social-icon" src={Facebook} />
                        <img className="mx-3 social-icon" src={Instagram} />
                        <img className="mx-3 social-icon" src={Twitter} />

                    </div>

                </div>
            </div>
            <div className="last-footer">
                <p className="last-footer-text py-1">© Copyrights 2020 FPL Play - All Rights Reserved</p>
            </div>

        </footer >



    )
}