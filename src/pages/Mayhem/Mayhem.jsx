import React, {useEffect, useState} from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import './Mayhem.css'
import api from "../../shared/api";
import Arrow from "../Home/Arrow.svg";

export default function Mayhem() {
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const mayhemLeague = useStoreState(state => state.obj.mayhemLeague)
     const [mayhem, setMayhem] = useState([])
    useEffect(() => {
        changeHeading("Method & Mayhem Money League!")
        changePara("View your standing in this league, Click on the row to view full team.")
        api.getMayhem(mayhemLeague).then(res => {
            setMayhem(res.data)
        })
    }, [])
    return (<>

        <div className="mayhem-parent position-relative">
            <div className="d-flex flex-column justify-content-center align-items-center big-rounded-top big-rounded-bottom" id="bg" > </div>
            <div className="mayhem-card mb-3">
                <div className="mayhem overflow-auto main-padding">
                    <div id="mayhem-length" className="">

                        <div className="d-flex align-items-center mayhem-headings p-2 overflow-auto">
                            <div className="heading-text" style={{ width: "7%", minWidth: "4rem" }}>O.Rank</div>
                            <div className="heading-text" style={{ width: "15%", minWidth: "5rem" }}>League Rank</div>
                            <div className="heading-text" style={{ width: "11%", minWidth: "5rem" }}>Manager</div>
                            <div className="heading-text" style={{ width: "7%", minWidth: "5rem" }}>Team</div>
                            <div className="heading-text" style={{ width: "15%", minWidth: "5rem" }}>GW Points(Hit)</div>
                            <div className="heading-text" style={{ width: "11%", minWidth: "5rem" }}>Chip</div>
                            <div className="heading-text" style={{ width: "11%", minWidth: "5rem" }}>Captain</div>
                            <div className="heading-text" style={{ width: "11%", minWidth: "5rem" }}>Vice</div>
                            <div className="heading-text" style={{ width: "11%", minWidth: "5rem" }}>Payout</div>

                        </div>

                        {mayhem.map((value, index) => {
                            return (
                                <Accordion className="mt-1 w-100" style={{
                            borderRadius: "30px",
                            boxShadow: "0px 3px 6px #00000029",

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}

                            >
                                <Typography className="d-flex align-items-center w-100 overflow-auto" >


                                    <div className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>{value.overall_rank}</div>
                                    <div className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}></div>
                                    <div className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>{value.username}</div>
                                    <div className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>{value.team.team_name}</div>
                                    <div className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</div>
                                    <div className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</div>
                                    <div className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>{value.captain}</div>
                                    <div className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>{value.vice_captain}</div>
                                { index===0 ? <div className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem",
                                    color:"green",fontWeight:"500", fontFamily:"Rubik" }}>$20</div>
                                : index===1 ? <div className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem",
                                    color:"green",fontWeight:"500", fontFamily:"Rubik" }}>$40</div>
                                : index===2 ? <div className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem",
                                    color:"green",fontWeight:"500", fontFamily:"Rubik" }}>$20</div>
                                : <div className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem",color:"red",
                                    fontWeight:"500", fontFamily:"Rubik" }}>-</div>

                                }

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                    {value.team.players.map((value) => {
                                        return (
                                            <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src={"/" + value.league_team_name.replace(/ /g, '') + ".png"} style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>{value.firstname} {value.lastname}</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        )
                                    })}
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <SubscribeLetter />

    </>)
}
