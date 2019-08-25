import React, { Component } from 'react';
import { AppContext } from '../AppProvider';
import { ICON_CHARS } from '../common';
import './BoardFCF.css';

const ICON_PLACE_HOLDDER = 'I';
const Cell = (props) => {
    return (
        <AppContext.Consumer>
            {context => {
                const value = context.cells[props.index];
                const icon = value !== null ? ICON_CHARS[value] : ICON_PLACE_HOLDDER;
                const isDoneClass = icon !== ICON_PLACE_HOLDDER ? 'done' : '';

                return (
                    <button
                        className={`cell cell-${props.index} ${isDoneClass}`}
                        onClick={() => context.humanPlay(props.index)}>
                        {icon}
                    </button>
                )
            }}
        </AppContext.Consumer>
    )
}

class BoardFCF extends Component {
    constructor(props) {
        super(props);
        this.boardRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.context.gameState.position !== "") {
            console.log("Game state = " + this.context.gameState.position);
            setTimeout(() => {
                this.boardRef.current.classList.add('full');
            }, 50);
        } else {
            this.boardRef.current.classList.remove('full');
        }
    }

    render() {
        return (
            <div className={`boardfcf ${this.context.gameState.position}`} ref={this.boardRef}>
                <div className="boardfcf-row">
                    <Cell index={0} />
                    <Cell index={1} />
                    <Cell index={2} />
                    <Cell index={3} />
                    <Cell index={4} />
                </div>

                <div className="boardfcf-row">
                    <Cell index={5} />
                    <Cell index={6} />
                    <Cell index={7} />
                    <Cell index={8} />
                    <Cell index={9} />
                </div>

                <div className="boardfcf-row">
                    <Cell index={10} />
                    <Cell index={11} />
                    <Cell index={12} />
                    <Cell index={13} />
                    <Cell index={14} />
                </div>

                <div className="boardfcf-row">
                    <Cell index={15} />
                    <Cell index={16} />
                    <Cell index={17} />
                    <Cell index={18} />
                    <Cell index={19} />
                </div>

                <div className="boardfcf-row">
                    <Cell index={20} />
                    <Cell index={21} />
                    <Cell index={22} />
                    <Cell index={23} />
                    <Cell index={24} />
                </div>
            </div>
        )
    }
}

BoardFCF.contextType = AppContext;
export default BoardFCF;