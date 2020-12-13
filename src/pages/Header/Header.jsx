import React from 'react'

import { Link, BrowserRouter as Router } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
const styledDiv = {
    "backgroundImage": 'url("img1.png")',
    "borderBottomLeftRadius": "50%",
    "borderBottomRightRadius": "50%",
    "height": "100vh",
    "alignContent" :"space-between"

}
const styledButton = {
    "color": "purple",
    "borderRadius": "21px",
    "width": "100%"


}
const styledLogo = {

    "height": "4.5rem"
}
const styledNav = {
    "color": "white",
    "margin": "0 1.25rem"
}
const styledHeading = {
    "color": "white"
    
}
export default function Header() {
    return (
        <>
            <Router>
                <div className="d-flex flex-column" style={styledDiv}>
                    <div className="d-flex flex-row" style={{justifyContent:"space-around"}}>
                        <Link to="/" className="mt-5">
                            <img alt="" src="logo.png" style={styledLogo} />

                        </Link>
                        <Nav className="d-flex mt-5" style={{ fontSize: "1.25em", fontWeight: "600" }}>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" style={styledNav}>
                                    Home
                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/how-to-play" style={styledNav}>
                                    HowToPlay
                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/faq" style={styledNav}>
                                    FAQ
                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/signin">
                                    <button style={styledButton}>Sign In</button>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <h1 style={styledHeading} >
                        Win the Game,
                        Win thr day
               </h1>
                </div>


            </Router>

        </>
    )
}