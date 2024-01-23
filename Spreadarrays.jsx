import React, { useState } from 'react';

const Spreadarrays = () => {
    const [items,SetItems]=useState([])
    const additems =()=>{
        SetItems([
            ...items,
            {
                id:items.length,
                value:'abc'
            }
        ])
    }
    return (
        <div>
            <h1>With Arrays</h1>
            {items.map((i) =>{
                return <li Key={i.id}>{i.value}</li>
            })}
            <button onClick={additems}>Add</button>
        </div>
    );
};

export default Spreadarrays;