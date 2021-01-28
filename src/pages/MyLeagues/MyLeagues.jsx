import React, { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import { Link } from 'react-router-dom'
import Arrow from '../Home/Arrow.svg'
import './MyLeagues.css'
export default function MyLeagues() {
    const myLeagues = useStoreState(state => state.obj.myLeagues);
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)

    useEffect(() => {
        changeHeading("My Leagues")
        changePara("")

    }, [myLeagues])
    return (
        <div className="league-parent">

            <div className="position-relative">

                <div className="d-flex flex-column justify-content-center align-items-center big-rounded-top big-rounded-bottom" id="bg" > </div>

                <div className="league-card overflow-auto main-padding">
                    <div className="d-flex flex-column align-items-center tab1">

                        <div className="d-flex align-items-center table-headings p-3 overflow-auto">
                            <div className="head-text" style={{ width: "10%", minWidth: "3rem" }}>#</div>
                            <div className="head-text" style={{ width: "35%", minWidth: "8rem" }}>GameWeek League</div>
                            <div className="head-text" style={{ width: "25%", minWidth: "8rem" }}>League No.</div>
                            <div className="head-text" style={{ width: "12.5%", minWidth: "8rem" }}>Your Rank</div>
                            <div className="head-text text-center" style={{ width: "12.5%", minWidth: "8rem" }}>Stack</div>
                        </div>

                        {myLeagues.map((value, index) => {
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
                                <div className="row-text" style={{ width: "35%", minWidth: "8rem" }}>{value.gameWeakLeague}</div>
                                <div className="row-text" style={{ width: "25%", minWidth: "8rem" }}>{value.leagueNo}</div>
                                <div className="row-text" style={{ width: "12.5%", minWidth: "8rem" }}>{value.yourRank}</div>
                                <div className="row-text pl-md-5 pl-sm-0" style={{ width: "13.5%", minWidth: "8rem" }}>{value.stake}
                                    <Link to="/mayhem" className="ml-md-3 ml-sm-0">
                                        <img src={Arrow} style={{ height: "0.813rem" }} />
                                    </Link>
                                </div>

                            </div>)

                        })}
                    </div>
                </div>
            </div>
            <SubscribeLetter />

        </div>)


}