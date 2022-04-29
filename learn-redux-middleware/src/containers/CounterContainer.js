import React from "react";
import Counter from "../components/Counter";
import {increase, decrease, increaseAsync, decreaseAsync} from "../modules/counter";
import {connect} from "react-redux";

const CounterContainer = ( { number, increaseAsync, decreaseAsync }) => {
    return (
        <Counter
            number={number}
            onDecrease={decreaseAsync}
            onIncrease={increaseAsync}
        />
    );
};

export default connect(
    state => ({
        number : state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer)

