import React, { useState } from 'react';

const Spread = () => {
    const[student,setStudent] = useState({
        name:'Bhargavi',
        college:'SVECW'
    })
    const changes =()=>{
        setStudent({...student,name:'Charishma'})
    }
    return (
        <div>
            <h3>{student.name}</h3>
            <h3>{student.college}</h3>
            <button onClick={changes}>changeme</button>
        </div>
    );
};

export default Spread;