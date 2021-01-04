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
import { Link } from 'react-router-dom'
import wave from './wave single.svg'


export default function Home() {

    const loggedIn = useStoreState(state => state.obj.loggedIn);
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
        else if(value===4){
            expandOR5 ? setExpand5(false) : setExpand5(true)
        }
    }
    return (<>
        <div className="d-flex align-items-center justify-content-center flex-wrap" id="cards">

            <div className="d-flex flex-column justify-content-center align-items-center mx-2" id="div1">
                <h2 className="card-heading"> Weekly </h2>
                <p className="pt-2" style={{
                    font: "normal normal 300 1rem Rubik"

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
                    !loggedIn ? <Link to="/signin"><button className="gets-started-button">
                        Get Started
                   </button>
                    </Link> : <Link to="/stakes"><button className="gets-started-button">
                        Get Started
                   </button></Link>
                }

            </div>

            <div className="d-flex flex-column justify-content-center align-items-center mx-2" id="div2">
                <h2>Monthly</h2>
                <p className="pt-2" style={{
                    font: "normal normal 300 1rem Rubik"

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
                    !loggedIn ? <Link to="/signin"><button className="gets-started-button">
                        Get Started
                   </button>
                    </Link> : <Link to="/stakes"><button className="gets-started-button">
                        Get Started
                   </button></Link>
                }
            </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center" id="how-to-play" style={{padding:"8rem"}}>
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
                                    <img src={Select} />
                                </div>
                                <h2   >Select</h2>
                                <p className="rounded-circle-text">Select your Monthly or Weekly league.</p>
                            </div>
                            <div className="d-flex justify-content-center mx-n5 flex-grow-1" style={{
                                alignSelf: "stretch",
                                alignItems: "flex-start"
                            }}>
                                <img src={wave} className="stroke1" />

                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center main-circle">

                                <div className="rounded-circle d-flex align-items-center justify-content-center circle" >

                                    <img src="Choose.png" style={{ height: "13rem" }} />
                                </div>
                                <h2>Wager</h2>
                                <p className="rounded-circle-text" >Choose the league you want to participate in.</p>
                            </div>
                            <div className="d-flex  justify-content-center mx-md-n5 mx-lg-n7 flex-grow-1" style={{
                                alignSelf: "stretch",
                                alignItems: "flex-end"
                            }}>
                                <img src={wave} className="stroke2" />
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center pl-3 main-circle">

                                <div className="rounded-circle d-flex align-items-center justify-content-center circle" >
                                    <img src={Enjoy} />

                                </div>
                                <h2   >Enjoy</h2>
                                <p className="rounded-circle-text">Sit back, relax &amp; keep refreshing the results page</p>
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
                                        return (<Accordion key={index} id={`faq${index}`} expanded={index === 0 ? expandOR : index === 1 ? expandOR2 : index === 2 ? expandOR3 : index === 3 ? expandOR4 : index===4? expandOR5 : false} onChange={() => handleChange(index)} className="mt-3" style={{
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
                            <button className="mt-2 py-2 px-5">View All</button>

                        </Link>

                    </div>
                </>
                :
                <>
                    <h1 className="pb-3 how-to-play-heading">My Leagues</h1>
                    <p className="pt-3 how-to-play-text">
                        Your most recent leagues. To view all, current and past, click on View all
                        </p>
                    <div className="d-flex flex-column align-items-center tab1">
                        <div className="d-flex align-items-center table-headings p-2 overflow-auto">
                            <p className="head-text" style={{ width: "10%" }}>#</p>
                            <p className="head-text" style={{ width: "30%" }}>GameWeek League</p>
                            <p className="head-text" style={{ width: "25%" }}>League No.</p>
                            <p className="head-text" style={{ width: "20%" }}>Your Rank</p>
                            <p className="head-text" style={{ width: "15%" }}>Stack</p>
                        </div>

                        {myLeagues.map((value, index) => {
                            if (index < 5) {
                                return (<div key={index} className="d-flex align-items-center rows mb-2 p-3 overflow-auto">
                                    <p className="row-text" style={{
                                        width: "10%",
                                        border: "3px solid #0E335E",
                                        borderRadius: "14px", minWidth: "2rem",
                                    }}>{value.id}</p>
                                    <p className="row-text" style={{ width: "30%", minWidth: "8rem" }}>{value.gameWeakLeague}</p>
                                    <p className="row-text" style={{ width: "25%", minWidth: "5rem" }}>{value.leagueNo}</p>
                                    <p className="row-text" style={{ width: "20%", minWidth: "3rem" }}>{value.yourRank}</p>
                                    <p className="row-text pl-md-5 pl-sm-0" style={{ width: "15%", minWidth: "7rem" }}>{value.stake}
                                        <Link to="/my-leagues" className="ml-md-5 ml-sm-0">
                                            <img src={Arrow} style={{ height: "0.813rem" }} />
                                        </Link>
                                    </p>

                                </div>)
                            }
                        })}
                    </div>
                    <Link to="/my-leagues">
                        <button className="mt-2 py-2 px-5" id="leaguesBtn">View All</button>

                    </Link>




                </>
            }


        </div>
        <SubscribeLetter style={{ marginTop: "0px" }} />

    </>

    )
}