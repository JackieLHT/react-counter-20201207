import React, { Component } from 'react';
import Counter from "./Counter"

class CounterGroup extends Component {

    initArraySize = (size) => {
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys())
    }

    onChangeSum = () => {
        this.props.onChangeSum();
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            <div>
                {
                    initArraySize.map((value) => {
                        return <Counter key={value} {...this.props}/>
                    })
                }
            </div>
        );
    }
}

export default CounterGroup;