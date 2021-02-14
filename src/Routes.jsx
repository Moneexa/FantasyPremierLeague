import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home'
import HowToPlay from './pages/HowToPlay/HowToPlay'
import Faq from './pages/FAQ/Faq'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Wallet from './pages/Wallet/Wallet'
import MyLeagues from './pages/MyLeagues/MyLeagues'
import Menu from './pages/Menu/Menu'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Mayhem from './pages/Mayhem/Mayhem'
import Stakes from './pages/Stakes/Stakes'
import Winnings from './pages/Winnings/Winnings'
import Blank from './pages/Blank/Blank'
import MayhemMonthly from './pages/Mayhem/MayhemMonthly'
import Profile from './pages/Profile/Profile'
import Messages from './pages/Messages/Messages'
import FantasyReport from './pages/FantasyReport/FantasyReport'
import Settings from './pages/Settings/Settings'
import MyWinnings from './pages/MyWinnings/MyWinnings'
import { useStoreState, useStoreActions } from 'easy-peasy'
export default function Routes() {
    const loggedIn = useStoreState(state => state.obj.loggedIn)
    return (
        <>
            { loggedIn ?

                <Router>

                    <Header />
                    <Switch>
                        <Redirect from="/" exact to="/home" />
                        <Route path="/home" component={Home} />
                        <Route path="/my-leagues" component={MyLeagues} />
                        <Route path="/wallet" component={Wallet} />
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/mayhem" component={Mayhem} />
                        <Route path="/menu" component={Menu} />
                        <Route path="/stakes" component={Stakes} />
                        <Route path="/winnings" component={Winnings} />
                        <Route path="/blank" component={Blank} />
                        <Route path="/mayhem-monthly" component={MayhemMonthly} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/messages" component={Messages} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/my-winnings" component={MyWinnings} />
                        <Route path="/tracker" component={FantasyReport} />
                        <Route path="/privacy-policy" component={PrivacyPolicy} />

                        {/* <Route path="/signin" component={SignIn} /> */}
                        {/* <Route path="/pay-stake" component={PayStakes} /> */}
                        {/* <Route path="/confirm" component={Confirmation} /> */}
                    </Switch>
                    <Footer />

                </Router>

                :


                <Router>
                    <Header />
                    <Switch>
                        <Redirect from="/" exact to="/home" />
                        <Route path="/home" component={Home} />
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/winnings" component={Winnings} />
                        <Route path="/blank" component={Blank} />



                    </Switch>
                    <Footer />
                </Router>


            }
        </>)

}
