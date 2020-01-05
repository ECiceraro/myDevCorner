import React from 'react';
import './React.css'

class Reactjs extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">React Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/docs/getting-started.html</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://www.w3schools.com/REACT/" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/REACT/</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Reactjs