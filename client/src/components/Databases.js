import React from 'react';
import Mongodb from '../components/Mongodb.js';
import Postgresql from '../components/Postgresql.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Databases extends React.Component {
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
                        <h1 className="heroTitle2">Databases</h1>
                    </div>
                    <h3 id="subText4">Click on a database below to see further resources</h3>
                    <nav className="iconDiv">
                        <Link to="/databases/postgresql"><img className="icon4" src="/images/Postgresql-Icon.svg" alt="postgresql icon"/></Link>
                        <Link to="/databases/mongodb"><img className="icon4" src="/images/mongodbIcon.svg" alt="mongodb icon"/></Link>
                    </nav>
                    <Switch>
                        <Route path="/databases/postgresql">
                            <Postgresql />
                        </Route>
                        <Route path="/databases/mongodb">
                            <Mongodb />
                        </Route>
                    </Switch>
                </>
            </Router>
        )
    }
}

export default Databases
