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
export default function Routes() {
    return (
        <>
            <Router>

                <Header />
                <Switch>
                    <Redirect from="/" exact to="/home" />
                    <Route path="/home" component={Home} />

                    <Route path="/how-to-play" component={HowToPlay} />
                    <Route path="/dashboard" />

                    <Route path="/faq" component={Faq} />

                    <Route path="/my-leagues" component={MyLeagues} />

                    {/* <Route path="/signin" component={SignIn} /> */}
                    <Route path="/wallet" component={Wallet} />
                    <Route path="/privacy-policy" component={PrivacyPolicy} />
                    <Route path="/mayhem" component={Mayhem} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/stakes" component={Stakes} />
                    {/* <Route path="/pay-stake" component={PayStakes} /> */}
                    {/* <Route path="/confirm" component={Confirmation} /> */}
                    <Route path="/winnings" component={Winnings} />
                    <Route path="/blank" component={Blank} />
                    <Route path="/mayhem-monthly" component={MayhemMonthly} />


                </Switch>
                <Footer />

            </Router>

        </>)

}
