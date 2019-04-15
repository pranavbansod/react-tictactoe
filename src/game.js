import React, {Component} from 'react';

import './game.css';

import Square from './square';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
        };
    }

    hasGameEnded() {
        let isWon = this.isWinner('X') || this.isWinner('O');

        return isWon
    }

    isWinner(symbol) {
        const winningCombIndex = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        let squares = this.state.squares;
        function isEqualToSymbol(value) {
            return value === symbol;
        }
        return winningCombIndex.some(function (currCombIndex) {
            let winningCombination = [];
            currCombIndex.forEach((index) => {
                winningCombination.push(squares[index])
            });
            return winningCombination.every(isEqualToSymbol)
        });
    }

    async handleClick(index) {
        if(this.hasGameEnded()){
            return
        }
        let squares = this.state.squares.slice();
        let isSquareEmpty = squares[index] == null;
        if (isSquareEmpty) {
            let symbol = this.state.isXNext ? 'X' : 'O';
            squares[index] = symbol;
            await this.setState({
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