import React from 'react';
import './Mongodb.css';

class Mongodb extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">MongoDB Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://docs.mongodb.com/" target="_blank" rel="noopener noreferrer">https://docs.mongodb.com/</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Mongodb