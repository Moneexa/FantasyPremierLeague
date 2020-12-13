import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HowToPlay from './pages/HowToPlay/HowToPlay'
import Faq from './pages/FAQ/Faq'
import SignIn from './pages/SignIn/SignIn'
export default function Routes() {
    return (<>
        <Router>
            <Switch>
                <Route exact to="/" redirect="/" component={Home} />
                <Route path="/how-to-play" exact component={HowToPlay} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/signin" exact component={SignIn} />

            </Switch>
        </Router>
    </>

    )

}