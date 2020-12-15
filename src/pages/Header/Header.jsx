import React from 'react'
import './Header.css'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
const styledDiv = {
    "backgroundImage": 'url("Hero.png")',

    "minHeight": "100vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed"


}
const styledButton = {
    "borderRadius": "26px",
    color: "#492477",
    width: "234px",
    padding: "0.2rem",
    fontSize: "20px",
    fontWeight: "500",
    marginTop: "1rem",
    marginLeft:"4rem"
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
    "marginLeft" :"4rem"

}
export default function Header() {
    return (
        <>
            <div className="d-flex flex-column Header" id="Header" style={styledDiv}>
                <Router>
                    <Navbar bg="transparent" variant="dark" expand="lg" className="d-flex" style={styledNav}>
                        <Navbar.Brand href="/" className="">
                            <img src="logo (1).png" style={styledLogo} />
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
                                <Nav.Link as={NavLink} className="color-white pl-5" to="/how-to-play" style={{
                                    color: "white"

                                }}>
                                    HowToPlay
                            </Nav.Link>
                                <Nav.Link as={NavLink} to="/faq" className="color-white pl-5" style={{
                                    color: "white"

                                }}>
                                    FAQs
                            </Nav.Link>
                                <Nav.Link as={NavLink} to="/login" className="color-white pl-5" style={{
                                    color: "white"

                                }}>
                                    <button  style={{
                                        width: "8rem", "borderRadius": "26px",
                                        padding: "0.25rem",
                                        fontSize: "20px",
                                        fontWeight: "500",
                                        color: "#492477"

                                    }}>
                                        Sign In
                                    </button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                </Router>
                <div className="d-flex justify-content-center row" style={{ marginTop: "4rem", width:"100%"}}>
                    <div className="container">
                        <h1
                            style={styledHeading}>
                            Win the game, <br />
                            Win the play
                        </h1>
                        <button style={styledButton}>Start Playing</button>

                    </div>
                </div>

            </div>

        </>
    )
}