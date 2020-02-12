import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAync, decreaseAsync } from '../modules/counter.js';
import { getPosts } from '../api/posts';

function CounterContainer() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increaseAync());
    const onDecrease = () => dispatch(decreaseAsync());
    const test = async () => {
        const posts = await getPosts();
        console.log(posts);
    };
    test();
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
