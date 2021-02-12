import React, { useEffect, useState } from 'react'
import './FantasyReport.css'
import paper from './legal-paper.svg'

import { Link } from 'react-router-dom'
const google = window.google;

export default function FantasyReport() {
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
    const [st, setSt] = useState("")

    useEffect(() => {
        google.charts.load('current', {
            'packages': ['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
                ['State', ''],
                [{ v: 'US-NY', f: 'New York' }, 1],
                [{ v: 'US-AL', f: 'Alabama' }, 0],
                ['US-AK', 1],
                ['US-AR', 2],
                ['US-AK', 0],
                ['US-AZ', 0],
                [{ v: 'US-CL', f: 'Colorado' }, 0],
                ['US-CO', 0],
                ['US-DE', 0],
                [{ v: 'US-FL', f: 'Florida' }, 0],
                ['US-HI', 0],
                ['US-KS', 0],
                [{ v: 'US-KY', f: 'Kentucky' }, 0],
                [{ v: 'US-MI', f: 'Michigan' }, 0],
                ['US-MO', 0],
                [{ v: 'US-MS', f: 'Minnesota' }, 0],
                [{ v: 'US-MT', f: 'Massachussetts' }, 0],
                ['US-NE', 0],
                [{ v: 'US-NJ', f: 'New Jersey' }, 0],
                ['US-NM', 0],
                /* ['US-NY', 0], */
                ['US-OR', 0],
                ['US-PA', 0],
                [{ v: 'US-TX', f: 'Texas' }, 0],
                [{ v: 'US-UT', f: 'Utah' }, 0],
                ['US-VA', 0],
                [{ v: 'US-WA', f: 'Washington' }, 0],
                ['US-WV', 0],
                [{ v: 'US-WY', f: 'Wyoming' }, 0],
            ]);

            var options = {
                region: 'US', // Africa
                displayMode: 'regions',
                resolution: 'provinces',
                colors: ['#A52A8E', '#24336B', '#666766']
            };

            var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
            chart.draw(data, options);
        };
    })


    return (
        <>

            <div className="d-flex flex-column align-items-center justify-content-center main-padding">
                <div style={{ marginTop: "5rem", maxWidth: "40rem", width: "100%" }} id="map">
                    <div id="geochart-colors" style={{ width: "100%" }}></div>

                </div>
                <div className="button-rows mt-5">
                    <button className="button1 text-white text-center mr-md-5">Legal</button>
                    <button className="button2 text-white text-center mr-md-5">In progress</button>
                    <button className="button3 text-white text-center">No DFS Allowed</button>
                </div>
            </div>
            <div className="fixeddiv main-padding mt-5">
                <img src={paper} style={{ height: "100%", maxHeight: "7.9rem" }} />
                <div className="text-left text-black" style={{ fontSize: "0.9rem", fontFamily: "Rubik", fontWeight: "normal", marginLeft: "2.6rem" }}>
                    On May 14, 2018, the United States Supreme Court found the Professional and Amateur Sports Protection Act (PASPA), the federal law prohibiting states from authorizing sports betting, to be unconstitutional. It is now up to individual states to decide if they want to authorize and regulate sports betting in their state. <br /><br /><br />Congress can also take action on the authorization and regulation of sports betting but has so far left it up to individual states.
            </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center where-to-play main-padding mt-5">
                <div className="text-center text-black whereplay-head my-3">Where can you Play Fantasy Sports?</div>
                <div className="text-center text-black mb-3 whereplay-text">As of October 14, 2019, the states below offer sports betting or have passed legislation to allow sports betting, either in a casino or online. You do not need to be a resident of one of these states to place a bet, but you must be located in the state at the time you bet. That means placing a bet while on vacation is fair game. Don’t miss the chance to place a bet with FPL Play while you’re visiting a state where FPL Play is live!</div>
            </div>
        </>
    )
}