import React, { useState, useEffect } from 'react'
import './Home.css'
import Choose from './Choose.svg'
import Select from './select (1).svg'
import Enjoy from './Enjoy.svg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import { useStoreActions, useStoreState } from 'easy-peasy';
import Arrow from './Arrow.svg'
import { Link } from 'react-router-dom'


export default function Home() {

    const loggedIn = useStoreState(state => state.obj.loggedIn);
    const _myLeagues = useStoreState(state => state.obj.myLeagues);

    const _faqList = useStoreState(state => state.obj.faqList);
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const [faqList, setFaqList] = useState([])
    const [myLeagues, setMyLeagues] = useState([])
    useEffect(() => {
        if (loggedIn) {
            changeHeading("Welcome John,")
            changePara("We are glad to have you here, What's your play today? Get started with Monthly or Weekly Leagues");
            setMyLeagues(_myLeagues)
            console.log(myLeagues ? myLeagues : '')

        }
        else {
            changeHeading("Win the Game, Win the Day.")
            setFaqList(_faqList)
            console.log(faqList ? faqList : '')
        }
    }, [])
    return (<>
        <div  className="row" id="cards">
            <div className="d-flex container" id="container">

                <div className="d-flex flex-column justify-content-center align-items-center col-sm-12 col-lg-6 col-md-6 col-xs-12" id="div1">
                    <h2 className="card-heading"> Weekly </h2>
                    <p className="pt-2" style={{
                        font: "normal normal 300 1rem Rubik"

                    }}>Compete with close matched OR</p>
                    <p className="px-5 py-2" style={{
                        font: "normal normal 300 1rem Rubik"
                        , borderBottom: "1px solid white", borderTop: "1px solid white",

                    }}>
                        Game Weak 10 League</p>
                    <p className="pt-2" style={{
                        font: "normal normal 300 1rem Rubik"


                    }}>Cash Prizes for Top 3</p>
                    <button className="gets-started-button">
                        Get Started
                    </button>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center col-sm-12 col-lg-6  col-md-6 col-xs-12" id="div2">
                    <h2   >Monthly</h2>
                    <p className="pt-2" style={{
                        font: "normal normal 300 1rem Rubik"

                    }}>Compete with close matched OR</p>
                    <p className="px-5 py-3" style={{
                        font: "normal normal 300 1rem Rubik"
                        , borderBottom: "1px solid white", borderTop: "1px solid white",

                    }}>
                        Monthly League</p>
                    <p className="pt-2" style={{
                        font: "normal normal 300 1rem Rubik"


                    }}>Cash Prizes for Top 5</p>
                    <button className="gets-started-button">
                        Get Started
                </button>
                </div>
            </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center" id="how-to-play">
            {!loggedIn ?
                <>
                    <h1 className="pb-3 how-to-play-heading">How to Play</h1>
                    <p className="pt-3 how-to-play-text">We made it easy to play and win. login with your FPL account and compete with the players at closely matched overall rank</p>
                    <div className="circle-row">
                        <div className="d-flex flex-wrap-row-wrap circles">
                            <div className="d-flex flex-column justify-content-center align-items-center col-md-4 col-sm-12 col-lg-4 mx-1">
                                <div className="rounded-circle d-flex align-items-center justify-content-center circle" >
                                    <img src={Select} />
                                </div>
                                <h2   >Select</h2>
                                <p className="rounded-circle-text">Select your Monthly or Weekly league.</p>
                            </div>
                            <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg" className="stroke1">
                                <path d="M 10 80 Q 95 10 180 80" stroke="black" strokeLinecap="round" strokeWidth="2" fill="none"

                                    strokeDasharray="5,5"
                                />
                            </svg>
                            <div className="d-flex flex-column justify-content-center align-items-center col-md-4 col-sm-12 col-lg-4 mx-1">

                                <div className="rounded-circle d-flex align-items-center justify-content-center circle" >

                                    <img src={Choose} />
                                </div>
                                <h2   >Choose</h2>
                                <p className="rounded-circle-text" >Choose how much you want to put.</p>
                            </div>
                            <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg" className="rotated-stroke">
                                <path d="M 10 80 Q 95 10 180 80" stroke="black" strokeLinecap="round" strokeWidth="2" fill="none"

                                    strokeDasharray="5,5"
                                />
                            </svg>
                            <div className="d-flex flex-column justify-content-center align-items-center col-md-4 col-sm-12 col-lg-4 mx-1">

                                <div className="rounded-circle d-flex align-items-center justify-content-center circle" >
                                    <img src={Enjoy} />

                                </div>
                                <h2   >Enjoy</h2>
                                <p className="rounded-circle-text">Sit Back, Relax & Enjoy</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center" id="faq">
                        <h1 className="how-to-play-heading">Frequently Asked Questions</h1>
                        <div className="w-100 my-3">
                            {
                                faqList.map((value, index) => {
                                    console.log(value)
                                    if (index < 5) {
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
                                                    font: "normal normal 300 1.5rem Rubik",
                                                    color: "#10093D",
                                                    fontWeight: "300"

                                                }}>{value.subHeading}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography style={{
                                                    textAlign: "left", font: "normal normal 300 1.27rem Rubik",
                                                    color: "#10093D",
                                                    fontWeight: "300"
                                                }} >
                                                    {value.description}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>)
                                    }
                                })}

                        </div>
                        <button className="mt-2 py-2 px-5">View All +</button>

                    </div>
                </>
                :
                <>
                    <h1 className="pb-3 how-to-play-heading">My Leagues</h1>
                    <p className="pt-3 how-to-play-text">
                        Explore the leagues you are playing or previously played
                        </p>
                    <div className="d-flex flex-column align-items-center tab1">
                        <div className="d-flex align-items-center table-headings p-2">
                            <p className="head-text" style={{ width: "10%" }}>#</p>
                            <p className="head-text" style={{ width: "25%" }}>Game Weak League</p>
                            <p className="head-text" style={{ width: "30%" }}>League No.</p>
                            <p className="head-text" style={{ width: "20%" }}>Your Rank</p>
                            <p className="head-text" style={{ width: "20%" }}>Stack</p>
                        </div>

                        {myLeagues.map((value, index) => {
                            if (index < 5) {
                                return (<div key={index} className="d-flex align-items-center rows mb-2 p-3">
                                    <p className="row-text" style={{
                                        width: "10%",
                                        border: "3px solid #0E335E",
                                        borderRadius: "14px"
                                    }}>{value.id}</p>
                                    <p className="row-text" style={{ width: "25%" }}>{value.gameWeakLeague}</p>
                                    <p className="row-text" style={{ width: "30%" }}>{value.leagueNo}</p>
                                    <p className="row-text" style={{ width: "20%" }}>{value.yourRank}</p>
                                    <p className="row-text pl-md-5 pl-sm-0" style={{ width: "20%" }}>{value.stake}
                                        <Link to="/my-leagues" className="ml-md-5 ml-sm-0">
                                            <img src={Arrow} style={{ height: "0.813rem" }} />
                                        </Link>
                                    </p>

                                </div>)
                            }
                        })}
                    </div>
                    <button className="mt-2 py-2 px-5" id="leaguesBtn">View All +</button>




                </>
            }


        </div>
        <SubscribeLetter style={{ marginTop: "0px" }} />

    </>

    )
}