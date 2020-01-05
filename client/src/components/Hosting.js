import React from 'react';
import './Hosting.css';
import Heroku from '../components/Heroku.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Hosting extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <div className="heroDiv2">
                        <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                        <h1 className="heroTitle2">Hosting Your Apps</h1>
                    </div>
                    <h3 id="subText4">Click on a hosting platform below to see further resources</h3>
                    <nav>
                        <Link to="/hosting/heroku"><img className="icon4" src="/images/Heroku.svg" alt="Heroku icon"/></Link>
                    </nav>
                    <Switch>
                        <Route path="/hosting/heroku">
                            <Heroku />
                        </Route>
                    </Switch>
                </>
            </Router>
        )
    }
}

export default Hosting
