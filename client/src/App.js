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
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let baseUrl = '';

if (process.env.NODE_ENV === 'developement') {
    let baseUrl = `https://localhost:5000`;
} else if (process.env.NODE_ENV === 'production') {
    let baseUrl = 'https://mydevcorner.herokuapp.com';
}

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            sessionUser: {},
            messageA: null,
            messageB: null,
            messageC: null,
            destroyed: ''
        };
    this.handleCreate = this.handleCreate.bind(this);
    this.checkSession = this.checkSession.bind(this);
    this.killSession = this.killSession.bind(this);
    this.handleSession = this.handleSession.bind(this);
    }
    // check if session is in progress function
    checkSession = () => {
        axios({
            method: 'GET',
            url: `${baseUrl}/session`,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then( foundUser => {
            if(foundUser.data.username){
                this.setState({
                    sessionUser: foundUser.data
                })
            // console.log(this.state);
            }
        })
    }
    // destroy session function
    killSession = (event) => {
        axios({
            method: 'DELETE',
            url: `${baseUrl}/session`
        }).then( response => {
            console.log(response.data);
        })
    }
    // handles creating session from login page
    handleSession = (loginData) => {
        axios({
            method: 'POST',
            url: `${baseUrl}/session`,
            data: loginData,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( loggedInUser => {
            this.setState({
                sessionUser: loggedInUser.data.sessionUser,
                messageA: loggedInUser.data.messageA,
                messageB: loggedInUser.data.messageB
            })
            // console.log(this.state);
        }).catch(err => {
            console.log(err)
        })
    }
    // handles creating user
    handleCreate = (createData) => {
        axios({
            method: 'POST',
            url: `${baseUrl}/users`,
            data: createData,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( createdUser => {
            this.setState({
                sessionUser: createdUser.data,
                messageC: createdUser.data.messageC
            })
        }).catch(err => {
            console.log(err)
        })
    }
    componentDidMount = () => {
        window.scrollTo(0, 0)
        this.checkSession()

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
                        <Link className='mr-auto nav-item btn btn-primary' to="/community">Forum</Link>
                        {this.state.sessionUser.username ? (
                            <h3 className="welcomeText">Welcome, {this.state.sessionUser.username}!</h3>
                        ) : (<></>)
                        }
                        <Link className="nav-item2 btn btn-primary" to="/signup">Sign Up</Link>
                        {!this.state.sessionUser.username
                        ? <Link className="nav-item2 btn btn-primary" to="/login">Login</Link>
                        : (<></>)}
                        <form onSubmit={() => this.killSession()}>
                            {this.state.sessionUser.username ? (
                                <button type="submit" className="nav-item2 btn btn-primary">Logout</button>
                            ) : (<></>)}
                            </form>
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
                            <Community
                            sessionUser={this.state.sessionUser}/>
                        </Route>
                        <Route path="/signup">
                            <Signup
                            messageC={this.state.messageC}
                            sessionUser={this.state.sessionUser}
                            handleCreate={this.handleCreate}/>
                        </Route>
                        <Route path="/login">
                            <Login
                            messageA={this.state.messageA}
                            messageB={this.state.messageB}
                            sessionUser={this.state.sessionUser}
                            handleSession={this.handleSession}/>
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
