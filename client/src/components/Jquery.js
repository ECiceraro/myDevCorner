import React from 'react';


class Jquery extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">Jquery Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://api.jquery.com/" target="_blank" rel="noopener noreferrer">https://api.jquery.com/</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText">CDN</th>
                            <td><a href="https://code.jquery.com/" target="_blank" rel="noopener noreferrer">https://code.jquery.com/</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://www.w3schools.com/jquery/" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/jquery/</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/jQuery" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Glossary/jQuery</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Jquery
