import React from 'react';
import './Signup.css';
import { Redirect } from "react-router-dom"
import axios from 'axios';
let baseUrl = '';

if (process.env.NODE_ENV === 'developement') {
    let baseUrl = `https://localhost:5000`;
} else if (process.env.NODE_ENV === 'production') {
    let baseUrl = 'https://mydevcorner.herokuapp.com';
}

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            toHome: false
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
        .then(createdUser => {
            return createdUser
        }).catch(err => {
            console.log(err)
        })
    }

    // handles submit
    handleSubmit = (e) => {
      e.preventDefault();
      this.handleCreate(this.state);
      this.setState({
          toHome: true
      });

    }
    render() {
        if(this.state.toHome === true){
            return <Redirect to='/' />
        }
        return (
            <>
                <div className="heroDiv2">
                    <img className="heroImg2" src="/images/frontendHero.png" alt="Create Account icon" />
                    <h1 className="heroTitle2">Create Account</h1>
                </div>
                <form onSubmit={this.handleSubmit} className="signupForm">
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}

export default Signup
