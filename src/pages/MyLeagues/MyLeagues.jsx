import React, { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import { Link } from 'react-router-dom'
import Arrow from '../Home/Arrow.svg'
import Pagination from '@material-ui/lab/Pagination';
import './MyLeagues.css'
import api from "../../shared/api";
function DataShowingComponent({ pageNo }) {
    // const myLeagues = useStoreState(state => state.obj.myLeagues);
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const setMayhemLeague = useStoreActions(actions => actions.obj.setMayhemLeague)
    const history = useHistory();
    const [myLeagues, setMyLeagues] = useState([])
    useEffect(() => {
        changeHeading("My Leagues")
        changePara("")
        api.getMyLeagues().then(res => {
            console.log(res.data)
            setMyLeagues(res.data)
        })
    }, [])
    function setMayhem(league_id){
        setMayhemLeague(league_id);
        history.push('/mayhem');
    }
    const pageSize = 10;
    const rows = myLeagues.slice(pageSize * pageNo, (pageSize * pageNo) + pageSize);
    return (
        <>
            {console.log(rows)}
            {rows.map((value, index) => {
                return (<div key={index} className="d-flex align-items-center rows mb-2 p-3 overflow-auto">
                    <div className="row-text" style={{
                        width: "10%",
                    }}>
                        <div className="d-flex align-items-center justify-content-center" style={{
                            border: "3px solid #0E335E",
                            borderRadius: "14px",
                            width: "3rem",
                            height: "3rem",
                            textAlign: 'center'
                        }}>{value.id}</div>
                    </div>
                    <div className="row-text" style={{ width: "35%", minWidth: "8rem" }}>{value.league.league_name}</div>
                    <div className="row-text" style={{ width: "25%", minWidth: "8rem" }}>{value.league.id}</div>
                    <div className="row-text" style={{ width: "12.5%", minWidth: "8rem" }}>{value.yourRank}</div>
                    <div className="row-text pl-md-5 pl-sm-0" style={{ width: "13.5%", minWidth: "8rem" }}>{value.league.value}
                        <Link to="/mayhem" className="ml-md-3 ml-sm-0">
                            <img src={Arrow} style={{ height: "0.813rem" }} />
                        </Link>
                    </div>

                </div>)

            })}
        </>
    );
}

export default function MyLeagues() {
    const myLeagues = useStoreState(state => state.obj.myLeagues);
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const changePara = useStoreActions(actions => actions.obj.changeParaRed)
    const [page, setPage] = React.useState(1);
    const [weekly, setWeekly] = React.useState(true)
    const [monthly, setMonthly] = React.useState(false)
    const [totalPages, setTotalPages] = React.useState(Math.ceil(myLeagues.length / 10))

    useEffect(() => {
        changeHeading("My Leagues")
        changePara("")

    }, [myLeagues])
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleWeekly = e => {
        setWeekly(true)
        setMonthly(false)
    }
    const handleMontly = e => {
        setMonthly(true)
        setWeekly(false)
    }
    return (
        <div className="league-parent">

            <div className="position-relative">

                <div className="d-flex flex-column justify-content-center align-items-center big-rounded-top big-rounded-bottom" id="bg" > </div>

                <div className="league-card overflow-auto main-padding">
                    <div className="d-flex flex-column align-items-center tab1">

                        <div className="d-flex align-items-center table-headings p-3 overflow-auto">
                            <div className="head-text" style={{ width: "10%", minWidth: "3rem" }}>#</div>
                            <div className="head-text" style={{ width: "35%", minWidth: "8rem" }}>GameWeek League</div>
                            <div className="head-text" style={{ width: "25%", minWidth: "8rem" }}>League No.</div>
                            <div className="head-text" style={{ width: "12.5%", minWidth: "8rem" }}>Your Rank</div>
                            <div className="head-text text-center" style={{ width: "12.5%", minWidth: "8rem" }}>Stack</div>
                        </div>

                        <DataShowingComponent pageNo={page - 1} />

                        <Pagination count={totalPages} page={page} onChange={handleChange} />
                    </div>

                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <Link to="/stakes"> <button className="text-center mr-3" style={{
                            borderRadius: "17px",
                            /* padding: 0.5rem; */
                            fontSize: "20px",
                            fontWeight: "600",
                            fontFamily: "Rubik",
                            color: "#492477",
                            backgroundColor: "white",
                            boxShadow: "0px 3px 6px #00000029",
                            border: "1px solid #492477",
                            padding: "1rem 2rem"
                        }}>Join Weekly</button> </Link>
                        <Link to="/stakes">
                            <button className="text-center ml-3" style={{
                                borderRadius: "17px",
                                /* padding: 0.5rem; */
                                fontSize: "20px",
                                fontWeight: "600",
                                fontFamily: "Rubik",
                                color: "#492477",
                                backgroundColor: "white",
                                boxShadow: "0px 3px 6px #00000029",
                                border: "1px solid #492477",
                                padding: "1rem 2rem"
                            }}>Join Monthly</button>
                        </Link>
                    </div>
                </div>
            </div>
            <SubscribeLetter />

        </div>)


}
