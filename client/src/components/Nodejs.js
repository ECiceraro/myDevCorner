import React from 'react';
import './Nodejs.css'

class Nodejs extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">Node JS Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/docs/</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://www.w3schools.com/nodejs/" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/nodejs/</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Node.js" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Glossary/Node.js</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Nodejs
