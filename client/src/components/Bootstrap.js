import React from 'react';

class Bootstrap extends React.Component {
    render() {
        return (
            <>
                <div className="iconSubDiv">
                    <h3 className="languageTitle">Bootstrap Resources</h3>
                    <table className="table htmlTable table-responsive-lg">
                        <tbody>
                            <tr>
                                <th scope="row tableText">Official Documentation & CDN</th>
                                <td><a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" target="_blank" rel="noopener noreferrer">https://getbootstrap.com/docs/4.1/getting-started/introduction/</a></td>
                            </tr>
                            <tr>
                                <th scope="row tableText"></th>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row tableText">Useful Web Resources</th>
                                <td><a href="https://www.w3schools.com/bootstrap4/" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/bootstrap4/</a></td>
                            </tr>
                            <tr>
                                <th scope="row tableText"></th>
                                <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Bootstrap" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Glossary/Bootstrap</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Bootstrap
