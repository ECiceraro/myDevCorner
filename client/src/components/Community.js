import React from 'react';
import './Community.css';
import axios from 'axios';
import moment from 'moment';

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
            postId: '',
            comment: '',
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
            this.setState({
                posts: foundPosts.data
            })
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
    // handles submit for posts
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
        }).catch(error => {
            console.log(error)
        })
    }
    // create comment
    createComment = (commentData) => {
        // console.log(commentData);
        axios({
            method: 'PATCH',
            url: `${baseUrl}/comments/${commentData.postId}`,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            data: commentData
        })
        .then( createdPost => {
            this.loadPosts();
        }).catch(error => {
            console.log(error)
        })
    }
    // handles submit for comments
    handleSubmit3 = (e) => {
      e.preventDefault();
      this.createComment(this.state);
      this.setState({
          comment: ''
      })
    }
    // sets post id for comment form
    setPostId = (postId) => {
        this.setState({
            postId: postId,
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
                    <h6 className="postSubText mr-auto">Posted {moment(post.date).fromNow()}</h6>
                    {this.state.sessionUser.username
                        ? (<button className="postSubText btn btn-primary"
                        onClick={() => {this.setPostId(post._id)}}
                        >Comment</button>)
                        : (<></>)
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
                    {post.comments.map((comment, index) => (
                        <div className="commentDiv" key={comment._id}>
                            <div className="commentText1Div">
                                <textarea
                                defaultValue={comment.comment}
                                className="commentTextArea"
                                ></textarea>
                            </div>
                            <h6 className="postSubText">Comment By: {comment.sessionUser.username}</h6>
                            <h6 className="postSubText mr-auto">Posted {moment(comment.date).fromNow()}</h6>
                            <button className="postSubText btn btn-primary">Delete</button>
                            <button className="postSubText btn btn-primary">Edit</button>
                        </div>
                    ))}

                    {this.state.postId === post._id
                    ?   (<form  onSubmit={this.handleSubmit3}                   className="postForm">
                        <div className="form-group shadow-textarea">
                        <label htmlFor="post"></label>
                        <textarea className="form-control textAreaPost z-depth-1" rows="7" id="comment" placeholder="Comment in here" type="textarea" value={this.state.comment} onChange={this.handleChange}/>
                        </div>
                        {this.state.sessionUser.username
                        ? (<button type="submit" className="btn btn-primary">Comment</button>)
                        : (<></>)}
                        </form>)
                        : (<></>)
                    }

                </div>
                ))}
                </div>


            </>
        )
    }
}

export default Community
