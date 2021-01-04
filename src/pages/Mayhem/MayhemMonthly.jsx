import React, { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandIcon from '@material-ui/icons/ExpandMore'
import './Mayhem.css'

export default function Mayhem() {
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    useEffect(() => {
        changeHeading("Method & Mayhem Money League!")
        changePara("View your standing in this league, Click on the row to view full team.")
    })
    return (<>
        <div className="mayhem-parent">
            <div className="d-flex flex-column justify-content-center align-items-center" id="bg" > </div>

            <div className="mayhem-card">
                <div className="container">


                    <div className="d-flex flex-column align-items-center mayhem">
                        <div className="d-flex align-items-center mayhem-headings py-2 overflow-auto">
                            <p className="heading-text" style={{ width: "5%", minWidth: "3rem" }}>Rank</p>
                            <p className="heading-text" style={{ width: "16%", minWidth: "5rem" }}>Team and Manager</p>
                            <p className="heading-text" style={{ width: "11%", minWidth: "3rem" }}>Total</p>
                            <p className="heading-text" style={{ width: "13%", minWidth: "3rem" }}>Monthly Points</p>

                            <p className="heading-text" style={{ width: "16%", minWidth: "3rem" }}>GW Points(Hits)</p>

                            <p className="heading-text" style={{ width: "9%", minWidth: "3rem" }}>Captain</p>
                            <p className="heading-text" style={{ width: "9%", minWidth: "3rem" }}>Vice</p>
                            <p className="heading-text" style={{ width: "9%", minWidth: "3rem" }}>Payout</p>

                        </div>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
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


                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "3rem" }}>1</p>
                                    <p className="text-left d-inline-block" style={{ width: "16%", minWidth: "6rem" }}>Victorious Secret</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>707</p>
                                    <p className="text-left d-inline-block" style={{ width: "13%", minWidth: "3rem" }}>61</p>
                                    <p className="text-left d-inline-block" style={{ width: "11%", minWidth: "3rem" }}>0</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>WildCard</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>De Bruyne</p>
                                    <p className="text-left d-inline-block" style={{ width: "12%", minWidth: "6rem" }}>Fernandas</p>
                                    <p className="text-left d-inline-block" style={{ width: "5.5%", minWidth: "4rem" }}>12/12</p>

                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", color: "#0F1F4E"
                                }} >
                                    <div className="d-flex flex-wrap">
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/AVL.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/BHA.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEE.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LEI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/LIV.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MCI.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",

                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/MUN.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/NEW.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/SOU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>
                                        <div className="d-flex flex-column m-md-3 m-sm-2">
                                            <img src="/WHU.png" style={{ height: "5rem" }} />
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}> McCarthy</p>
                                            <p style={{
                                                font: "normal normal 300 1rem Rubik",
                                            }}>1</p>
                                        </div>

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>


    </>)
}