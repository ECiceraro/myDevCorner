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
      if(this.props.messageA || this.props.messageB){
          this.setState({
              toHome: true
          });
      }
    }

    render() {
        return (
            <>
            <div className="heroDiv2">
                <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                <h1 className="heroTitle2">Development Forum</h1>
            </div>
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
