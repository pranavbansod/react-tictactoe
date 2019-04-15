import React, {Component} from 'react';

import './game.css';

import Square from './square';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {squares: Array(9).fill(null)}
    }

    handleClick(index) {
        let squares = this.state.squares;
        squares[index] = 'X';
        this.setState({squares: squares});
        console.log(this.state.squares)
    }

    renderSquare(index) {
        return <Square
            key={index}
            value={this.state.squares[index]}
            onClick={() => this.handleClick(index)}
        />
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