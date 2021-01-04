import React, { useState, useEffect } from 'react'
import './Header.css'
import SignIn from '../../headings/SignIn'
import home from '../../headings/home'
import PrivacyPolicy from '../../headings/privacyPolicy'
import Faq from '../../headings/Faq'
import Mayhem from '../../headings/Mayhem'
import MyLeagues from '../../headings/MyLeagues'
import Winnings from '../../headings/winnings'
import Stakes from '../../headings/Stakes'
import PayStake from '../PayStakes/PayStakes'
import Confirmation from '../Confirmation/Confirmation'
import Wallet from '../../headings/Wallet'
import MayhemMonthly from '../../headings/MayhemMonthly'
import { NavLink, BrowserRouter as Router, useLocation, Link, Switch, Route } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import MenuIcon from './menu icon.svg'
const styledDiv = {
    "backgroundImage": 'url("Hero.png")',
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "1"
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

        else if (location.pathname === "/menu") {
            setChangedStyle({
                "backgroundImage": 'url("blurrHero.png")',
                backgroundImage: "url('blurrHero.png') , linear-gradient(272deg,#B90D8E, #110A3E)",
                "minHeight": "100vh",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: "1"
            })
        }
        else if (location.pathname === "/wallet" || location.pathname === "/privacy-policy" || location.pathname === "/winnings"

            || location.pathname === "/blank"
        ) {
            setChangedStyle({
                zIndex: "1",
                background: "linear-gradient(to left, #B90D8E, #110A3E)",
                borderRadius: "0px 0px 500px 500px",

            })
        }
        else if (location.pathname === "/pay-stake" || location.pathname === "/confirm") {
            setChangedStyle({
                zIndex: "1",
                background: "linear-gradient(to left, #B90D8E, #110A3E)",
                borderRadius: "0px 0px 500px 500px",

            })
        }
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
                        {
                            location.pathname === "/menu" ?
                                <Nav className="ml-auto" style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    color: "white"
                                    // "marginRight":"8rem"


                                }}>
                                    <Nav.Link as={NavLink} to="/home" className="color-white pl-5" style={{
                                        color: "white"

                                    }}><FontAwesomeIcon icon={faTimes} style={{
                                        height: "2rem",
                                        color: 'white'
                                    }} /></Nav.Link>
                                </Nav> :

                                <Nav className="ml-auto" style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    color: "white"
                                    // "marginRight":"8rem"


                                }}>

                                    {
                                        !loggedIn ? <Nav.Link as={NavLink} className="color-white pl-5" to="/home" style={{
                                            color: "white"
                                        }}>
                                            Home
                            </Nav.Link>

                                            :
                                            <Nav.Link as={NavLink} className="color-white pl-5" to="/home" style={{
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


                                            <button className="bg-white" style={{
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


                                                <button className="bg-white" style={{
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
                                            <Nav.Link as={NavLink} to="/menu" className="color-white pl-5" style={{
                                                color: "white"

                                            }}><img src={MenuIcon} style={{
                                                height: "1.5rem",
                                                filter: "invert(96%) sepia(0%) saturate(0%) hue-rotate(111deg) brightness(104%) contrast(105%)"
                                            }} /></Nav.Link> : ''
                                    }
                                </Nav>
                        }
                    </Navbar.Collapse>

                </Navbar>
                <Switch>
                    <Route component={SignIn} path="/signin" />
                    <Route component={home} path="/home" />
                    <Route component={PrivacyPolicy} path="/privacy-policy" />
                    <Route component={Faq} path="/faq" />
                    <Route component={MyLeagues} path="/my-leagues" />
                    <Route component={Mayhem} path="/mayhem" />
                    <Route path="/mayhem-monthly" component={MayhemMonthly} />

                    <Route component={Wallet} path="/wallet" />
                    <Route component={Winnings} path="/winnings" />
                    <Route path="/stakes" component={Stakes} />
                    <Route path="/pay-stake" component={PayStake} />
                    <Route path="/confirm" component={Confirmation} />

                </Switch>



            </div>

        </>
    )
}