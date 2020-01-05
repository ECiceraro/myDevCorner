import React from 'react';
import './javascript.css';

class JavaScript extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">JavaScript Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/js/</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/JavaScript</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default JavaScript
