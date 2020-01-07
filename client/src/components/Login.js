import React from 'react';
import './Login.css';
import { Redirect } from "react-router-dom"


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            toHome: false,
            testRefresh: false
        }
    }

    componentDidMount() {
        // auto scroll to top
        window.scrollTo(0, 0)
    }
    // ==============
    // HANDLERS
    // ==============
    // handles form change
    handleChange = (e) => {
      this.setState({[e.target.id] : e.target.value})
    }
    // handles submit
    handleSubmit = (e) => {
      e.preventDefault();
      (this.props.handleSession(this.state));
    }
    render() {
        if(this.props.messageA === null && this.props.messageB === null && this.props.sessionUser.username){
            return <Redirect to='/' />
        }
        return (
            <>
                <div className="heroDiv2">
                    <img className="heroImg2" src="/images/frontendHero.png" alt="Login icon" />
                    <h1 className="heroTitle2">Login</h1>
                </div>
                <form onSubmit={this.handleSubmit} className="signupForm">
                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
                    <small id="usernameHelp" className="helpText">{this.props.messageA}</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                    <small id="passwordHelp" className="helpText">{this.props.messageB}</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </>
        )
    }
}

export default Login
