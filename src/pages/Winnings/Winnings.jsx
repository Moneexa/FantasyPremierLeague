import React, { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import './Winnings.css'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import GoldTrophy from './Gold Trophy.svg'
import SilverTrophy from './Silver Trophy.svg'
import BronzeTrophy from './Bronze Trophy.svg'
import Pdf from './doc.pdf'
import {Link} from 'react-router-dom'
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
                                    <th></th>
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
                                <tr>
                                    <td className="d-flex align-items-center justify-content-center p-5"
                                    >
                                        <img src={GoldTrophy} style={{ height: "3rem" }} />
                                        <div className="prize-heading text-center ml-2">1st Prize</div>
                                    </td>
                                    <td><div className="prize-heading text-center"> $10</div></td>
                                    <td><div className="prize-heading text-center"> $100 </div></td>
                                    <td><div className="prize-heading text-center"> $200</div></td>
                                    <td><div className="prize-heading text-center"> $500 </div></td>
                                    <td><div className="prize-heading text-center"> $1,000</div></td>
                                    <td ><div className="prize-heading text-center">$2,000</div></td>

                                    <td><div className="prize-heading text-center" style={{ paddingRight: "6.375rem" }}> $10,000</div></td>
                                </tr>
                                <tr>
                                    <td className="d-flex align-items-center justify-content-center p-5"
                                    >
                                        <img src={SilverTrophy} style={{ height: "3rem" }} />
                                        <div className="prize-heading text-center ml-2">2nd Prize</div>
                                    </td>
                                    <td><div className="prize-heading text-center"> $5</div></td>
                                    <td><div className="prize-heading text-center"> $50 </div></td>
                                    <td><div className="prize-heading text-center"> $100</div></td>
                                    <td><div className="prize-heading text-center"> $250 </div></td>
                                    <td><div className="prize-heading text-center"> $500</div></td>
                                    <td><div className="prize-heading text-center"> $1,000</div></td>
                                    <td><div className="prize-heading text-center" style={{ paddingRight: "6.375rem" }}> $2,000</div></td>

                                </tr>

                                <tr>
                                    <td className="d-flex align-items-center justify-content-center p-5">
                                        <img src={BronzeTrophy} style={{ height: "3rem" }} />
                                        <div className="prize-heading text-center ml-2">3rd Prize</div>
                                    </td>
                                    <td><div className="prize-heading text-center">$3</div></td>
                                    <td><div className="prize-heading text-center"> $30 </div></td>
                                    <td><div className="prize-heading text-center"> $60</div></td>
                                    <td><div className="prize-heading text-center"> $150 </div></td>
                                    <td><div className="prize-heading text-center"> $300</div></td>
                                    <td><div className="prize-heading text-center"> $600</div></td>

                                    <td><div className="prize-heading text-center" style={{ paddingRight: "6.375rem" }}> $3,000</div></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Link to={Pdf} target="_blank">

                            <button className="btn prize-button text-center text-white mr-3">Tie for 1st</button>
                        </Link>
                        <Link to={Pdf} target="_blank">

                            <button className="btn prize-button text-center text-white">Tie for 2nd</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <SubscribeLetter />
    </>)
}