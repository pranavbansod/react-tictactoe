import React, {Component} from 'react';

import './game.css';

import Square from './square';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext : true
        };
    }

    handleClick(index) {
        let squares = this.state.squares.slice();
        let isSquareNull = squares[index] == null;
        if(isSquareNull){
            squares[index] = this.state.isXNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                isXNext: !this.state.isXNext,
            });
        }
    }

    renderSquare(index) {
        return <Square
            key={index}
            value={this.state.squares[index]}
            onClick={() => this.handleClick(index)}
        />
    }

    render() {
        const status = 'Next player: ' + (this.state.isXNext ? 'X' : 'O');

        return <div>
            <div className="status">{status}</div>
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