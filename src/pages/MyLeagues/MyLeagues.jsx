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
    return (<div className="league-parent">
        <div className="d-flex flex-column justify-content-center align-items-center" id="bg" > </div>

        <div className="league-card">
            <div className="container">
                <div className="d-flex flex-column align-items-center tab1">
                    <div className="d-flex align-items-center table-headings p-2 overflow-auto">
                        <p className="head-text" style={{ width: "10%", minWidth: "3rem" }}>#</p>
                        <p className="head-text" style={{ width: "35%", minWidth: "8rem" }}>GameWeek League</p>
                        <p className="head-text" style={{ width: "25%", minWidth: "8rem" }}>League No.</p>
                        <p className="head-text" style={{ width: "12.5%", minWidth:"8rem" }}>Your Rank</p>
                        <p className="head-text" style={{ width: "12.5%", minWidth:"8rem" }}>Stack</p>
                    </div>

                    {myLeagues.map((value, index) => {
                        return (<div key={index} className="d-flex align-items-center rows mb-2 p-3 overflow-auto">
                            <p className="row-text" style={{
                                width: "10%",
                                border: "3px solid #0E335E",
                                borderRadius: "14px", minWidth:"3rem",
                            }}>{value.id}</p>
                            <p className="row-text" style={{ width: "35%", minWidth:"8rem" }}>{value.gameWeakLeague}</p>
                            <p className="row-text" style={{ width: "25%", minWidth:"8rem" }}>{value.leagueNo}</p>
                            <p className="row-text" style={{ width: "12.5%", minWidth:"8rem" }}>{value.yourRank}</p>
                            <p className="row-text pl-md-5 pl-sm-0" style={{ width: "12.5%" , minWidth:"8rem"}}>{value.stake}
                                <Link to="/mayhem" className="ml-md-3 ml-sm-0">
                                    <img src={Arrow} style={{ height: "0.813rem" }} />
                                </Link>
                            </p>

                        </div>)

                    })}
                </div>
            </div>
        </div>


        <SubscribeLetter />

    </div>)


}