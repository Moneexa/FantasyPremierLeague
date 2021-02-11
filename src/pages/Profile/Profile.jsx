import React, { useState, useEffect } from 'react'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import './Profile.css'

export default function Profile() {
    const [firstName, setFirst] = useState("")
    const [secondName, setSec] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [add1, setAdd1] = useState("")
    const [add2, setAdd2] = useState("")
    function handleFirstName(e) {
        setFirst(e.target.value)
    }
    function handleSecondName(e) {
        setSec(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePhone(e) {
        setPhone(e.target.value)
    }
    function handleAdd1(e) {
        setAdd1(e.target.value)
    }
    function handleAdd2(e) {
        setAdd2(e.target.value)
    }

    return (<>
        <div className="main-profile main-padding mt-2 pr-0 ">
            <div className="profile-parent px-md-n2">

                <div className="d-flex flex-column align-items-center justify-content-center profile-box">
                    <img src="Profile.png" style={{
                        height: "9.79rem", marginTop: "1.89rem", marginLeft: "4.38rem", marginRight: "4.38rem"
                    }} />
                    <div className="profile-name text-center text-white">John Williams</div>
                    <button className="edit-btn bg-white">Edit Image</button>
                </div>
            </div>
            <div className="form-parent pl-md-3 pl-lg-5">
                <div className="d-flex flex-column align-items-start justify-content-center">
                    <div className="text-sm-center text-md-left text-black form-head">Account Data</div>
                    <form id="profile-form">
                        <div className="d-flex flex-wrap">
                            <div className="d-flex flex-column mr-3">
                                <label>FirstName:</label>
                                <input value={firstName} onChange={handleFirstName} className="profile-input" placeholder="John" />
                            </div>
                            <div className="d-flex flex-column mr-3">
                                <label>SecondName:</label>
                                <input value={secondName} onChange={handleSecondName} className="profile-input" placeholder="Williams" />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap mt-5">
                            <div className="d-flex flex-column mr-3">
                                <label>Email Address:</label>
                                <input value={email} className="profile-input" onChange={handleEmail} placeholder="johnwilliams@email.com" />
                            </div>
                            <div className="d-flex flex-column mr-3">
                                <label>Phone:</label>
                                <input value={phone} className="profile-input" onChange={handlePhone} placeholder="+1234567" />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap py-5 form-half">
                            <div className="d-flex flex-column">
                                <label>Address:</label>
                                <input value={add1} id="add1" className="profile-input my-2" onChange={handleAdd1} placeholder="Street No 222, House No. 176, New Apartments," />
                                <input value={add2} id="add2" className="profile-input my-2" onChange={handleAdd2} placeholder="New York, United States of America." />

                            </div>
                        </div>
                        <div className="d-flex flex-column mt-3 mr-3">
                            <label className="my-3" >Reset Password:</label>
                            <label>Current Password:</label>
                            <input value={phone} id="current-password" className="profile-input"  onChange={handlePhone} />
                            <div className="d-flex flex-wrap mt-3">
                                <div className="d-flex flex-column mr-3">
                                    <label>New Password:</label>
                                    <input value={phone} className="profile-input" onChange={handlePhone} placeholder="" />
                                </div>
                                <div className="d-flex flex-column mr-3">
                                    <label>Re-enter New Password:</label>
                                    <input value={phone} className="profile-input" onChange={handlePhone} placeholder="" />
                                </div>

                            </div>
                        </div>
                        <button className="save-changes mt-5">Save Changes</button>
                    </form>
                </div>

            </div>
        </div>
        <SubscribeLetter />
    </>)
}