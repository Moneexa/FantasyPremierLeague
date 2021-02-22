import React, { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import Party from './Enjoy.svg'
import { Link } from 'react-router-dom'
import './confirm.css'
export default function Confirmation() {
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    useEffect(() => {

    })
    return (<>
        <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={Party} style={{
                marginTop: "3rem",

                marginBottom: "4rem",

                maxWidth: "6rem",
                width: "100%"

            }} />
            <div className="d-flex flex-column  justify-content-center align-items-center my-5">
                <h1 style={{
                    color: "white",
                    font: "normal normal medium 2.5rem Rubik",
                    marginTop: "-3rem"
                }}> Payment Confirmed</h1>
                <p className="text-center text-white" style={{
                    font: "normal normal 300 1.25rem Rubik;",
                    maxWidth: "32rem"
                }}>
                    We have received your payments. You will be contacted soon. Now Sit back, Relax & Enjoy!</p>
            </div>

            <div className="d-flex align-items-end justify-content-center ml-3 my-5">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Link to="/home">
                        <button className="btn" style={{
                            background: "white",
                            "borderRadius": "26px",
                            padding: "0.25rem 1.5rem 0.25rem 1.5rem",
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#492477",
                            border: "none"

                        }}>Dashboard</button></Link>

                    <div style={{
                        textAlign: "center",
                        paddingTop: "2rem",
                        font: "normal normal 300 19px/23px Rubik",
                        color: "#FFFFFF", width: "50%"
                    }}>Go To Your Dashboard</div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Link to="/my-leagues">
                        <button className="btn" style={{
                            background: "white",
                            "borderRadius": "26px",
                            padding: "0.25rem 1.5rem 0.25rem 1.5rem",
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#492477",
                            border: "none"

                        }}>My Leagues</button>
                    </Link>

                    <div style={{
                        textAlign: "center",
                        paddingTop: "2rem",
                        font: "normal normal 300 19px Rubik",
                        color: "#FFFFFF", width: "75%"
                    }}>View your Current or previous Leagues</div>
                </div>
            </div>
        </div>
    </>)
}
