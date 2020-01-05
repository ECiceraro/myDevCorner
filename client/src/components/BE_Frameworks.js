import React from 'react';
import './BE_Frameworks.css';
import Nodejs from '../components/Nodejs.js';
import Express from '../components/Express.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class BeFrameworks extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <div className="heroDiv2">
                        <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                        <h1 className="heroTitle2">Back-End Frameworks</h1>
                    </div>
                    <h3 id="subText4">Click on a framework below to see further resources</h3>
                    <nav>
                        <Link to="/be_frameworks/nodejs"><img className="icon4" src="/images/nodejs.svg" alt="nodejs icon"/></Link>
                        <Link to="/be_frameworks/express"><img className="icon4" src="/images/icon-express.svg" alt="express icon"/></Link>
                    </nav>
                    <Switch>
                        <Route path="/be_frameworks/nodejs">
                            <Nodejs />
                        </Route>
                        <Route path="/be_frameworks/express">
                            <Express />
                        </Route>
                    </Switch>
                </>
            </Router>
        )
    }
}

export default BeFrameworks
