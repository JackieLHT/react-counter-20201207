import React, { Component , useRef} from 'react';
import CounterGroup from './CounterGroup';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        const counterRef = React.createRef();

        this.state = {
            size: 0,
            sum: 0
        }
    }

    onChange = (event) => {
        // event.target.value
        this.setState({ size: event.target.value });
        this.setState({ sum: 0 });
        this.resetCounters();
    }

    onChangeSum = (newSum) => {
        this.setState({ sum: newSum });
    }

    resetCounters = () => {
       console.log(this.counterRef);
    }

    render() {
        const size = this.state.size;
        const sum = this.state.sum;
        return (
            <div>
                <label>Size:<span>&nbsp;</span>
                    <input type="number" value={size} onChange={this.onChange} />
                </label>

                <div>The Sum: {sum}</div>
                <CounterGroup size={size} sum={sum} onChangeSum={this.onChangeSum.bind(this)} ref={this.counterRef}/>
            </div>
        );
    }
}

export default MultiCounter;