import React, { useEffect, useState } from 'react'
import './FantasyReport.css'
import paper from './legal-paper.svg'

import { Link } from 'react-router-dom'

export default function FantasyReport() {
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
    const [st, setSt] = useState("")
    const google = window.google;

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
                [{ v: 'US-WA', f: 'Washington' }, 1],
                [{ v: 'US-OR', f: 'Oregon' }, 0],
                [{ v: 'US-CA', f: 'California' }, 1],
                [{ v: 'US-ID', f: 'Idaho' }, 2],
                [{ v: 'US-NV', f: 'Nevada' }, 0],
                [{ v: 'US-AZ', f: 'Arizona' }, 0],
                [{ v: 'US-UT', f: 'Utah' }, 0],
                [{ v: 'US-MT', f: 'Montana' }, 1],
                [{ v: 'US-WY', f: 'Wyoming' }, 0],
                [{ v: 'US-CO', f: 'Colorado' }, 0],
                [{ v: 'US-NM', f: 'New Mexico' }, 1],
                [{ v: 'US-ND', f: 'North Dakota' }, 0],
                [{ v: 'US-SD', f: 'South Dakota' }, 0],
                [{ v: 'US-NE', f: 'Nebraska' }, 0],
                [{ v: 'US-KS', f: 'Kansas' }, 0],
                [{ v: 'US-OK', f: 'Oklahoma' }, 0],
                [{ v: 'US-TX', f: 'Texas' }, 0],
                [{ v: 'US-MN', f: 'Minnesota' }, 0],
                [{ v: 'US-IA', f: 'Iowa' }, 0],
                [{ v: 'US-MO', f: 'Missouri' }, 1],
                [{ v: 'US-AR', f: 'Arkansas' }, 1],
                [{ v: 'US-LA', f: 'Louisana' }, 1],
                [{ v: 'US-WI', f: 'Wisconsin' }, 0],
                [{ v: 'US-IL', f: 'Illinois' }, 0],
                [{ v: 'US-TN', f: 'Tennessee' }, 0],
                [{ v: 'US-MS', f: 'Mississipi' }, 0],
                [{ v: 'US-MI', f: 'Michigan' }, 0],
                [{ v: 'US-IN', f: 'Indiana' }, 0],
                [{ v: 'US-KY', f: 'Kentucky' }, 0],
                [{ v: 'US-AL', f: 'Alabama' }, 0],
                [{ v: 'US-OH', f: 'Ohio' }, 0],
                [{ v: 'US-WV', f: 'West Virginia' }, 0],
                [{ v: 'US-VA', f: 'Virginia' }, 0],
                [{ v: 'US-NC', f: 'North Carolina' }, 0],
                [{ v: 'US-SC', f: 'South Carolina' }, 0],
                [{ v: 'US-GA', f: 'Georgia' }, 0],
                [{ v: 'US-FL', f: 'Florida' }, 0],
                [{ v: 'US-MD', f: 'Maryland' }, 0],
                [{ v: 'US-PA', f: 'Pennsylvania' }, 0],
                [{ v: 'US-DE', f: 'Delaware' }, 0],
                [{ v: 'US-NJ', f: 'New Jersey' }, 0],
                [{ v: 'US-NY', f: 'New York' }, 0],
                [{ v: 'US-CT', f: 'Connecticut' }, 2],
                [{ v: 'US-RI', f: 'Rhode Island' }, 2],
                [{ v: 'US-CT', f: 'Connecticut' }, 2],
                [{ v: 'US-MA', f: 'Massachusetts' }, 2],
                [{ v: 'US-VT', f: 'Vermont' }, 2],
                [{ v: 'US-NH', f: 'New Hampshire' }, 2],
                [{ v: 'US-ME', f: 'Maine' }, 0],
                [{ v: 'US-AK', f: 'Alaska' }, 0],
                [{ v: 'US-HI', f: 'Hawaii' }, 0]


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
