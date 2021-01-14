import React, { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useLocation } from 'react-router-dom'

export default function Blank() {
    const location = useLocation()
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    useEffect(() => {

    })
    return (<>
        <div className="d-flex flex-column  justify-content-center align-items-center heading-row text-black text-center main-padding">
            <h1 style={{
                font: "normal normal medium 2.5rem Rubik",
                marginTop: "-3rem"
            }}>Disclaimer with terms and conditions</h1>
            <p className="text-center" style={{
                font: "normal normal 300 1.25rem Rubik;",
                maxWidth: "32rem"
            }}>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
           </p>
            <p>What is Lorem Ipsum?<br /><br />

             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>


    </>)
}