import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home'
import HowToPlay from './pages/HowToPlay/HowToPlay'
import Faq from './pages/FAQ/Faq'
import SignIn from './pages/SignIn/SignIn'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import { useStoreActions, useStoreState } from 'easy-peasy'
export default function Routes() {
    // const loggedIn = useStoreState(state => state.loggedIn)
    return (
        <>
            <Router>

                <Header />
                <Switch>
                    <Redirect from="/" exact to="/home" />
                    <Route path="/home" component={Home} />
                    <Route path="/how-to-play" component={HowToPlay} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/signin" component={SignIn} />

                </Switch>
            </Router>
            <Footer />

        </>)


}