import React, { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import './Stakes.css'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import ArrowRight from '../Wallet/right-arrow.svg'
import { Link } from 'react-router-dom'
import Pdf from '../Winnings/doc.pdf'
export default function Stakes() {
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const stake = useStoreState(state => state.obj.stake);
    const changeSelectedStake = useStoreActions(actions => actions.obj.payStake)
    useEffect(() => {
        changeHeading("Welcome John,")
        changePara("We are glad to have you here, Select your stake to get started")
    })
    function payStakes(value) {
        changeSelectedStake(value)
    }

    return (<>
        <div className="stake-parent">
            <div className="d-flex flex-column justify-content-center align-items-center big-rounded-top big-rounded-bottom" id="bg" > </div>

            <div className="stakes-card">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                        {
                            stake.map((value, index) => {
                                if (index + 1 === stake.length) {
                                    return (
                                        <div key={index} className="d-flex flex-column justify-content-center align-items-flex-start last-stake m-3">
                                            <div className="child1-last-stake ml-1"></div>
                                            <div className="child2-last-stake mx-3"></div>
                                            <div className="last-stake-row mt-3">

                                                <div className="d-flex flex-column justify-content-center mr-3">
                                                    <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                                                        {Object.keys(value.prize)[0]}
                                                    </div>

                                                    <div className="text-left prize-amount">{Object.values(value.prize)[0]}</div>

                                                </div>
                                                <div className="d-flex flex-column justify-content-center mr-3">

                                                    <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                                                        {Object.keys(value.prize)[1]}</div>
                                                    <div className="text-left prize-amount">{Object.values(value.prize)[1]}</div>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center mr-3">

                                                    <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                                                        {Object.keys(value.prize)[2]}</div>
                                                    <div className="text-left prize-amount">{Object.values(value.prize)[2]}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center text-white mt-3">
                                                <div className="d-flex flex-column">
                                                    <div className="get-started">Get Started with</div>
                                                    <div className="prize-heading">{value.start}</div>
                                                </div>
                                                <Link to="/pay-stake" className="get-started-arrow">
                                                    <img src={ArrowRight} style={{
                                                        width: "4rem",
                                                        filter: "invert(96%) sepia(0%) saturate(0%) hue-rotate(111deg) brightness(104%) contrast(105%)"

                                                    }} onClick={payStakes({ start: value.start, prize: "$1,000" })} />
                                                </Link>


                                            </div>

                                        </div>)
                                }
                                else {
                                    return (<div key={index} className="d-flex flex-column justify-content-center align-items-flex-start div1-stake m-3">
                                        <div className="child1-stake ml-1"></div>
                                        <div className="child2-stake mx-3"></div>
                                        <div className="text-left prize mt-3" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                                            {Object.keys(value.prize)[0]}
                                        </div>

                                        <div className="text-left prize-amount mb-1">{Object.values(value.prize)[0]}</div>
                                        <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                                            {Object.keys(value.prize)[1]}</div>
                                        <div className="text-left prize-amount mb-1">{Object.values(value.prize)[1]}</div>
                                        <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                                            {Object.keys(value.prize)[2]}</div>
                                        <div className="text-left prize-amount mb-1">{Object.values(value.prize)[2]}
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center text-white mt-3">
                                            <div className="d-flex flex-column">
                                                <div className="get-started">Get Started with</div>
                                                <div className="prize-heading">{value.start}</div>
                                            </div>
                                            <Link to="/pay-stake" className="arrow" >
                                                <img src={ArrowRight} style={{
                                                    width: "4rem",
                                                    filter: "invert(96%) sepia(0%) saturate(0%) hue-rotate(111deg) brightness(104%) contrast(105%)"

                                                }} onClick={payStakes({ start: value.start, prize: "$1,000" })} />
                                            </Link>


                                        </div>

                                    </div>)
                                }

                            })

                        }



                    </div>

                </div>
                <div className="d-flex justify-content-center align-items-center m-5">
                    <Link to={Pdf} target="_blank"><button style={{
                        borderRadius: "17px",
                        /* padding: 0.5rem; */
                        fontSize: "20px",
                        fontWeight: "600",
                        fontFamily:"Rubik",
                        color: "#492477",
                        backgroundColor: "white",
                        boxShadow: "0px 3px 6px #00000029",
                        border: "1px solid #492477",
                        padding: "1rem 2rem"
                    }}>
                        See What you can win
                   </button>
                    </Link>
                </div>
            </div>

        </div>

        <SubscribeLetter />
    </>)

}