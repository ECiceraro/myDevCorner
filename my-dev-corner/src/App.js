import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/Home.js';
import Frontend from './components/Frontend.js';
import FE_Languages from './components/FE_Languages.js'
import FE_Frameworks from './components/FE_Frameworks.js'
import Backend from './components/Backend.js';
import BE_Languages from './components/BE_Languages.js'
import BE_Frameworks from './components/BE_Frameworks.js'
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
                <div className="container-fluid Main1">
                    <nav>
                        <Link to="/">My Dev Corner</Link>
                        <dropdown>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Front-End</a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link to="/frontend" className="dropdown-item">Overview</Link>
                                <Link to="/fe_languages" className="dropdown-item">Languages</Link>
                                <Link to="/fe_frameworks" className="dropdown-item">Frameworks</Link>
                            </div>
                        </dropdown>
                        <dropdown>
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Back-End</a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link to="/backend" className="dropdown-item">Overview</Link>
                                <Link to="/be_languages" className="dropdown-item">Languages</Link>
                                <Link to="/be_frameworks" className="dropdown-item">Frameworks</Link>
                                <Link to="/databases" className="dropdown-item">Databases</Link>
                            </div>
                        </dropdown>
                        <Link to="/hosting">Hosting</Link>
                        <Link to="/community">Community</Link>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/logout">Log Out</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/frontend">
                            <Frontend/>
                        </Route>
                        <Route path="/fe_languages">
                            <FE_Languages/>
                        </Route>
                        <Route path="/fe_frameworks">
                            <FE_Frameworks/>
                        </Route>
                        <Route path="/backend">
                            <Backend/>
                        </Route>
                        <Route path="/be_languages">
                            <BE_Languages/>
                        </Route>
                        <Route path="/be_frameworks">
                            <BE_Frameworks/>
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
                        Application Developed By Erik Ciceraro
                    </footer>
                </div>
            </Router>
        )
    }
}

export default App;
