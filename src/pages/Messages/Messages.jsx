import React, { useState } from 'react'
import './Messages.css'
import search from './search.svg'
import dollar from './dollar.svg'
import approved from './approved-signal.svg'
import traffic from './traffic-barrier.svg'
import transfer from './transfer.svg'
import { InputGroup, FormControl } from 'react-bootstrap'
export default function Messages() {
    const [slectWin, setSlectWin] = useState(false)
    const [slectEnroll, setSlectEnroll] = useState(false)
    const [slectReject, setSlectReject] = useState(false)
    const [slectTransfer, setSlectTransfer] = useState(false)

    const [showImg, setShowImg] = useState(false)
    function handleWin() {
        setSlectWin(true)
        setSlectEnroll(false)
        setSlectReject(false)
        setSlectTransfer(false)

    }
    function handleEnrolled() {
        setSlectEnroll(true)
        setSlectWin(false)
        setSlectReject(false)
        setSlectTransfer(false)

    }
    function handleRejected() {
        setSlectReject(true)
        setSlectEnroll(false)
        setSlectWin(false)
        setSlectTransfer(false)

    }
    function handleTransfer() {
        setSlectReject(false)
        setSlectEnroll(false)
        setSlectWin(false)
        setSlectTransfer(true)

    }
    return (<>
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="text-center text-black mess-heading my-3">
                Your Notifications Center. Keep an Eye on all Latest Happenings.
            </div>
            <div className="text-black text-center mess-text">
                Want to get updated by Email? Click here Opt-in
            </div>
            <div className="main-cont w-100" style={{ marginTop: "5rem" }}>
                <div className="d-flex flex-column align-items-center justify-content-center corner-card">
                    <InputGroup className="my-5 search-messages overflow-hidden" style={{
                        marginLeft: "6.34rem",
                        marginRight: "5.69rem",
                        marginBottom: "3.7rem"
                    }}>
                        <InputGroup.Prepend style={{backgroundColor:"transparent", border:"hidden"}}>
                            <InputGroup.Text id="basic-addon1">
                                <img src={search} style={{ height: "1.02rem" }} />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search Messages" className="text-white text-left input-text-bar" style={{border:"hidden",
                            backgroundColor:"transparent"
                            
                            }} />
                    </InputGroup>
                    <div className="d-flex flex-column justify-content-center messages-div w-100">

                        <div className="d-flex align-items-center justify-content-center msg-cards"

                            style={
                                slectWin ? {
                                    backgroundColor: "#3a4eff",

                                } :
                                    {
                                        backgroundColor: "transparent",
                                    }}
                            onClick={handleWin}
                        >
                            <div className="rounded-circle bg-white mr-3 d-flex align-items-center justify-content-center" style={{ height: "3.7rem", width: "3.7rem" }}>
                                <img src={dollar} style={{ height: "2.8rem" }} />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="text-white text-left icon-head">Win</div>
                                <div className="text-white text-left icon-text">This is the simple message text preview</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-5 msg-cards"
                            style={
                                slectEnroll ? {
                                    backgroundColor: "#3a4eff",

                                } :
                                    {
                                        backgroundColor: "transparent",
                                    }}
                            onClick={handleEnrolled}
                        >
                            <div className="rounded-circle bg-white mr-3 d-flex align-items-center justify-content-center" style={{ height: "3.7rem", width: "3.7rem" }}>
                                <img src={approved} style={{ height: "2.8rem" }} />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="text-white text-left icon-head">Enrolled</div>
                                <div className="text-white text-left icon-text">This is the simple message text preview</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-5 msg-cards"
                            style={
                                slectReject ? {
                                    backgroundColor: "#3a4eff",

                                } :
                                    {
                                        backgroundColor: "transparent",
                                    }}
                            onClick={handleRejected}
                        >
                            <div className="rounded-circle bg-white mr-3 d-flex align-items-center justify-content-center" style={{ height: "3.7rem", width: "3.7rem" }}>
                                <img src={traffic} style={{ height: "2.8rem" }} />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="text-white text-left icon-head">Rejected</div>
                                <div className="text-white text-left icon-text">This is the simple message text preview</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center my-5 msg-cards"
                            style={
                                slectTransfer ? {
                                    backgroundColor: "#3a4eff",

                                } :
                                    {
                                        backgroundColor: "transparent",
                                    }}
                            onClick={handleTransfer}
                        >
                            <div className="rounded-circle bg-white mr-3 d-flex align-items-center justify-content-center" style={{ height: "3.7rem", width: "3.7rem" }}>
                                <img src={transfer} style={{ height: "2.8rem" }} />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="text-white text-left icon-head">Transfer</div>
                                <div className="text-white text-left icon-text">This is the simple message text preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    slectWin ?
                        <>
                            <div className="d-flex flex-column justify-content-center chat-box">
                                <div className="message-header mb-auto">
                                    {slectWin ? "Win" : slectEnroll ? "Enrolled" : slectReject ? "Rejected" : slectTransfer ? "Transfer" : ""}
                                </div>
                                <div className="d-flex flex-column align-items-start justify-content-center chat-portion">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="messages text-left text-black">
                                            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen piece.
                                        </div>
                                        <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                            <div>10:30</div>
                                            <div>12 January, 2021</div>
                                        </div>

                                    </div>

                                    <div className="d-flex align-items-center justify-content-center mt-5">
                                        <div className="messages text-left text-black">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                           </div>
                                        <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                            <div>11:30</div>
                                            <div>21 January, 2021</div>
                                        </div>

                                    </div>


                                    <div className="d-flex align-items-center justify-content-center my-5">
                                        <div className="messages text-left text-black">

                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </div>
                                        <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                            <div>9:30</div>
                                            <div>21 January, 2021</div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </> :
                        slectEnroll ?
                            <>
                                <div className="d-flex flex-column justify-content-center chat-box">
                                    <div className="message-header mb-auto">
                                        {slectWin ? "Win" : slectEnroll ? "Enrolled" : slectReject ? "Rejected" : slectTransfer ? "Transfer" : ""}
                                    </div>
                                    <div className="d-flex flex-column align-items-start justify-content-center chat-portion">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="messages text-left text-black">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting factory. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                                        </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>10:30</div>
                                                <div>9 January, 2021</div>
                                            </div>

                                        </div>

                                        <div className="d-flex align-items-center justify-content-center mt-5">
                                            <div className="messages text-left text-black">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                           </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>6:30</div>
                                                <div>10 January, 2021</div>
                                            </div>

                                        </div>


                                        <div className="d-flex align-items-center justify-content-center my-5">
                                            <div className="messages text-left text-black">

                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>11:30</div>
                                                <div>22 January, 2021</div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </> : slectReject ?
                                <><div className="d-flex flex-column justify-content-center  chat-box">
                                    <div className="message-header mb-auto">
                                        {slectWin ? "Win" : slectEnroll ? "Enrolled" : slectReject ? "Rejected" : slectTransfer ? "Transfer" : ""}
                                    </div>
                                    <div className="d-flex flex-column align-items-start justify-content-center chat-portion">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="messages text-left text-black">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>10:30</div>
                                                <div>12 January, 2021</div>
                                            </div>

                                        </div>

                                        <div className="d-flex align-items-center justify-content-center mt-5">
                                            <div className="messages text-left text-black">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                           </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>10:30</div>
                                                <div>12 January, 2021</div>
                                            </div>

                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mt-5">
                                            <div className="messages text-left text-black">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                           </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>10:30</div>
                                                <div>12 January, 2021</div>
                                            </div>

                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mt-5">
                                            <div className="messages text-left text-black">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                           </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>10:30</div>
                                                <div>12 January, 2021</div>
                                            </div>

                                        </div>

                                        <div className="d-flex align-items-center justify-content-center my-5">
                                            <div className="messages text-left text-black">

                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                           </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>10:30</div>
                                                <div>12 January, 2021</div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                </> : slectTransfer ? <><div className="d-flex flex-column justify-content-center chat-box">
                                    <div className="message-header mb-auto">
                                        {slectWin ? "Win" : slectEnroll ? "Enrolled" : slectReject ? "Rejected" : slectTransfer ? "Transfer" : ""}
                                    </div>
                                    <div className="d-flex flex-column align-items-start justify-content-center chat-portion">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="messages text-left text-black">
                                                Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the word factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                           </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>9:30</div>
                                                <div>1 January, 2021</div>
                                            </div>

                                        </div>

                                        <div className="d-flex align-items-center justify-content-center mt-5">
                                            <div className="messages text-left text-black">
                                                Lorem Ipsum is simply dummy or sample text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                           </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>22:30</div>
                                                <div>12 January, 2021</div>
                                            </div>

                                        </div>


                                        <div className="d-flex align-items-center justify-content-center my-5">
                                            <div className="messages text-left text-black">

                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </div>
                                            <div className="time-stamp d-flex flex-column align-items-start justify-content-center ml-5">
                                                <div>13:30</div>
                                                <div>23 January, 2021</div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                </> :

                                    <div className="pic-image">
                                        <img src="Notifications Center.png" className="pic" />
                                    </div>
                }

            </div>

        </div >


    </>)
}