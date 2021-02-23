import React, { useState, useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import './Stakes.css'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
import ArrowRight from '../Wallet/right-arrow.svg'
import { Link, useHistory } from 'react-router-dom'
import api from "../../shared/api"
import Pdf from '../Winnings/doc.pdf'

export default function Stakes() {
  const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
  const changePara = useStoreActions(actions => actions.obj.changeParaRed)
  const getLeagues = useStoreActions(actions => actions.obj.getLeaguesRed)
  const leagueStakes = useStoreState(state => state.obj.leagueStakes)
  const [leagues, setLeagues] = useState([])
  const stake = useStoreState(state => state.obj.stake);
  const history = useHistory()
  const changeSelectedStake = useStoreActions(actions => actions.obj.payStake)
  useEffect(() => {
    changeHeading("Welcome John,")
    changePara("We are glad to have you here, Select your stake to get started")
    api.getLeagues(leagueStakes).then(res => {
      setLeagues(res.data)
    })
  }, [])
  function payStakes(value) {
    changeSelectedStake(value)
    history.push('/pay-stake')
  }

  return (<>
    <div className="stake-parent">
      <div className="d-flex flex-column justify-content-center align-items-center big-rounded-top big-rounded-bottom" id="bg" > </div>

      <div className="stakes-card">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            {
              leagues.map((league, value) => {
                if (value + 1 === leagues.length) {
                  return (
                    <div key={league.id} className="d-flex flex-column justify-content-center align-items-flex-start last-stake m-3">
                      <div className="child1-last-stake ml-1"></div>
                      <div className="child2-last-stake mx-3"></div>
                      <div className="last-stake-row mt-3">
                        <div className="d-flex flex-column justify-content-center mr-3">
                          <div className="text-left prize mt-3" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                            {league.prize[0].label}
                          </div>
                          <div className="text-left prize-amount mb-1">{league.prize[0].label}</div>
                        </div>
                        <div className="d-flex flex-column justify-content-center mr-3">
                          <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                            {league.prize[1].label}</div>
                          <div className="text-left prize-amount mb-1">{league.prize[1].label}</div>
                        </div>
                        <div className="d-flex flex-column justify-content-center mr-3">
                          <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                            {league.prize[2].label}</div>
                          <div className="text-left prize-amount mb-1">{league.prize[2].label}</div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center text-white mt-3">
                        <div className="d-flex flex-column">
                          <div className="get-started">Get Started with</div>
                          <div className="prize-heading">${league.value}</div>
                        </div>
                        <div onClick={() => payStakes({ start: league.value, prize: league.prize[0].label, league_id: league.id })}
                          className="get-started-arrow">
                          <img src={ArrowRight} style={{
                            width: "4rem",
                            filter: "invert(96%) sepia(0%) saturate(0%) hue-rotate(111deg) brightness(104%) contrast(105%)"
                          }} />
                        </div>
                      </div>
                    </div>
                  )
                }
                else {
                  return (
                    <div key={league.id} className="d-flex flex-column justify-content-center align-items-flex-start div1-stake my-3 ml-1">
                      <div className="child1-stake ml-1"></div>
                      <div className="child2-stake mx-3"></div>
                      <div className="text-left prize mt-3" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                        {league.prize[0].label}
                      </div>
                      <div className="text-left prize-amount mb-1">{league.prize[0].label}</div>
                      <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                        {league.prize[1].label}
                      </div>
                      <div className="text-left prize-amount mb-1">{league.prize[1].label}</div>
                      <div className="text-left prize" style={{ fontSize: "0.5rem", fontFamily: "Rubik" }}>
                        {league.prize[2].label}</div>
                      <div className="text-left prize-amount mb-1">{league.prize[2].label}</div>
                      <div className="d-flex justify-content-between align-items-center text-white mt-3">
                        <div className="d-flex flex-column">
                          <div className="get-started">Get Started with</div>
                          <div className="prize-heading">${league.value}</div>
                        </div>
                        <div onClick={() => payStakes({ start: league.value, prize: league.prize[0].label, league_id: league.id })}
                          className="arrow">
                          <img src={ArrowRight} style={{
                            width: "4rem",
                            filter: "invert(96%) sepia(0%) saturate(0%) hue-rotate(111deg) brightness(104%) contrast(105%)"
                          }} />
                        </div>
                      </div>
                    </div>
                  )
                }

              })
            }

          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center m-5">
          <Link to={Pdf} target="_blank"><button style={{
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
          }}>
            In case of tie
                      </button>
          </Link>
        </div>
      </div>
    </div>
    <SubscribeLetter />
  </>)

}
