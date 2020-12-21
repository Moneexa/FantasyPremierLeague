import React, { useState, useEffect } from 'react'
import './Header.css'
import { NavLink, BrowserRouter as Router, useLocation } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { useStoreActions, useStoreState } from 'easy-peasy';
import MenuIcon from './menu icon.svg'
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

    "height": "8rem",
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
    let location = useLocation();

    const heading = useStoreState(state => state.obj.heading)
    const para = useStoreState(state => state.obj.para)
    const [changedStyle, setChangedStyle] = useState({})
    const loggedIn = useStoreState(state => state.obj.loggedIn)
    useEffect(() => {
        if (location.pathname === "/signin")
            setChangedStyle({
                background: "linear-gradient(to left, #B90D8E, #110A3E)",
                borderRadius: "0px 0px 500px 500px",
                minHeight: "100vh",
                zIndex: "1"

            })
        else {
            setChangedStyle(styledDiv)
        }
    }, [location])
    return (
        <>
            <div className="d-flex flex-column Header" id="Header" style={changedStyle}>
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


                        }}>{
                                !loggedIn ? <Nav.Link as={NavLink} className="color-white pl-5" to="/home" style={{
                                    color: "white"
                                }}>
                                    Home
                            </Nav.Link>

                                    :
                                    <Nav.Link as={NavLink} className="color-white pl-5" to="/home" style={{
                                        color: "white"
                                    }}>
                                        Home
                            </Nav.Link>
                            }
                            {
                                !loggedIn ? <Nav.Link className="color-white pl-5" to="/how-to-play" style={{
                                    color: "white"

                                }}>
                                    HowToPlay
                                </Nav.Link>
                                    : <Nav.Link className="color-white pl-5" to="/how-to-play" style={{
                                        color: "white"

                                    }}>
                                        Dashboard
                                </Nav.Link>
                            }
                            {!loggedIn ? <Nav.Link as={NavLink} to="/faq" className="color-white pl-5" style={{
                                color: "white"

                            }}>
                                FAQs
                            </Nav.Link> :
                                <Nav.Link as={NavLink} to="/my-leagues" className="color-white pl-5" style={{
                                    color: "white"

                                }}>
                                    MyLeagues
                            </Nav.Link>
                            }
                            {
                                !loggedIn ? <Nav.Link as={NavLink} to="/signin" className="color-white pl-5" style={{
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
                                    : <Nav.Link as={NavLink} to="/wallet" className="color-white pl-5" style={{
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
                                            My Wallet
                                    </button>
                                    </Nav.Link>
                            }
                            {
                                loggedIn ?
                                    <Nav.Link as={NavLink} to="/wallet" className="color-white pl-5" style={{
                                        color: "white"

                                    }}><img src={MenuIcon} style={{
                                        height: "1.5rem",
                                        filter: "invert(96%) sepia(0%) saturate(0%) hue-rotate(111deg) brightness(104%) contrast(105%)"
                                    }} /></Nav.Link> : ''
                            }
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                <div className="d-flex flex-column  justify-content-center align-items-flex-start heading-row">
                    <div className="container contain">
                        <h1 className="heading-h1"
                        >
                            {heading}
                        </h1>
                        {heading !== "Win the Game, Win the Day." || heading === "" ? "" :
                            <button className="start-playing">Start Playing</button>
                        }
                        <p className="para-text">{para}</p>

                    </div>
                </div>

            </div>

        </>
    )
}