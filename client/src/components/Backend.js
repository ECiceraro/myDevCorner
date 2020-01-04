import React from 'react';
import './Backend.css';

class Backend extends React.Component {
    render() {
        return (
            <>
                <div className="heroDiv2">
                    <img className="heroImg2" src="/images/frontendHero.png" alt="laptop signifying back-end development" />
                    <h1 className="heroTitle2">Back-End</h1>
                </div>
                <h3 className="subTitle1Fe">What is back-end development?</h3>
                <div className="subDiv1Fe">
                    <div className="subtextBox1Fe">
                        <p>Back end development refers to the server side of an application and everything that communicates between the database and the browser like APIs. Back end Development refers to the server side of development where you are primarily focused on how the site works.</p>
                    </div>
                        <iframe className="frontendVid" title="Back-End Dev Explained" width="350" height="315" src="https://www.youtube.com/embed/WwbBOQaM0Zw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </>
        )
    }
}

export default Backend
