import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../modules/counter.js';

function CounterContainer() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());

    return (
        <div>
            <Counter
                number={number}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
            />
        </div>
    );
}

export default CounterContainer;
