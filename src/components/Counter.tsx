import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrment = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1 className={classes.h1}>{count}</h1>
            <button onClick={increment} className={classes.button}>counter +</button>
            <button onClick={decrment} className={classes.button}>counter -</button>
        </div>
    );
};

export default Counter;