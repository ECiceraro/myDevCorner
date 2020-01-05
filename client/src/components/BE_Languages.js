import React from 'react';
import './BE_Languages.css';
import Php from '../components/php.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class BeLanguages extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <div className="heroDiv2">
                        <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                        <h1 className="heroTitle2">Back-End Languages</h1>
                    </div>
                    <h3 id="subText4">Click a language below to see further resources</h3>
                    <nav className="nav2">
                        <Link to="/fe_languages/php"><img className="icon3" src="/images/phpIcon.svg" /></Link>
                    </nav>
                    <Switch>
                        <Route path="/fe_languages/php">
                            <Php />
                        </Route>
                    </Switch>
                </>
            </Router>
        )
    }
}

export default BeLanguages
