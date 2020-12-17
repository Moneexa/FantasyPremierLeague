import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import './Home.css'
import Choose from './Choose.svg'
import Select from './select (1).svg'
import Enjoy from './Enjoy.svg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add'
import Footer from '../Footer/Footer'

export default function Home() {
    const [faqList, setFaqList] = useState([])
    useEffect(() => {
        const objList = [{
            subHeading: "What league will I play in?",
            description: "We put you up in a league based on the number of players who have signed up.We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "Why do you not publish the leagues immediately?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "How many players are in my league?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "How soon can I withdraw my winnings?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "Can I join multiple leagues?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }, {
            subHeading: "How do I deposit the money?",
            description: "We put you up in a league based on the number of players who have signed up. We try our best to match you with the players close to your overall rank, but cannot guarantee it, as the number of players will vary with every gameweek."
        }
        ]
        setFaqList(objList)
        console.log(faqList ? faqList : '')

    }, [])
    return (<>
        <Header />
        <div className="row" id="cards">
            <div className="d-flex container" id="container">

                <div className="d-flex flex-column justify-content-center align-items-center col-md-6 col-xs-12" id="div1">
                    <h2> Weekly </h2>
                    <p className="pt-2" style={{ fontSize: "20px" }}>Compete with close matched OR</p>
                    <p className="px-3 py-2" style={{
                        fontSize: "20px", borderBottom: "1px solid white", borderTop: "1px solid white",

                    }}>
                        Game Weak 10 League</p>
                    <p className="pt-2" style={{ fontSize: "20px", }}>Cash Prizes for Top 3</p>
                    <button>
                        Get Started
                    </button>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center col-md-6 col-xs-12" id="div2">
                    <h2   >Monthly</h2>
                    <p className="pt-2" style={{ fontSize: "20px" }}>Compete with close matched OR</p>
                    <p className="py-3" style={{
                        fontSize: "20px", borderBottom: "1px solid white", borderTop: "1px solid white"
                    }}>
                        Game Weak 10 League</p>
                    <p className="pt-2" style={{ fontSize: "20px" }}>Cash Prizes for Top 3</p>
                    <button>
                        Get Started
                </button>
                </div>
            </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center" id="how-to-play">
            <h2 className="pt-5" style={{ fontWeight: "600", fontSize: "50px" }}>How to Play</h2>
            <p className="pt-3"   >We made it easy to play and win. login with your FPL account and compete with the players at closely matched overall rank</p>

            <div className="circle-row row">
                <div className="d-flex container circles">
                    <div className="d-flex flex-column justify-content-center align-items-center col-md-4 col-sm-12 col-lg-4 ml-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center circle" >
                            <img src={Select} />
                        </div>
                        <h2   >Select</h2>
                        <p   >Select your Monthly or Weekly league.</p>
                    </div>
                    <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg" className="stroke1">
                        <path d="M 10 80 Q 95 10 180 80" stroke="black" strokeLinecap="round" strokeWidth="2" fill="none"

                            strokeDasharray="5,5"
                        />
                    </svg>
                    <div className="d-flex flex-column justify-content-center align-items-center col-md-4 col-sm-12 col-lg-4 ml-3">

                        <div className="rounded-circle d-flex align-items-center justify-content-center circle" >

                            <img src={Choose} />
                        </div>
                        <h2   >Choose</h2>
                        <p   >Choose how much you want to put.</p>
                    </div>
                    <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg" className="rotated-stroke">
                        <path d="M 10 80 Q 95 10 180 80" stroke="black" strokeLinecap="round" strokeWidth="2" fill="none"

                            strokeDasharray="5,5"
                        />
                    </svg>
                    <div className="d-flex flex-column justify-content-center align-items-center col-md-4 col-sm-12 col-lg-4 ml-3">

                        <div className="rounded-circle d-flex align-items-center justify-content-center circle" >
                            <img src={Enjoy} />

                        </div>
                        <h2   >Enjoy</h2>
                        <p   >Sit Back, Relax & Enjoy</p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center" id="faq">
                <h2 style={{ fontWeight: "600", fontSize: "50px" }}>Frequently Asked Questions</h2>
                <div className="w-100 my-3">
                    {
                        faqList.map((value, index) => {
                            console.log(value)
                            return (<Accordion key={index} className="mt-3" style={{
                                borderRadius: "30px", boxShadow: "0px 3px 6px #00000029"

                            }}>
                                <AccordionSummary
                                    expandIcon={<AddIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header" style={{
                                        boxShadow: "0px 3px 6px #00000029",
                                    }}

                                >
                                    <Typography style={{
                                        color: "#10093D", fontSize: "1.5em"
                                    }}>{value.subHeading}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ textAlign: "left", color: "#10093D", fontSize: "1.3em" }} >
                                        {value.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>)

                        })}

                </div>
                <button className="mt-2 py-2 px-5">View All +</button>

            </div>

        </div>
        <div className="subscribe-letter m-3 py-5">
            <div className="d-flex flex-column align-items-center justify-content-center">

                <h1>Join the Community</h1>
                <p className="mt-3">Subscribe and get all the news that matters most delivered straight to you.</p>
                <button style={{
                    // width:"22px",
                    color: "white",
                    background: "transparent",
                    margin: "1rem 0rem 1rem 0rem",
                    border: "2px solid #FFFFFF",
                    borderRadius: "30px",
                    opacity: "1",
                    padding: "0.25rem 3rem 0.25rem 3rem"

                }}>Enter your best email</button>
                <button className="mt-3 subscribe-button">Get Subscribed</button>
            </div>
        </div>
        <Footer />

    </>

    )
}