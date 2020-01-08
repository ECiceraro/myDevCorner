import React from 'react';

class Postgresql extends React.Component {
    render() {
        return (
            <>
                <div className="iconSubDiv">
                <h3 className="languageTitle">Postgresql Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">https://www.postgresql.org/docs/</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://w3resource.com/PostgreSQL/tutorial.php" target="_blank" rel="noopener noreferrer">https://w3resource.com/PostgreSQL/tutorial.php</a></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </>
        )
    }
}

export default Postgresql
