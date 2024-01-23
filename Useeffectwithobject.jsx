import React, { useState } from 'react';

const Useeffectwithobject = () => {
    const[student,setStudent] = useState({
        name:'Bhargavi',
        college:'SVECW'
    })
    const changes =()=>{
        setStudent({name:'Charishma',college:'SRKR'})
    }
    return (
        <div>
            <h3>{student.name}</h3>
            <h3>{student.college}</h3>
            <button onClick={changes}>changeme</button>
        </div>
    );
};

export default Useeffectwithobject;