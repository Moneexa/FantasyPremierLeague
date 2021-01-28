import React from 'react'

export default function Confirm() {
    return (<>

        <div className=" d-flex flex-column justify-content-center align-items-center text-center"

            style={{
                marginTop: "5rem",
                marginBottom: "16rem"

            }}
        >
            <h1 style={{
                textAlign:"center",
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

    </>)
}