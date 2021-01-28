import React, { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import './Winnings.css'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import Trophy from './trophy.svg'
export default function Winnings() {
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    useEffect(() => {
        changeHeading("Winnings")
        changePara("")
    })
    return (<>
        <div className="winning-parent">
            {/* <div className="d-flex flex-column justify-content-center align-items-center" id="bg" > </div> */}

            <div className="winning-card">
                <div className="container">
                    <div className=" d-flex flex-column align-items-center justify-content-center my-3">
                        <div className="winning-text text-center text-black">
                            Below are the details describing about the winning prizes. Explore what you can win by putting a specific stake and start playing now. *All prices are in US Dollars ($)</div>
                    </div>
                    {/* <div className="d-flex flex-column justify-content-center align-items-center" id="bg" >  */}
                    {/* </div> */}
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center overflow-class big-rounded-top big-rounded-bottom"
                    style={{
                        background: "#E4F0F9B0",
                        marginTop: "1rem",
                        padding: "15rem 2rem"

                    }}
                >
                    <div style={{ maxWidth: "100%", overflow: 'auto' }}>

                        <table>
                            <thead>
                                <tr>
                                    <th style={{ minWidth: "26rem" }}></th>
                                    <th>
                                        <button className="btn prize-button text-center text-white">$1</button>
                                    </th>

                                    <th>
                                        <button className="btn prize-button text-center text-white">$10</button>

                                    </th>
                                    <th>
                                        <button className="btn prize-button text-center text-white">$20</button>

                                    </th>
                                    <th>

                                        <button className="btn prize-button text-center text-white">$50</button>
                                    </th>
                                    <th>

                                        <button className="btn prize-button text-center text-white">$100</button>
                                    </th>
                                    <th>

                                        <button className="btn prize-button text-center text-white">$200</button>
                                    </th>
                                    <th style={{ paddingRight: "6.375rem" }}>

                                        <button className="btn prize-button text-center text-white"

                                        >$500</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td className="d-flex align-items-center justify-content-center p-5"
                                        style={{ borderRight: "0.139rem solid #C8C8C866" }}
                                    >
                                        <img src={Trophy} style={{ height: "3rem" }} />
                                        <div className="prize-heading text-center ml-2">1st Prize</div>
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $10</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $100 </div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $200</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $500 </div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $1,000</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} ><div className="prize-heading text-center">$2,000</div></td>

                                    <td><div className="prize-heading text-center" style={{ paddingRight: "6.375rem" }}> $10,000</div></td>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td className="d-flex align-items-center justify-content-center p-5"

                                        style={{ borderRight: "0.139rem solid #C8C8C866" }}
                                    >
                                        <img src={Trophy} style={{ height: "3rem" }} />
                                        <div className="prize-heading text-center ml-2">2nd Prize</div>
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $5</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $50 </div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $100</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $250 </div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $500</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $1,000</div></td>
                                    <td><div className="prize-heading text-center" style={{ paddingRight: "6.375rem" }}> $2,000</div></td>

                                </tr>

                                <tr>
                                    <td className="d-flex align-items-center justify-content-center p-5" style={{ borderRight: "0.139rem solid #C8C8C866" }}>
                                        <img src={Trophy} style={{ height: "3rem" }} />
                                        <div className="prize-heading text-center ml-2">3rd Prize</div>
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center">$3</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $30 </div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $60</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $150 </div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $300</div></td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }}><div className="prize-heading text-center"> $600</div></td>

                                    <td><div className="prize-heading text-center" style={{ paddingRight: "6.375rem" }}> $3,000</div></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="m-3" style={{ maxWidth: "100%", overflow: 'auto' }}>

                        <table style={{ minWidth: '928px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="2" style={{ minWidth: "25rem" }} className="p-5">
                                        <button className="btn prize-button text-center text-white">Tie for 1st</button>
                                    </th>
                                    <th colSpan="2" style={{ minWidth: "25rem" }} className="p-5">
                                        <button className="btn prize-button text-center text-white">Tie for 2nd</button>
                                    </th>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <th style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        2 way
                                    </th>
                                    <th style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        7.5 each;no 2nd;3rd gets 3
                                    </th>
                                    <th style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        2 way
                                    </th>
                                    <th style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        4 each;no 3rd
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        3 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        6 each;no other winners
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        3 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        2.75 each
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        4 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        4.5 each
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        4 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        2 each
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        2 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        7.5 each;no 2nd;3rd gets 3
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        2 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        7.5 each;no 2nd;3rd gets 3
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        5 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        3.6 each
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        5 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        1.6 each
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        6 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        3 each
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        6 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        1.25 each
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        7 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        2.5 each
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        7 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        1 each
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        8 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        2.25 each
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        8 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        1 each
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: "0.139rem solid #C8C8C866" }}>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        9 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        2 each
                                    </td>
                                    <td style={{ borderRight: "0.139rem solid #C8C8C866" }} className="prize-heading text-left p-5">
                                        9 way
                                    </td>
                                    <td style={{ paddingRight: "11.9rem" }} className="prize-heading text-left p-5">
                                        1 each
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
        <SubscribeLetter />
    </>)
}