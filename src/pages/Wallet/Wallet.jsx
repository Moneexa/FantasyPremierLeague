import React, { useState, useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import './Wallet.css'
import ArrowRight from './right-arrow.svg'
import UpdateArrow from './update-arrows.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCross, faReply } from '@fortawesome/free-solid-svg-icons'
// import { getPaymentRequest, getPaymentRequestButton } from '../../shared/service/stripe.service'

  const styledDeposit = {
    color: "#1ABCB0",
    fontSize: "1rem",
    fontFamily: "Rubik",
    textAlign: "right"

}
const styledWithdraw = {
    color: "#E6496A",
    fontSize: "1rem",
    fontFamily: "Rubik",
    textAlign: "right"


}

export default function Wallet() {
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const paymentHistory = useStoreState(state => state.obj.paymentHistory)

    const currentBalance = useStoreState(state => state.obj.currentBalance)
    useEffect(() => {
        changeHeading("Your Wallet")
        changePara("")
    })
    function clickWallet() {
        console.log("clicked")
        
    }

    return (
        <>
            <div className="wallet">
                <div className="row" id="cards">
                    <div className="d-flex container" id="container">

                        <div className="col-sm-12 col-lg-6 col-md-6 col-xs-12" id="div1">
                            <div className="d-flex flex-column" style={{ alignItems: "flex-start" }}>
                                <p className="div-text mt-auto">Current Balance</p>
                                <h2 className="card-heading">{`$${currentBalance}`}</h2>

                            </div>
                            <div className="d-flex align-items-center mt-5" style={{ justifyContent: "flex-end" }}>
                                <p className="div-text my-2">WithDraw</p>
                                <img src={ArrowRight} style={{ width: "3rem", marginLeft: "1rem" }} onClick={clickWallet}/>
                            </div>


                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center col-sm-12 col-lg-6  col-md-6 col-xs-12" id="div2">

                            <div className="child-div1 ml-1"></div>
                            <div className="child-div2"></div>
                            <div className="d-flex justify-content-center align-items-center mx-1 mt-auto">
                                <h3 className="wallet-head">Add to You Wallet</h3>
                                <img src={ArrowRight} style={{ width: "4rem", marginLeft: "1rem" }} onClick={clickWallet} />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center" id="how-to-play">
                <div className="d-flex flex-column payment-history p-3 m-3">
                    <div className="d-flex payment-history-rows">

                        <h4>Payment History</h4>
                        <div style={{ color: "white" }}>Payment History</div>
                    </div>
                    {
                        paymentHistory.map((value, index) => {
                            return (
                                <div className="d-flex payment-history-rows w-100 my-2" key={index}>
                                    <div className="d-flex align-items-center row-ind">

                                        {
                                            value.transType === "cardDeposit"
                                                ? <div className="d-flex align-items-center justify-content-center" style={{
                                                    height: "1.5rem", width: "1.5rem", borderRadius: "50%",
                                                    background: "linear-gradient(180deg, #00C6FF 0%, #0072FF 100%)"
                                                }}>
                                                    <img src={UpdateArrow} style={{
                                                        height: "0.8rem",
                                                        border: "transparent",
                                                        filter: "invert(96%) sepia(0%) saturate(0%) hue-rotate(111deg) brightness(104%) contrast(105%)"
                                                    }} />
                                                </div>
                                                :
                                                value.transType === "paypalDeposit"
                                                    ?
                                                    <div className="d-flex align-items-center justify-content-center" style={{
                                                        height: "1.5rem", width: "1.5rem", borderRadius: "50%",
                                                        background: "linear-gradient(180deg, #8500F9 0%, #E70EFF 100%)"
                                                    }}>
                                                        <FontAwesomeIcon icon={faPaypal} style={{
                                                            height: "0.8rem", color: "white"
                                                        }} />
                                                    </div>
                                                    :
                                                    value.transType === "withdraw"
                                                        ?
                                                        <div className="d-flex align-items-center justify-content-center" style={{
                                                            height: "1.5rem", width: "1.5rem", borderRadius: "50%",
                                                            background: "linear-gradient(180deg, #FE6DAD 0%, #FC9F35 100%)"
                                                        }}>
                                                            <FontAwesomeIcon icon={faCross} style={{
                                                                height: "0.8rem", color: "white", transform: "rotateZ(45deg)"


                                                            }} />
                                                        </div>
                                                        :
                                                        value.transType === "cancel"
                                                            ?
                                                            <div className="d-flex align-items-center justify-content-center" style={{
                                                                height: "1.5rem", width: "1.5rem", borderRadius: "50%",
                                                                background: "linear-gradient(180deg, #FE6DAD 0%, #FC9F35 100%)"
                                                            }}>
                                                                <FontAwesomeIcon icon={faReply} style={{
                                                                    height: "0.8rem", color: "white"
                                                                }} />
                                                            </div>
                                                            : ''
                                        }



                                        <div className="d-flex flex-column ml-3">
                                            <p style={{
                                                color: "#43424B",
                                                fontSize: "1rem",
                                                fontFamily: "Rubik",
                                                textAlign: "left"
                                            }}>{
                                                    value.transType === "cancel"
                                                        ? "Cancel" : value.transType === "cardDeposit"
                                                            ? "Deposit By Card" : value.transType === "paypalDeposit"
                                                                ? "Deposit By PayPal" : value.transType === "withdraw"
                                                                    ? "Withdraw" : ""

                                                }</p>
                                            <p style={{
                                                color: "#A6A9B7",
                                                fontFamily: "Rubik",
                                                fontSize: "0.8rem",
                                                textAlign: "left"
                                            }}>{value.date}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        {
                                            value.transType === "withdraw"
                                                ?
                                                <p style={styledWithdraw}>{value.amount}</p>
                                                :
                                                <p style={styledDeposit}>{value.amount}</p>

                                        }
                                        <p style={{
                                            color: "#A6A9B7",
                                            fontFamily: "Rubik",
                                            fontSize: "0.8rem",
                                            textAlign: "right"

                                        }}>{value.currency}</p>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </>)


}