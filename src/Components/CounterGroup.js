import React, { Component } from 'react';
import Counter from "./Counter"

class CounterGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Refs: []
        }
    }

    initArraySize = (size) => {
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys())
    }

    onChangeSum = () => {
        this.props.onChangeSum();
    }

    resetCounters = (size) => {
        this.state.Refs.map(counter => {
            if (counter !== null) {
                return counter.resetCounters()
            }
            return null;
        });
    }

    setRef = (ref) => {
        this.state.Refs.push(ref);
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            <div>
                {
                    initArraySize.map((value) => {
                        return <Counter key={value} {...this.props} ref={this.setRef} />
                    })
                }
            </div>
        );
    }
}

export default CounterGroup;