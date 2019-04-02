import React, {Component} from 'react';

import Square from './square';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            state : null
        };
    }

    renderSquare(i) {
        return <Square id={i}></Square>
    }

    render() {
        return <div>
            <div>
                {[0,1,2].map((i)=>this.renderSquare(i))}
            </div>
            <div>
                {[3,4,5].map((i)=>this.renderSquare(i))}
            </div>
            <div>
                {[6,7,8].map((i)=>this.renderSquare(i))}
            </div>
        </div>;
    }
}

export default Board;