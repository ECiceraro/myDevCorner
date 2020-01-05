import React from 'react';
import './php.css';

class Php extends React.Component {
    render() {
        return (
            <>
                <h3 className="languageTitle">PHP Resources</h3>
                <table className="table htmlTable table-responsive-lg">
                    <tbody>
                        <tr>
                            <th scope="row tableText">Official Documentation</th>
                            <td><a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer">https://www.php.net/docs.php</a></td>
                        </tr>
                        <tr>
                        <th scope="row tableText"></th>
                        <td>
                        </td>
                        </tr>
                        <tr>
                            <th scope="row tableText">Useful Web Resources</th>
                            <td><a href="https://www.w3schools.com/php/" target="_blank" rel="noopener noreferrer">https://www.w3schools.com/php/</a></td>
                        </tr>
                        <tr>
                            <th scope="row tableText"></th>
                            <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/PHP" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Glossary/PHP</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Php
