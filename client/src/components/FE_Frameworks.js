import React from 'react';
import './FE_Frameworks.css';
import Nodejs from '../components/Nodejs.js';
import Jquery from '../components/Jquery.js';
import Angularjs from '../components/Angularjs.js';
import Reactjs from '../components/React.js';
import Bootstrap from '../components/Bootstrap.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class FeFrameworks extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <div className="heroDiv2">
                        <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                        <h1 className="heroTitle2">Front-End Frameworks</h1>
                    </div>
                    <h3 id="subText4">Click on a framework below to see further resources</h3>
                    <nav>
                        <Link to="/fe_frameworks/nodejs"><img className="icon4" src="/images/nodejs.svg" alt="nodejs icon"/></Link>
                        <Link to="/fe_frameworks/jquery"><img className="icon4" src="/images/jqueryIcon.svg" alt="jquery icon"/></Link>
                        <Link to="/fe_frameworks/angularjs"><img className="icon4" src="/images/angularIcon.svg" alt="angularjs icon"/></Link>
                        <Link to="/fe_frameworks/react"><img className="reactIcon" src="/images/reactIcon.svg" alt="react icon"/></Link>
                        <Link to="/fe_frameworks/bootstrap"><img className="icon4" src="/images/bootstrapIcon.svg" alt="bootstrap icon"/></Link>
                    </nav>
                    <Switch>
                        <Route path="/fe_frameworks/nodejs">
                            <Nodejs />
                        </Route>
                        <Route path="/fe_frameworks/jquery">
                            <Jquery />
                        </Route>
                        <Route path="/fe_frameworks/angularjs">
                            <Angularjs />
                        </Route>
                        <Route path="/fe_frameworks/react">
                            <Reactjs />
                        </Route>
                        <Route path="/fe_frameworks/bootstrap">
                            <Bootstrap />
                        </Route>
                    </Switch>
                </>
            </Router>
        )
    }
}

export default FeFrameworks
