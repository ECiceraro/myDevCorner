import React from 'react';
import './Signup.css';
import axios from 'axios';
const baseUrl = `https://mydevcorner.herokuapp.com`;

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
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
        axios(`${baseUrl}/users`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(createdUser => {
            return createdUser.json()
        }).catch(err => {
            console.log(err)
        })
    }

    // handles submit
    handleSubmit = (e) => {
      e.preventDefault();
      this.handleCreate(this.state);
    }

    render() {
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
