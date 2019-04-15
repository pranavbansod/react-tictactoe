import React, {Component} from 'react';

import './game.css';

import Square from './square';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {squares: Array(9).fill('X')}
    }

    renderSquare(index) {
        return <Square key={index} id={index} value={this.state.squares[index]}></Square>
    }

    render() {
        return <div>
            <div className={'row'}>
                {[0, 1, 2].map((i) => this.renderSquare(i))}
            </div>
            <div className={'row'}>
                {[3, 4, 5].map((i) => this.renderSquare(i))}
            </div>
            <div className={'row'}>
                {[6, 7, 8].map((i) => this.renderSquare(i))}
            </div>
        </div>;
    }
}

export default Board;