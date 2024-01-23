import React, { useState } from 'react';

const Spreadarray1 = () => {
    const [items,SetItems]=useState([])
    const additems =()=>{
        SetItems([
            ...items,
            {
                id:1,
                value:'abc'
            }
        ])
    }
    return (
        <div>
            <h1>With Arrays</h1>
            {items.map((i) =>{
                return i.value
            })}
            <button onClick={additems}>Add</button>
        </div>
    );
};

export default Spreadarray1;