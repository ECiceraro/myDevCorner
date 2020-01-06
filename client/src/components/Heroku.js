import React from 'react';
import './Heroku.css';

class Heroku extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">Heroku Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://devcenter.heroku.com/categories/reference" target="_blank" rel="noopener noreferrer">https://devcenter.heroku.com/categories/reference</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Heroku