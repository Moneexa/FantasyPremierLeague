import React, { useEffect } from 'react'
import './PayStakes.css'
import { useStoreState, useStoreActions } from 'easy-peasy'
import ArrowRight from '../Wallet/right-arrow.svg'
import { Link } from 'react-router-dom'
export default function PayStakes() {
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const selectedStakes = useStoreState(state => state.obj.selectedStake)
    useEffect(() => {

    })
    return (<>
        <div className="d-flex flex-column  justify-content-center align-items-center"

            style={{
                marginTop: "5rem",
                marginBottom: "16rem"

            }}
        >
            <h1 style={{
                textAlign: "center",
                color: "white",
                font: "normal normal medium 2.5rem Rubik",
                marginTop: "-3rem"
            }}> Pay & Play</h1>


            <p className="text-center text-white" style={{
                font: "normal normal 300 1.25rem Rubik;",
                maxWidth: "32rem"
            }}>
                You are just a step away to enter the gaming experience, Confirm your payment and start playing.
        </p>
        </div>
        <div className="d-flex  justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-flex-start pay-card mx-2">
                <div className="ring1"></div>
                <div className="ring2"></div>

                <div className="text-left prize pt-3" style={{ fontSize: "1rem", color: "#C4C4C4" }}>1st prize</div>

                <p className="text-left prize pb-3" style={{ fontSize: "3.125rem", color: "#C4C4C4" }}>{selectedStakes.prize}</p>
                <div className="d-flex justify-content-between align-items-end content-stake mt-5">
                    <div className="d-flex flex-column">
                        <div className="text-left" style={{ color: "#0F1F4E", fontSize: "1.163rem" }}>Confirm</div>
                        <h3 className="prize-heading text-left">{selectedStakes.start}</h3>
                    </div>
                    <div className="d-flex  align-items-end">
                        <div style={{ fontSize: "1.313rem", color: "#0F1F4E" }}> Start Playing</div>
                        <Link to="/confirm">
                            <img src={ArrowRight} style={{
                                width: "4rem", marginLeft: "1rem",

                            }} />

                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>)
}