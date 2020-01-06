import React from 'react';
import './Community.css';
import axios from 'axios';

class Community extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        // auto scroll to top
        window.scrollTo(0, 0);
        const queryUrl = `https://mydevcorner.herokuapp.com/posts`;
        axios(queryUrl)
        .then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        })
    }

    render() {
        return (
            <>
            <div className="heroDiv2">
                <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                <h1 className="heroTitle2">Community</h1>
            </div>
            </>
        )
    }
}

export default Community
