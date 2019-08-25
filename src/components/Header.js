import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

import './Header.css';

/* const GameType = (props) => {
    const { value, name } = props;

    return (
        <AppContext.Consumer>
            {context => (
                <li
                    onClick={() => context.changeType(value)}
                    className={value === context.gameType ? "active" : ""}>
                    {name}
                </li>
            )}
        </AppContext.Consumer>
    )
} */

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>Tic Tac Toe</h1>
            </header>
        );
    }
}

Header.contextType = AppContext;

export default Header;
