import React from 'react';
import './Express.css';

class Express extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">Express Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://expressjs.com/en/api.html" target="_blank" rel="noopener noreferrer">https://expressjs.com/en/api.html</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Express
