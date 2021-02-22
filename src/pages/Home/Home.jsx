import React, { useState, useEffect, useRef } from 'react'
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
import { Link, useHistory } from 'react-router-dom'
import wave from './wave single.svg'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

    const loggedIn = useStoreState(state => state.obj.loggedIn);
    const sync = useStoreState(state => state.obj.sync);
    const setLeagueStakes = useStoreActions(actions => actions.obj.setLeagueStakes)
    const history = useHistory();

    const _myLeagues = useStoreState(state => state.obj.myLeagues);
    const myRefname = useRef(null);

    const _faqList = useStoreState(state => state.obj.faqList);
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const [faqList, setFaqList] = useState([])
    const [myLeagues, setMyLeagues] = useState([])
    const [expandOR, setExpand] = useState(false)
    const [expandOR2, setExpand2] = useState(false)
    const [expandOR3, setExpand3] = useState(false)
    const [expandOR4, setExpand4] = useState(false)
    const [expandOR5, setExpand5] = useState(false)
    const [showbar, setShowBar] = useState(false)
    useEffect(() => {
        if (!sync) {
            setShowBar(true)
        }
    },[])

    useEffect(() => {

        if (loggedIn) {
            setMyLeagues(_myLeagues)
            console.log(myLeagues ? myLeagues : '')

        }
        else {
            setFaqList(_faqList)
            console.log(faqList ? faqList : '')
        }
    }, [])
    function func1() {
        setExpand4(true)
    }
    function handleChange(value) {
        if (value === 0) {
            expandOR ? setExpand(false) : setExpand(true)
        }
        else if (value === 1) {
            expandOR2 ? setExpand2(false) : setExpand2(true)
        }
        else if (value === 2) {
            expandOR3 ? setExpand3(false) : setExpand3(true)
        }
        else if (value === 3) {
            expandOR4 ? setExpand4(false) : setExpand4(true)
        }
        else if (value === 4) {
            expandOR5 ? setExpand5(false) : setExpand5(true)
        }
    }
    function handleCancel() {
        setShowBar(false)
        console.log(showbar, sync)
    }
    function goToStakes(value) {
        setLeagueStakes(value);
        history.push('/stakes');
    }
    return (<>
        {
            loggedIn && showbar ?
                <div className="d-flex align-items-center justify-content-center position-fixed w-100" style={{
                    top: "0px", left: "0px",
                    background: "#DFF4FFD1",
                    boxShadow: "0px 5px 6px #00000073",
                    padding: "1.3rem 2.6rem"

                }} id="top-bar">

                    <div className="text-center text-black ml-auto mr-3 mr-sm-2" style={{
                        fontSize: "1rem",
                        fontFamily: "Rubik",
                    }}>
                        Sync your FPL Team to start Playing
                    </div>
                    <Link to="/sync-fpl">
                        <button className="text-white text-center"
                            style={{
                                fontSize: "0.8rem", fontFamily: "Rubik", padding: "0.46rem 1.72rem", backgroundColor: "#0F1F4E",
                                borderRadius: "26px", border: "hidden"

                            }}
                        > Sync Now</button>
                    </Link>
                    <div className="ml-auto"><FontAwesomeIcon icon={faPlus} style={{
                        transform: "rotateZ(135deg)"
                    }} onClick={() => {
                        handleCancel()
                    }} /></div>
                </div>
                : ''


        }
        <div className="d-flex align-items-center justify-content-center flex-wrap" id="cards">

            <div className="d-flex flex-column justify-content-center align-items-center mx-2" id="div1">
                <div className="card-heading"> Weekly </div>
                <p className="pt-2" style={{
                    font: "normal normal 300 1rem Rubik",
                    marginTop: "2.25rem"

                }}>Gameweek 20 League</p>
                <a href="#faq3">
                    <p className="px-5 py-2 text-white" style={{
                        font: "normal normal 300 1rem Rubik"
                        , borderBottom: "1px solid white", borderTop: "1px solid white",

                    }} onClick={func1}>
                        Compete based on Overall Rank ></p>
                </a>
                {expandOR ? <p> OR</p> : ''}
                <Link to="/winnings">
                    <p className="pt-2 text-white" style={{
                        font: "normal normal 300 1rem Rubik"


                    }}>Cash winnings for 1st , 2nd and 3rd ></p>
                </Link>
                {
                    !loggedIn ? <Link to="/signin"><button className="gets-started-button bg-white">
                        Get Started
       </button>
                    </Link> : <button className="gets-started-button bg-white" onClick={() => goToStakes('weekly')}>
                        Get Started
       </button>
                }

            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mx-2" id="div2">
                <div className="card-heading">Monthly</div>
                <p className="pt-2" style={{
                    font: "normal normal 300 1rem Rubik",
                    marginTop: "2.25rem"


                }}>February League</p>
                <a href="#faq3">
                    <p className="px-5 py-2 text-white" style={{
                        font: "normal normal 300 1rem Rubik"
                        , borderBottom: "1px solid white", borderTop: "1px solid white",

                    }} onClick={func1}>
                        Compete based on Overall Rank > </p>
                </a>

                <Link to="/winnings">
                    <p className="pt-2 text-white" style={{
                        font: "normal normal 300 1rem Rubik"


                    }}>Cash winnings for 1st , 2nd and 3rd ></p>
                </Link>
                {
                    !loggedIn ? <Link to="/signin"><button className="gets-started-button bg-white">
                        Get Started
       </button>
                    </Link> : <button className="gets-started-button bg-white" onClick={() => goToStakes('monthly')}>
                        Get Started
       </button>
                }
            </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center big-rounded-top big-rounded-bottom" id="how-to-play">
            {!loggedIn ?
                <>
                    <h1 className="pb-3 how-to-play-heading">How to Play</h1>
                    <p className="pt-3 how-to-play-text">
                        We made it easy to play and win! Login with your Fantasy premier League account and compete with
                        players close to your Overall Rank
           </p>
                    <div className="d-flex align-items-center justify-content-center circle-row">


                        <div className="d-flex  align-items-center justify-content-center  circles">

                            <div className="d-flex flex-column justify-content-center align-items-center main-circle">
                                <div className="rounded-circle d-flex align-items-center justify-content-center circle" >
                                    <img src={Select} style={{ height: "4.75rem" }} />
                                </div>
                                <h2   >Select</h2>
                                <p className="rounded-circle-text"
                                    style={{ maxWidth: "16rem" }}
                                >Select your Monthly or Weekly league.</p>
                            </div>
                            <div className="d-flex justify-content-center mx-n5 flex-grow-1" style={{
                                alignSelf: "stretch",
                                alignItems: "flex-start"
                            }}>
                                <img src={wave} className="stroke1" />

                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center main-circle">

                                <div className="rounded-circle d-flex align-items-center justify-content-center circle" >

                                    <img src="Choose.png" style={{ height: "8.75rem" }} />
                                </div>
                                <h2>Wager</h2>
                                <p className="rounded-circle-text"
                                    style={{ maxWidth: "16rem" }}
                                >Choose the league you want to participate in.</p>
                            </div>
                            <div className="d-flex  justify-content-center mx-md-n5 mx-lg-n7 flex-grow-1" style={{
                                alignSelf: "stretch",
                                alignItems: "flex-end"
                            }}>
                                <img src={wave} className="stroke2" />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center main-circle">

                                <div className="rounded-circle d-flex align-items-center justify-content-center circle" >
                                    <img src={Enjoy} style={{ height: "4.75rem" }} />

                                </div>
                                <h2   >Enjoy</h2>
                                <p className="rounded-circle-text"
                                    style={{ maxWidth: "16rem" }}

                                >Sit back, relax &amp; keep refreshing the results page</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center" id="faq">
                        <h1 className="how-to-play-heading">Frequently Asked Questions</h1>
                        <div className="my-3" style={{ maxWidth: "50.74rem" }}>
                            {
                                faqList.map((value, index) => {
                                    console.log(value)
                                    if (index < 5) {
                                        return (<Accordion key={index} id={`faq${index}`} expanded={index === 0 ? expandOR : index === 1 ? expandOR2 : index === 2 ? expandOR3 : index === 3 ? expandOR4 : index === 4 ? expandOR5 : false} onChange={() => handleChange(index)} className="mt-3" style={{
                                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029"

                                        }}>
                                            <AccordionSummary
                                                expandIcon={<AddIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"

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

                                                    {value.description.includes("click here")
                                                        ? <Link to="/winnings">{value.description}</Link>
                                                        : value.description
                                                    }
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>)
                                    }
                                })}

                        </div>
                        <Link to="/faq">
                            <button className="mt-2 py-2 px-5 bg-white">View All</button>

                        </Link>

                    </div>
                </>
                :
                <>
                    <h1 className="pb-3 how-to-play-heading">My Leagues</h1>
                    <p className="pt-3 how-to-play-text">
                        Your most recent leagues. To view all, current and past, click on View all
            </p>

                    <div id="table-leagues" style={{ overflow: 'auto' }}>
                        <div className="d-flex flex-column align-items-center tab1 main-padding">
                            <div className="d-flex align-items-center table-headings p-2 overflow-auto">
                                <div className="head-text" style={{ width: "10%" }}>#</div>
                                <div className="head-text" style={{ width: "30%" }}>GameWeek League</div>
                                <div className="head-text" style={{ width: "25%" }}>League No.</div>
                                <div className="head-text" style={{ width: "20%" }}>Your Rank</div>
                                <div className="head-text" style={{ width: "15%" }}>Stack</div>
                            </div>

                            {myLeagues.map((value, index) => {
                                if (index < 5) {
                                    return (<div key={index} className="d-flex align-items-center rows mb-2 p-3 overflow-auto">
                                        <div className="row-text" style={{
                                            width: "10%",
                                        }}>
                                            <div className="d-flex align-items-center justify-content-center" style={{
                                                border: "3px solid #0E335E",
                                                borderRadius: "14px",
                                                width: "3rem",
                                                height: "3rem",
                                                textAlign: 'center'
                                            }}>{value.id}</div>
                                        </div>
                                        <div className="row-text" style={{ width: "30%", minWidth: "8rem" }}>{value.gameWeakLeague}</div>
                                        <div className="row-text" style={{ width: "25%", minWidth: "5rem" }}>{value.leagueNo}</div>
                                        <div className="row-text" style={{ width: "20%", minWidth: "3rem" }}>{value.yourRank}</div>
                                        <div className="row-text pl-md-5 pl-sm-0" style={{ width: "18%", minWidth: "7rem" }}>{value.stake}
                                            <Link to="/my-leagues" className="ml-md-2 ml-sm-0">
                                                <img src={Arrow} style={{ height: "0.813rem" }} />
                                            </Link>
                                        </div>

                                    </div>)
                                }
                            })}
                        </div>
                    </div>
                    <Link to="/my-leagues">
                        <button className="mt-2 py-2 px-5 bg-white" id="leaguesBtn">View All</button>

                    </Link>




                </>
            }
        </div>
        <SubscribeLetter style={{ marginTop: "-6rem" }} />


    </>)
}
