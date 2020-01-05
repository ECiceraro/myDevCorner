import React from 'react';
import './FE_Languages.css';
import Html from '../components/HTML.js'
import Css from '../components/css.js'
import JavaScript from '../components/javascript.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class FeLanguages extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <div className="heroDiv2">
                        <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                        <h1 className="heroTitle2">Front-End Languages</h1>
                    </div>
                    <h3 id="subText4">Click on a language below to see further resources</h3>
                    <nav>
                        <Link to="/fe_languages/html"><img className="icon2" src="/images/htmlIcon.svg" alt="html icon"/></Link>
                        <Link to="/fe_languages/css"><img className="icon2" src="/images/cssIcon.svg" alt="css icon"/></Link>
                        <Link to="/fe_languages/javascript"><img className="icon3" src="/images/jsIcon.svg" alt="JavaScript icon"/></Link>
                    </nav>
                    <Switch>
                        <Route path="/fe_languages/html">
                            <Html />
                        </Route>
                        <Route path="/fe_languages/css">
                            <Css />
                        </Route>
                        <Route path="/fe_languages/javascript">
                            <JavaScript />
                        </Route>
                    </Switch>
                </>
            </Router>
        )
    }
}

export default FeLanguages
