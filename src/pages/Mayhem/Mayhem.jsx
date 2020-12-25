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
                        <div className="d-flex align-items-center mayhem-headings py-2">
                            <p className="heading-text" style={{ width: "5.5%" }}>Rank</p>
                            <p className="heading-text" style={{ width: "16.5%" }}>Team and Manager</p>
                            <p className="heading-text" style={{ width: "11.5%" }}>Total</p>
                            <p className="heading-text" style={{ width: "12.5%" }}>GW Points</p>
                            <p className="heading-text" style={{ width: "11.5%" }}>Chip</p>
                            <p className="heading-text" style={{ width: "11.5%" }}>Captain</p>
                            <p className="heading-text" style={{ width: "11.5%" }}>Vice</p>
                            <p className="heading-text" style={{ width: "11.5%" }}>Players Played</p>

                        </div>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="mt-1" style={{
                            borderRadius: "30px", boxShadow: "0px 3px 6px #00000029", width: "100%"

                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" style={{
                                    boxShadow: "0px 3px 6px #00000029", 
                                }}

                            >
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>1</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>Victorios Secret</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>707</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D"
                                    ,
                                }}>61</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>0</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Wildcard</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik", 
                                    color: "#10093D",

                                }}>DeBruyne</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>Fernandas</Typography>
                                <Typography style={{
                                    font: "normal normal 300 1.25rem Rubik",
                                    color: "#10093D",

                                }}>12/12</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{
                                    textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                    color: "#10093D",
                                    fontWeight: "300"
                                }} >
                                    description
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    </>)
}