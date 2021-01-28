import React, { useState, useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import './Wallet.css'
import ArrowRight from './right-arrow.svg'
import UpdateArrow from './update-arrows.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCross, faReply } from '@fortawesome/free-solid-svg-icons'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
// import { getPaymentRequest, getPaymentRequestButton } from '../../shared/service/stripe.service'
import { Modal, Button } from 'react-bootstrap'

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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <Modal show={show} onHide={handleClose} style={{ borderRadius: "100px" }}>
                <Modal.Header closeButton>
                </Modal.Header>


                <Modal.Body className="mx-md-5 mx-sm-3 text-left d-flex flex-column align-items-center justify-content-center">
                    <p style={{
                        font: " normal normal medium 1.4rem Rubik",
                        color: "#064B8D"
                    }}>Add you Payment Deatils</p>
                    <p style={{
                        font: "normal normal normal 0.875rem Montserrat",
                        color: "#064B8D"

                    }}>Enter your payment info below.</p>
                    <form className="">

                    </form>
                </Modal.Body>
            </Modal>
            <div className="wallet">
                <div className="d-flex align-items-center justify-content-center flex-wrap w-100" id="cards"
                    style={{ marginTop: "-12rem" }}
                >

                    <div className="mx-2" id="div1" >
                        <div className="d-flex flex-column" style={{
                            alignItems: "flex-start", padding: "2rem 6rem 1rem 1rem"
                        }}>
                            <p className="div-text mt-auto">Current Balance</p>
                            <h2 className="card-heading">{`$${currentBalance}`}</h2>

                        </div>
                        <div className="d-flex align-items-center" style={{ justifyContent: "flex-end", paddingTop: "3rem" }}>
                            <p className="div-text my-2">WithDraw</p>
                            <img src={ArrowRight} style={{ width: "3rem", marginLeft: "1rem" }} onClick={handleShow} />
                        </div>


                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-end mx-2" id="div2">

                        <div className="child-div1 ml-1"></div>
                        <div className="child-div2"></div>
                        <div className="d-flex justify-content-center align-items-center mx-1" style={{
                            padding: "12rem 2.62rem 1rem",
                        }}>
                            <div className="wallet-head">Add to Your Wallet</div>
                            <img src={ArrowRight} style={{ width: "4rem", paddingLeft: "1.31rem" }} onClick={handleShow} />

                        </div>

                    </div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center how-to-play big-rounded-top big-rounded-bottom">
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
            <SubscribeLetter />
        </>)


}