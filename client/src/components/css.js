import React from 'react';

class Css extends React.Component {
    render() {
        return (
            <>
                <div className="iconSubDiv">
                <h3 className="languageTitle">CSS Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">https://www.w3.org/Style/CSS/</a></td>
                        </tr>
                        <tr>
                        <th scope="row tableText"></th>
                        <td>
                        </td>
                        </tr>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/css/</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/CSS</a></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </>
        )
    }
}

export default Css
