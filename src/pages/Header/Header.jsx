import React, { useState } from 'react'
import './Header.css'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { useStoreActions, useStoreState } from 'easy-peasy';

const styledDiv = {
    "backgroundImage": 'url("Hero.png")',

    "minHeight": "100vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "1"
    // backgroundAttachment: "fixed"


}
const styledButton = {
    
    // "width": "100%"


}
const styledLogo = {

    "height": "6.5rem",
    // "marginLeft":"8rem"

}
const styledNav = {
    "marginTop": "2rem",
    "justifyContent": "space-around"
}
const styledHeading = {
    "color": "white",
    "marginLeft": "4rem"

}
export default function Header() {
    const heading = useStoreState(state => state.obj.heading)
    return (
        <>
            <div className="d-flex flex-column Header" id="Header" style={styledDiv}>
                <Navbar bg="transparent" variant="dark" expand="lg" className="d-flex" style={styledNav}>
                    <Navbar.Brand href="/home" className="">
                        <img src="logo.png" style={styledLogo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=" flex-grow-0">
                        <Nav className="ml-auto" style={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "white"
                            // "marginRight":"8rem"


                        }}>
                            <Nav.Link as={NavLink} className="color-white pl-5" to="/home" style={{
                                color: "white"
                            }}>
                                Home
                            </Nav.Link>
                            <Nav.Link className="color-white pl-5" to="/how-to-play" style={{
                                color: "white"

                            }}>
                                HowToPlay
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/faq" className="color-white pl-5" style={{
                                color: "white"

                            }}>
                                FAQs
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/signin" className="color-white pl-5" style={{
                                color: "white"

                            }}>
                                <button style={{
                                    "borderRadius": "26px",
                                    padding: "0.25rem 2.5rem 0.25rem 2.5rem",
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    color: "#492477",
                                    border: "none"

                                }}>
                                    Sign In
                                    </button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                <div className="d-flex justify-content-center row heading-row">
                    <div className="container">
                        <h1 className="heading-h1"
                            >
                            {heading}
                        </h1>
                        {heading !== "Win the Game, Win the Day." || heading === "" ? "" :
                            <button className="start-playing">Start Playing</button>
                        }

                    </div>
                </div>

            </div>

        </>
    )
}