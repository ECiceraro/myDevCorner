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
import Logout from './components/Logout.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
    render() {
        return (
            <Router>
                <>
                    <nav className="navbar sticky-top navbar-expand-lg nav-pills nav1">
                        <Link className="btn btn-primary" id="homeLink" to="/">My<br/> Dev <br/> Corner</Link>
                        <div className="dropdown">
                        <button type="button" className="dropdown-toggle nav-item" data-toggle="dropdown">Front-End</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link to="/frontend" className="dropdown-item active">Overview</Link>
                                <Link to="/fe_languages" className="dropdown-item active">Languages</Link>
                                <Link to="/fe_frameworks" className="dropdown-item active">Frameworks</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle nav-item" data-toggle="dropdown">Back-End</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link to="/backend" className="dropdown-item">Overview</Link>
                                <Link to="/be_languages" className="dropdown-item">Languages</Link>
                                <Link to="/be_frameworks" className="dropdown-item">Frameworks</Link>
                                <Link to="/databases" className="dropdown-item">Databases</Link>
                            </div>
                        </div>
                        <Link className="nav-item" to="/hosting">Hosting</Link>
                        <Link className='mr-auto nav-item' to="/community">Community</Link>
                        <Link className="nav-item2" to="/signup">Sign Up</Link>
                        <Link className="nav-item2" to="/login">Login</Link>
                        <Link className="nav-item2" to="/logout">Log Out</Link>
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
                            <Logout/>
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
