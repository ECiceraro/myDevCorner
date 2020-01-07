import React from 'react';
import './Community.css';
import axios from 'axios';

let baseUrl = '';

if (process.env.NODE_ENV === 'developement') {
    let baseUrl = `https://localhost:5000`;
} else if (process.env.NODE_ENV === 'production') {
    let baseUrl = 'https://mydevcorner.herokuapp.com';
}

class Community extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: '',
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

    createPost = (createdPost) => {
        axios({
            method: 'POST',
            url: `${baseUrl}/posts`,
            data: createdPost,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then( foundUser => {
            if(foundUser.data.username){
                this.setState({
                    sessionUser: foundUser.data
                })
            }
        })
    }

    // ==============
    // HANDLERS
    // ==============
    // handles form change
    handleChange = (e) => {
      this.setState({[e.target.id] : e.target.value})
    }
    // handles submit
    handleSubmit = async(e) => {
      e.preventDefault();
      await(this.createPost(this.state));
      }


    render() {
        return (
            <>
            <div className="heroDiv2">
                <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                <h1 className="heroTitle2">Development Forum</h1>
            </div>
            <h3 id="subText4">Login and leave a post to be reviewed by other devs!</h3>
            <form onSubmit={this.createPost} className="postForm">
                <div className="form-group">
                <label htmlFor="post"></label>
                <input type="textarea" className="form-control" id="post" placeholder="Post in here" onChange={this.handleChange} value={this.state.post}/>
                <small id="passwordHelp" className="helpText">{this.props.messageB}</small>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
            <h3 id="subText4">Login and click on comment button below to see and leave comments for each post</h3>
            <div className="postDiv">
                <div className="postTextDiv">

                </div>
            </div>
            <div className="commentDiv">
                <div className="commentTextDiv">
                </div>
            </div>
            </>
        )
    }
}

export default Community
