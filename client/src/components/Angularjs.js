import React from 'react';
import './Angularjs.css'

class Angularjs extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">AngularJS Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="hhttps://docs.angularjs.org/api" target="_blank" rel="noopener noreferrer">https://docs.angularjs.org/api</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://www.w3schools.com/angular/" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/angular/</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Angularjs
