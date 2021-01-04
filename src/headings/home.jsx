import React from 'react'
import { useStore, useStoreState } from 'easy-peasy'
import { Link } from 'react-router-dom'

export default function Home() {
    const loggedIn = useStoreState(state => state.obj.loggedIn)
    return (<div className="d-flex flex-column  justify-content-center align-items-flex-start heading-row">
        <h1 className="heading-h1"
        >
            {!loggedIn ? "What's your play today" : "Welcome John,"}
        </h1>
        {!loggedIn ? <Link to="/signin">
            <button className="start-playing">Start Playing</button>
        </Link> : <p className="para-text">
                We are glad to have you here, Select your stake to get started
                </p>}


    </div>)
}