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
    return (<div className="subscribe-letter mt-5 py-5">
        <div className="d-flex flex-column align-items-center justify-content-center">

            <h1>Join the Community</h1>
            <p className="mt-3 text">Subscribe and get all the news that matters most delivered straight to you.</p>
            <form className="d-flex flex-column align-items-center justify-content-center">
                <input style={{
                    color: "white",
                    background: "transparent",
                    margin: "1rem 0rem 1rem 0rem",
                    border: "2px solid #FFFFFF",
                    borderRadius: "30px",
                    opacity: "1",
                    padding: "0.25rem 3rem 0.25rem 3rem"

                }}
                value={email} onChange={(e) => handleChange(e)} placeholder="Enter your best email" />
                <button className="mt-3 subscribe-button" type="button" onClick={subscribeClick}>Get Subscribed</button>

            </form>

        </div>
    </div>)
}