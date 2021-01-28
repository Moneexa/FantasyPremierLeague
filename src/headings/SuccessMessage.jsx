import React from 'react'
import {Link} from 'react-router-dom'
export default function SuccessMessage() {
    return (<div className="d-flex flex-column  justify-content-center align-items-center text-center"

        style={{
            marginTop: "5rem",
            marginBottom: "5rem"

        }}
    >
        <h1 style={{
            color: "white",
            font: "normal normal medium 2.5rem Rubik",
            marginTop: "-3rem"
        }}>FPL Account Synced Successfully</h1>

        <Link to="/sync-fpl">
            <button style={{
                borderRadius: "26px",
                marginTop: "2rem",
                padding: "0.25rem 2rem",
                fontSize: "1.5rem",
                fontFamily: "Rubik",
                fontWeight: "500",
                color: "#492477",
                border: "none",
                backgroundColor: "white"

            }}>Reset</button>
        </Link>

    </div>)
}