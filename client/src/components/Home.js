import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        // auto scroll to top
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
            <div className="heroWrapper">
                <div className="heroDiv">
                    <div className="heroTextBox">
                        <h1 className="heroTitle">myDevCorner</h1>
                        <h3 className="heroText">An interactive app that keeps track of all the technologies I've worked with.</h3>
                    </div>
                </div>
            </div>

            <h3 id="subTitle1">How It Works</h3>
            <div className="subtextBoxContainer ">
                <div className="subtextBox1">
                    <h2 className="subtextTitle1">Tech <br /> Overviews</h2>
                    <p className="subtext">Check out the tech overviews in the navbar at the top of the page to get an index of snap shots of each technology I've worked with.</p>
                </div>
                <div className="subtextBox2">
                    <h2 className="subtextTitle2">Create <br /> An Account</h2>
                    <p className="subtext">Check out the tech overviews in the navbar at the top of the page to get an index of snap shots of each technology I've worked with.</p>
                </div>
                <div className="subtextBox3">
                    <h2 className="subtextTitle3">Community</h2>
                    <p className="subtext3">After you've made an account, login and create a post on our dev forum. It can be a question, thought, code, whatever dev related thing you'd like.</p>
                </div>
            </div>
            </>
        )
    }
}

export default Home
