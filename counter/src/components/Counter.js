import React,{ useState } from "react";

function Counter (props) {
// setting default value if no starting value was passed dowwn as props.
    const [count, setCount] = useState(props.initialValue || 0);
// every state in this component has conditional rendering. 
    const decrement = () => {
        count > (props.initialValue || 0) && setCount(prev => prev - 1);
    }

    const increment = () => {
        count < 20 && setCount(prev => prev +1);
    }

    const reset = () => {
        count > (props.initialValue || 0) && setCount(prev => prev = (props.initialValue || 0));
    }

    return (
        <div className="counter-container">
            <div className="counter">
                <button onClick={decrement} >-</button>
                <h1 style={{color: count > 10 && "red"}} >{count}</h1>
                <button onClick={increment} >+</button>
            </div>
            {count > (props.initialValue || 0) && <button onClick={reset}>Reset</button>}
        </div>
    )
}

export default Counter;