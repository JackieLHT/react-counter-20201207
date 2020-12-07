import React, { Component, useRef } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
        };
    }

    onIncrease = (sum) => {
        this.setState((prevState) => ({ number: prevState.number + 1 }))
        this.props.onChangeSum(this.props.sum + 1);
    }

    onDecrease = (sum) => {
        this.setState((prevState) => ({ number: prevState.number - 1 }))
        this.props.onChangeSum(this.props.sum - 1);
    }

    resetCounters = () => {
        
    }

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.onIncrease} />
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick={this.onDecrease} />
            </section>
        );
    }
}
