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
            sessionUser: {
                username: ''
            },
            posts: []
        }
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
            }
        // console.log(this.state);
        })
    }
    // load posts
    loadPosts = () => {
        axios({
            method: 'GET',
            url: `${baseUrl}/posts`,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then( foundPosts => {
            console.log(foundPosts);
            this.setState({
                posts: foundPosts.data
            })
            console.log(this.state);
        })
    }

    componentDidMount(){
        // auto scroll to top
        window.scrollTo(0, 0);
        // checks for session user
        this.checkSession();
        // loads posts
        this.loadPosts();
    }

    // ==============
    // HANDLERS
    // ==============
    // handles form change
    handleChange = (e) => {
      this.setState({[e.target.id] : e.target.value})
    }
    // handles submit
    handleSubmit2 = (e) => {
      e.preventDefault();
      this.createPost(this.state);
      this.setState({
          post: ''
      })
    }
    // delete post
    deletePost = (postId) => {
        axios({
            method: 'DELETE',
            url: `${baseUrl}/posts/${postId}`,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( deletedPost => {
            this.loadPosts();
        }).catch(error => {
            console.log(error)
        })
    }
    // handleCreatePost
    createPost = (postData) => {
        axios({
            method: 'POST',
            url: `${baseUrl}/posts`,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            data: postData
        })
        .then( createdPost => {
            this.setState({
                posts: [createdPost.data, ...this.state.posts]
            })
            console.log(this.state);
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
            <div className="heroDiv2">
                <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                <h1 className="heroTitle2">Development Forum</h1>
            </div>
            <h3 id="subText4">Login to leave a post to be reviewed by other devs!</h3>
            <form onSubmit={this.handleSubmit2} className="postForm">
                <div className="form-group shadow-textarea">
                <label htmlFor="post"></label>
                <input type="hidden"
                value={this.state.sessionUser.username}/>
                <textarea className="form-control textAreaPost z-depth-1" rows="7" id="post" placeholder="Post in here" type="textarea" value={this.state.post} onChange={this.handleChange}/>
                </div>
                {this.state.sessionUser.username
                ? (<button type="submit" className="btn btn-primary">Post</button>)
                : (<></>)}
            </form>
            <h3 id="subText5">Login and click on comment button below to see and leave comments for each post</h3>
            <div className="forumBackground">
                {this.state.posts.map((post, index) => (
                <div className="postDiv" key={post._id}>
                    <div className="postTextDiv">
                        <textarea readOnly className="postTextArea"
                        defaultValue={post.post}></textarea>
                    </div>
                    <h6 className="postSubText">Post By: {post.sessionUser.username}</h6>
                    <h6 className="postSubText mr-auto">Date: {post.date}</h6>
                    {this.state.sessionUser.username
                        ? (<button className="postSubText btn btn-primary">Comment</button>)
                        : <></>
                    }
                    {this.state.sessionUser.username === post.sessionUser.username
                        ? (<button className="postSubText btn btn-primary"
                        onClick={() => {this.deletePost(post._id)}}
                        >Delete</button>)
                        : (<></>)
                    }
                    {this.state.sessionUser.username === post.sessionUser.username
                        ? (<button className="postSubText btn btn-primary">Edit</button>)
                        : (<></>)
                    }
                    <div className="commentDiv">
                        <div className="commentText1Div">
                            <textarea className="commentTextArea"></textarea>
                        </div>
                        <h6 className="postSubText">Comment By: placeholder</h6>
                        <h6 className="postSubText mr-auto">Date: 2:33pm 1/23/1988</h6>
                        <button className="postSubText btn btn-primary">Delete</button>
                        <button className="postSubText btn btn-primary">Edit</button>
                    </div>
                </div>
                ))}
                </div>


            </>
        )
    }
}

export default Community
