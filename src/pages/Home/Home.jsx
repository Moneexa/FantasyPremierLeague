import React from 'react'
import Header from '../Header/Header'
import './Home.css'
export default function Home() {

    return (<>
        <Header />
        <div className="row" id="cards" style={{
            position: "absolute",
            top: "50%",
            left: "23%",

        }}>
            <div className="d-flex container" id="container">

                <div className="d-flex flex-column justify-content-center align-items-center col-md-6 col-xs-12" id="div1" style={{
                    background: "#FF2882",
                    borderRadius: "50px",
                    opacity: "1",
                    padding: "2rem",
                    color: "white",
                    marginRight: "1rem",
                    boxShadow: "-3px 14px 52px -6px rgba(59,57,59,1)"

                }}> <h2>Weekly </h2>
                    <p className="pt-2" style={{ fontSize: "20px" }}>Compete with close matched OR</p>
                    <p className="px-3 py-2" style={{ fontSize: "20px", borderBottom: "1px solid white", borderTop: "1px solid white" }}>
                        Game Weak 10 League</p>
                    <p className="pt-2" style={{ fontSize: "20px" }}>Cash Prizes for Top 3</p>
                    <button style={{
                        width: "260px", "borderRadius": "26px",
                        padding: "0.25rem",
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "#492477"

                    }}>
                        Get Started
                    </button>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center col-md-6 col-xs-12" id="div2" style={{
                    background: "#963CFF",
                    borderRadius: "50px",
                    opacity: "1",
                    padding: "2rem",
                    color: "white",
                    boxShadow: "-3px 14px 52px -6px rgba(59,57,59,1)"

                }}> <h2>Monthly</h2>
                    <p className="pt-2" style={{ fontSize: "20px" }}>Compete with close matched OR</p>
                    <p className="py-3" style={{ fontSize: "20px", borderBottom: "1px solid white", borderTop: "1px solid white" }}>
                        Game Weak 10 League</p>
                    <p className="pt-2" style={{ fontSize: "20px" }}>Cash Prizes for Top 3</p>
                    <button style={{
                        width: "260px", "borderRadius": "26px",
                        padding: "0.25rem",
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "#492477"
                    }}>
                        Get Started
                </button>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center" id="how-to-play" style={{
            background: "#E4F0F9B0",
            borderRadius: "500px",
            marginTop:"5rem"
        }}><h2 style={{padding:"8rem"}}>How to Play</h2></div>

    </>

    )
}