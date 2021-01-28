import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import './MyWinnings.css'
import DatePicker from 'react-datepicker'

export default function MyWinnings() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    function handleDateChange(date) {
        setStartDate(date)
    }
    function handleEndDateChange(date) {
        setEndDate(date)
    }
    return (<>
        <div className="position-relative" style={{ paddingBottom: "13rem" }}>
            <div className="d-flex flex-column justify-content-center align-items-center big-rounded-top big-rounded-bottom" id="bg" > </div>
            <div className="text-center text-black sub-winnings mt-3">Get detailed insights about what you have won so far.</div>
            <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="start-date mx-3">from</div>
                <TextField
                    id="date"
                    type="date"
                    defaultValue="2021-01-27"
                />
                <div className="end-date mx-3">to</div>
                <TextField
                    id="date"
                    type="date"
                    defaultValue="2021-01-27"

                />
            </div>
            <div className="winning-cards main-padding mt-5">
                <div className="d-flex flex-column align-items-center justify-content-center winning-card1 bg-white mx-md-3 my-sm-3">
                    <div className="winning-lead-heading1 text-center">Total Leagues Played</div>
                    <div className="winning-lead-number1 text-center">36</div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center winning-card2 bg-white mx-md-3 my-sm-3">
                    <div className="winning-lead-heading2 text-center">Leagues You Won*</div>
                    <div className="winning-lead-number2 text-center">22</div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center winning-card3 bg-white mx-md-3 my-sm-0">
                    <div className="winning-lead-heading3 text-center">Total Winnings</div>
                    <div className="winning-lead-number3 text-center">36</div>
                </div>
            </div>
            <div className="text-black text-center center-detail mt-3">*1st, 2nd or 3rd is considered as winning</div>
            <div className="winnings overflow-auto main-padding mt-5">

                <div className="d-flex flex-column align-items-center tab-1">

                    <div className="d-flex align-items-center justify-content-center tableHeadings p-3">
                        <div className="headText px-5" style={{ width: "25%", minWidth: "3rem" }}>Date</div>
                        <div className="headText" style={{ width: "35%", minWidth: "8rem" }}>Game Week League</div>
                        <div className="headText" style={{ width: "15%", minWidth: "8rem" }}>Wager</div>
                        <div className="headText" style={{ width: "25%", minWidth: "8rem" }}>Payout</div>
                    </div>

                    <div className="d-flex align-items-center rows1 mb-2 p-3 overflow-auto">
                        <div className="rowText px-5" style={{
                            width: "25%", minWidth: "3rem"
                        }}>
                            <div className="d-flex align-items-center justify-content-center" style={{

                                width: "3rem",
                                height: "3rem",
                                textAlign: 'center',
                                fontSize: "1rem",
                                fontWeight: "500",

                                fontFamily: "Rubik",
                            }}>8th January,2021</div>
                        </div>
                        <div className="rowText" style={{ width: "35%", minWidth: "8rem" }}>Game Week 07</div>
                        <div className="rowText" style={{ width: "15%", minWidth: "8rem" }}>$100</div>
                        <div className="rowText" style={{ width: "25%", minWidth: "8rem" }}>$300</div>
                    </div>
                    <div className="d-flex align-items-center rows1 mb-2 p-3 overflow-auto">
                        <div className="rowText px-5" style={{
                            width: "25%",
                        }}>
                            <div className="d-flex align-items-center justify-content-center" style={{

                                width: "3rem",
                                height: "3rem",
                                textAlign: 'center',
                                fontSize: "1rem",
                                fontWeight: "500",

                                fontFamily: "Rubik",
                            }}>8th January,2021</div>
                        </div>
                        <div className="rowText" style={{ width: "35%", minWidth: "8rem" }}>Game Week 07</div>
                        <div className="rowText" style={{ width: "15%", minWidth: "8rem" }}>$100</div>
                        <div className="rowText" style={{ width: "25%", minWidth: "8rem" }}>$300</div>
                    </div>
                    <div className="d-flex align-items-center rows1 mb-2 p-3 overflow-auto">
                        <div className="rowText px-5" style={{
                            width: "25%",
                        }}>
                            <div className="d-flex align-items-center justify-content-center" style={{

                                width: "3rem",
                                height: "3rem",
                                textAlign: 'center',
                                fontSize: "1rem",
                                fontWeight: "500",

                                fontFamily: "Rubik",
                            }}>8th January,2021</div>
                        </div>
                        <div className="rowText" style={{ width: "35%", minWidth: "8rem" }}>Game Week 07</div>
                        <div className="rowText" style={{ width: "15%", minWidth: "8rem" }}>$100</div>
                        <div className="rowText" style={{ width: "25%", minWidth: "8rem" }}>$300</div>
                    </div>
                    <div className="d-flex align-items-center rows1 overflow-auto mb-2 p-3">
                        <div className="rowText px-5" style={{
                            width: "25%",
                        }}>
                            <div className="d-flex align-items-center justify-content-center" style={{

                                width: "3rem",
                                height: "3rem",
                                textAlign: 'center',
                                fontSize: "1rem",
                                fontFamily: "Rubik",
                                fontWeight: "500",
                            }}>8th January,2021</div>
                        </div>
                        <div className="rowText" style={{ width: "35%", minWidth: "8rem" }}>Game Week 07</div>
                        <div className="rowText" style={{ width: "15%", minWidth: "8rem" }}>$100</div>
                        <div className="rowText" style={{ width: "25%", minWidth: "8rem" }}>$300</div>
                    </div>
                    <div className="d-flex align-items-center rows1 mb-2 p-3 overflow-auto">
                        <div className="rowText px-5" style={{
                            width: "25%",
                        }}>
                            <div className="d-flex align-items-center justify-content-center" style={{

                                width: "3rem",
                                height: "3rem",
                                textAlign: 'center',
                                fontSize: "1rem",
                                fontFamily: "Rubik",
                                fontWeight: "500",

                            }}>8th January,2021</div>
                        </div>
                        <div className="rowText" style={{ width: "35%", minWidth: "8rem" }}>Game Week 07</div>
                        <div className="rowText" style={{ width: "15%", minWidth: "8rem" }}>$100</div>
                        <div className="rowText" style={{ width: "25%", minWidth: "8rem" }}>$300</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}