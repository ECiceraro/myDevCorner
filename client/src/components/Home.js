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
                    <p className="subtext">Check out the technologies I've worked with by navigating through the tabs on the navbar. Click on the icon for each technologyto uncover useful links.</p>
                </div>
                <div className="subtextBox2">
                    <h2 className="subtextTitle2">Create <br /> An Account</h2>
                    <p className="subtext">Creating an account at myDevCorner couldn't be more easy, simply click the "Sign Up" button in the nav and create a user account... and you're in! </p>
                </div>
                <div className="subtextBox3">
                    <h2 className="subtextTitle3">Community</h2>
                    <p className="subtext3">Once you've made an account, login to create a post or leave a comment on our dev forum. It can be a question, thought, code, whatever dev related thing you'd like.</p>
                </div>
            </div>
            </>
        )
    }
}

export default Home
