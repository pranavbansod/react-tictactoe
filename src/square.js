import React, {Component} from 'react';
import './square.css'

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return <button className={'square'} onClick={() => this.setState({value: 'X'})}
                       id={this.props.id}>{this.state.value}</button>;
    }
}

export default Square;