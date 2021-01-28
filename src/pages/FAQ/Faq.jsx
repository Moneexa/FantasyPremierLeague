import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add'
import { useStoreState, useStoreActions } from 'easy-peasy'
import './Faq.css'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'

export default function Faq() {
    const [faqList, setFaqList] = useState([])
    const _faqList = useStoreState(state => state.obj.faqList);
    const heading = useStoreState(state => state.obj.heading);
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    useEffect(() => {
        window.scrollTo(0, 0)
        changeHeading("Frequently Asked Questions")
        setFaqList(_faqList)
        console.log(faqList ? faqList : '')

    }, [_faqList, setFaqList])
    return (<div className="faq-parent">
        <div className="position-relative" style={{ paddingBottom: "13rem" }}>
            <div className="d-flex flex-column justify-content-center align-items-center big-rounded-top big-rounded-bottom" id="bg" > </div>

            <div className="faq-card">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="my-3 main-padding" id="faq-length">
                        {
                            faqList.map((value, index) => {
                                console.log(value)
                                return (<Accordion key={index} className="mt-3" style={{
                                    borderRadius: "30px", boxShadow: "0px 3px 6px #00000029"

                                }}>
                                    <AccordionSummary
                                        expandIcon={<AddIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"

                                    >
                                        <Typography style={{
                                            font: "normal normal 300 1.9rem Rubik",
                                            color: "#10093D",
                                            fontWeight: "300"

                                        }}>{value.subHeading}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{
                                            textAlign: "left", font: "normal normal 300 1.5rem Rubik",
                                            color: "#10093D",
                                            fontWeight: "300"
                                        }} >
                                            {value.description.includes("click here")
                                                ? <Link to="/winnings">{value.description}</Link>
                                                : value.description
                                            }

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>)

                            })}
                    </div>
                </div>
            </div>
        </div>

        <SubscribeLetter />

    </div>)


}