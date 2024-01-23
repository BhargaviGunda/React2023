import React, { useState } from 'react';

const Hooks = () => {
    const[count,setCount] = useState(0);
    const[msg,setMsg] = useState('Hello');
    const update =()=>{
        setCount(count+1)
    };
    const updatetext =() => {
        setMsg('Hi!!!!!!')

    };
    return (
        <div>
            <h1>Hooks example</h1>
            <h1>Count:{count}</h1>
            <h2>{msg}</h2>
            <button onClick={updatetext}>clickme</button>
            <button onClick={update}>+</button>
        </div>
    );
};

export default Hooks;