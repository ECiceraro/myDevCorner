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
        const queryUrl = `http://localhost:5000/posts`;
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
            <div>
                <h1>Community</h1>
                <ul>

                </ul>
            </div>
        )
    }
}

export default Community
