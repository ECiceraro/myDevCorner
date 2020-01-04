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
                    <nav className="navbar sticky-top navbar-expand-lg nav-pills">
                        <Link className="btn btn-primary" id="homeLink" to="/">My<br/> Dev <br/> Corner</Link>
                        <div className="dropdown">
                        <button type="button" className="dropdown-toggle nav-item btn btn-primary" data-toggle="dropdown">Front-End</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link to="/frontend" className="dropdown-item">Overview</Link>
                                <Link to="/fe_languages" className="dropdown-item">Languages</Link>
                                <Link to="/fe_frameworks" className="dropdown-item">Frameworks</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle nav-item btn btn-primary" data-toggle="dropdown">Back-End</button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link to="/backend" className="dropdown-item">Overview</Link>
                                <Link to="/be_languages" className="dropdown-item">Languages</Link>
                                <Link to="/be_frameworks" className="dropdown-item">Frameworks</Link>
                                <Link to="/databases" className="dropdown-item">Databases</Link>
                            </div>
                        </div>
                        <Link className="nav-item btn btn-primary" to="/hosting">Hosting</Link>
                        <Link className='mr-auto nav-item btn btn-primary' to="/community">Community</Link>
                        <Link className="nav-item2 btn btn-primary" to="/signup">Sign Up</Link>
                        <Link className="nav-item2 btn btn-primary" to="/login">Login</Link>
                        <Link className="nav-item2 btn btn-primary" to="/logout">Log Out</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                            <div className="heroWrapper">
                                <div className="heroDiv">
                                    <div className="heroTextBox">
                                        <h1 className="heroTitle">myDevCorner</h1>
                                        <h3 className="heroText">An interactive app that keeps track of all the technologies I've worked with.</h3>
                                    </div>
                                </div>
                            </div>

                            <h3 id="subTitle1">How It Works</h3>
                            <div className="subtextBoxContainer ">
                                <div className="subtextBox1">
                                    <h2 className="subtextTitle1">Tech <br /> Overviews</h2>
                                    <p className="subtext">Check out the tech overviews in the navbar at the top of the page to get an index of snap shots of each technology I've worked with.</p>
                                </div>
                                <div className="subtextBox2">
                                    <h2 className="subtextTitle2">Create <br /> An Account</h2>
                                    <p className="subtext">Check out the tech overviews in the navbar at the top of the page to get an index of snap shots of each technology I've worked with.</p>
                                </div>
                                <div className="subtextBox3">
                                    <h2 className="subtextTitle3">Community</h2>
                                    <p className="subtext3">After you've made an account, login and create a post on our dev forum. It can be a question, thought, code, whatever dev related thing you'd like.</p>
                                </div>
                            </div>
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
                            <a className="footerLink" href="https://linkedin.com/in/erikciceraro" target="_blank" rel="noopener noreferrer"><img className="icon" alt="linkedin icon" src="/images/linkedin.png"/></a>
                            <a className="footerLink" href="https://github.com/ECiceraro" target="_blank" rel="noopener noreferrer"><img className="icon" alt="github icon" src="/images/github.png"/></a>
                        <p className="footerText" >Application Developed By Erik Ciceraro</p>
                    </footer>
                </>
            </Router>
        )
    }
}

export default App;
