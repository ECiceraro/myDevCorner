import React        from 'react';
import { Redirect } from "react-router-dom";
import './Signup.css';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            toHome: false,
            messageC: ''
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
      this.props.handleCreate(this.state);
      if(!this.props.messageC){
          this.setState({
              toHome: true
          });
      }
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
                <div className="iconDiv2">
                    <form onSubmit={this.handleSubmit} className="signupForm">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
                            <small id="usernameHelp" className="helpText">{this.props.messageC}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={this.handleChange} value={this.state.password}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Signup
