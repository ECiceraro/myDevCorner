import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/Home.js';
import Frontend from './components/Frontend.js';
import FeLanguages from './components/FE_Languages.js'
import FeFrameworks from './components/FE_Frameworks.js'
import Backend from './components/Backend.js';
import BeLanguages from './components/BE_Languages.js'
import BeFrameworks from './components/BE_Frameworks.js'
import Databases from './components/Databases.js';
import Hosting from './components/Hosting.js';
import Community from './components/Community.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Router>
                <>
                    <nav className="navbar sticky-top navbar-expand-lg nav-pills nav1">
                        <Link className="btn btn-primary" id="homeLink" to="/">My<br/> Dev <br/> Corner</Link>
                        <div className="dropdown">
                        <button type="button" className="dropdown-toggle nav-item btn btn-primary" data-toggle="dropdown" data-hover="dropdown">Front-End</button>
                            <div className="dropdown-menu">
                                <Link to="/frontend" className="dropdown-item onHover">Overview</Link>
                                <Link to="/fe_languages" className="dropdown-item onHover">Languages</Link>
                                <Link to="/fe_frameworks" className="dropdown-item onHover">Frameworks</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle nav-item btn btn-primary" data-toggle="dropdown">Back-End</button>
                            <div className="dropdown-menu">
                                <Link to="/backend" className="dropdown-item onHover">Overview</Link>
                                <Link to="/be_languages" className="dropdown-item onHover">Languages</Link>
                                <Link to="/be_frameworks" className="dropdown-item onHover">Frameworks</Link>
                                <Link to="/databases" className="dropdown-item onHover">Databases</Link>
                            </div>
                        </div>
                        <Link className="nav-item btn btn-primary" to="/hosting">Hosting</Link>
                        <Link className='mr-auto nav-item btn btn-primary' to="/community">Community</Link>
                        <Link className="nav-item2 btn btn-primary" to="/signup">Sign Up</Link>
                        <Link className="nav-item2 btn btn-primary" to="/login">Login</Link>
                        <Link className="nav-item2 btn btn-primary" to="/logout">Logout</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/frontend">
                            <Frontend/>
                        </Route>
                        <Route path="/fe_languages">
                            <FeLanguages/>
                        </Route>
                        <Route path="/fe_frameworks">
                            <FeFrameworks/>
                        </Route>
                        <Route path="/backend">
                            <Backend/>
                        </Route>
                        <Route path="/be_languages">
                            <BeLanguages/>
                        </Route>
                        <Route path="/be_frameworks">
                            <BeFrameworks/>
                        </Route>
                        <Route path="/databases">
                            <Databases/>
                        </Route>
                        <Route path="/hosting">
                            <Hosting/>
                        </Route>
                        <Route path="/community">
                            <Community/>
                        </Route>
                        <Route path="/signup">
                            <Signup/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/logout">
                            <Home/>
                        </Route>
                    </Switch>
                    <footer>
                            <a className="footerLink" href="https://linkedin.com/in/erikciceraro" target="_blank" rel="noopener noreferrer"><img className="icon" alt="linkedin" src="/images/linkedin.png"/></a>
                            <a className="footerLink" href="https://github.com/ECiceraro" target="_blank" rel="noopener noreferrer"><img className="icon" alt="github icon" src="/images/github.png"/></a>
                        <p className="footerText" >Application Developed By Erik Ciceraro</p>
                    </footer>
                </>
            </Router>
        )
    }
}

export default App;
