import React, {Component} from 'react';
import './square.css'

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {value:''};
    }

    render() {
        return <button className={'square'} id={this.props.id}>{this.state.value}</button>;
    }
}

export default Square;