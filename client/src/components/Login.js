import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <>
                <div className="heroDiv2">
                    <img className="heroImg2" src="/images/frontendHero.png" alt="Login icon" />
                    <h1 className="heroTitle2">Login</h1>
                </div>
                <form className="signupForm">
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </>
        )
    }
}

export default Login
