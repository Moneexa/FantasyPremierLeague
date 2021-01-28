import React, { useState, useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import './SubscribeLetter.css'
export default function SubscribeLetter() {
    const [email, setEmail] = useState("")
    const submitEmail = useStoreActions(actions => actions.obj.submitEmail)
    function handleChange(e) {
        setEmail(e.target.value)

    }

    function subscribeClick() {
        submitEmail(email)

    }
    return (
        <div className="d-flex align-items-center justify-content-center main-padding">

            <div className="subscribe-letter mb-5 py-5 px-xs-2">
                <div className="d-flex flex-column align-items-center justify-content-center text-center">

                    <div className="subscribe-heading">Join the Community</div>
                    <div className="subscribe-text" >Subscribe and get all the news that matters most delivered straight to you.</div>
                    <form className="d-flex flex-column align-items-center" style={{
                        maxWidth: "36.15rem",
                        width: "100%"
                    }}>
                        <input className="text-center text-white" style={{
                            color: "white",
                            maxWidth: "36.15rem",
                            width: "100%",
                            background: "transparent",
                            margin: "1rem 0rem 1rem 0rem",
                            border: "2px solid #FFFFFF",
                            borderRadius: "30px",
                            opacity: "1",
                            padding: "0.25rem 3rem 0.25rem 3rem",

                        }}
                            value={email} onChange={(e) => handleChange(e)} placeholder="Enter your email" />
                        <button className="mt-3 subscribe-button bg-white" type="button" onClick={subscribeClick}>Get Subscribed</button>

                    </form>

                </div>
            </div>
        </div>)
}