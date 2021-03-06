import React from 'react';
import Php   from '../components/php.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './BE_Languages.css';

class BeLanguages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        // auto scroll to top
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Router>
                <>
                    <div className="heroDiv2">
                        <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                        <h1 className="heroTitle2">Back-End Languages</h1>
                    </div>
                    <h3 id="subText4">Click a language below to see further resources</h3>
                    <nav className="iconDiv">
                        <Link to="/fe_languages/php"><img className="icon3" src="/images/phpIcon.svg" alt="php icon"/></Link>
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
