import React from 'react'
import './FantasyReport.css'
import states from './US States.svg'
import paper from './legal-paper.svg'

export default function FantasyReport() {
    return (
        <>
        <div className="d-flex flex-column align-items-center justify-content-center main-padding">
         <div style={{marginTop:"5rem"}}>
           <img src={states} style={{width:"100%", maxWidth:"48.25rem"}}/>
         </div>
         <div className="button-rows mt-5">
             <button className="button1 text-white text-center mr-md-5">Legal</button>
             <button className="button2 text-white text-center mr-md-5">In progress</button>
             <button className="button3 text-white text-center">No DFS Allowed</button>
         </div>
        </div>
        <div className="fixeddiv main-padding mt-5">
            <img src={paper} style={{height:"100%", maxHeight:"7.9rem"}}/>
            <div classname="text-left text-black" style={{fontSize:"0.9rem", fontFamily:"Rubik", fontWeight:"normal", marginLeft:"2.6rem"}}>
            On May 14, 2018, the United States Supreme Court found the Professional and Amateur Sports Protection Act (PASPA), the federal law prohibiting states from authorizing sports betting, to be unconstitutional. It is now up to individual states to decide if they want to authorize and regulate sports betting in their state. <br /><br /><br />Congress can also take action on the authorization and regulation of sports betting but has so far left it up to individual states.
            </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center where-to-play main-padding mt-5">
           <div className="text-center text-black whereplay-head my-3">Where can you Play Fantasy Sports?</div>
           <div className="text-center text-black mb-3 whereplay-text">As of October 14, 2019, the states below offer sports betting or have passed legislation to allow sports betting, either in a casino or online. You do not need to be a resident of one of these states to place a bet, but you must be located in the state at the time you bet. That means placing a bet while on vacation is fair game. Don’t miss the chance to place a bet with FPL Play while you’re visiting a state where FPL Play is live!</div>
        </div>
        </>
    )
}