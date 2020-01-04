import React from 'react';
import './Frontend.css';

class Frontend extends React.Component {
    render() {
        return (
            <>
                <div className="heroDiv2">
                    <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying front end development" />
                    <h1 className="heroTitle2">Front-End Development</h1>
                </div>
                <h3 className="subTitle1Fe">What is front-end development?</h3>
                <div className="subDiv1Fe">
                    <div className="subtextBox1Fe">
                        <p>A front-end developer links together the world of design and technology, packaging up the utility of the back end in an inviting way for users to interact with. They take website design files and convert them into HTML, JavaScript (JS) and/or CSS code - the core elements of front-end development.</p>
                    </div>

                        <iframe className="frontendVid" title="Front End Dev Explained" width="350" height="315" src="https://www.youtube.com/embed/GJ8jidDdWVg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>
            </>
        )
    }
}

export default Frontend
