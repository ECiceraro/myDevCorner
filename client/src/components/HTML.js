import React from 'react';

class Html extends React.Component {
    render() {
        return (
            <>
                <div className="iconSubDiv">
                    <h3 className="languageTitle">HTML Resources</h3>
                    <table className="table htmlTable table-responsive-lg">
                        <tbody>
                            <tr>
                                <th scope="row tableText">Official Documentation</th>
                                <td><a href="https://www.w3.org/TR/html52/" target="_blank" rel="noopener noreferrer">https://www.w3.org/TR/html52/</a></td>
                            </tr>
                            <tr>
                                <th scope="row tableText"></th>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row tableText">Useful Web Resources</th>
                                <td><a href="https://www.w3schools.com/html/"   target="_blank" rel="noopener noreferrer">https://www.w3schools.com/html/</a></td>
                            </tr>
                            <tr>
                                <th scope="row tableText"></th>
                                <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"         target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Html
