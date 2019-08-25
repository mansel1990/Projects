import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>Log:</h1>
                    {this.props.text.map((item, index) => (
                        <ul key={index} > {item} </ul>
                    ))}
                    <br />
                    <button onClick={this.props.closePopup}>Close logger</button>
                </div>
            </div>
        );
    }
}

export default Popup;