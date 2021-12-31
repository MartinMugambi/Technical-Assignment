import React from 'react';
import './btn.css';
import { useNavigate } from 'react-router-dom';
const Btn = () =>{
    const navigate = useNavigate();

    const navigation = () =>{
       navigate('/cats');
    }
    return(
        <div className='btn'>
            <button onClick={navigation}>see more cats</button>
        </div>
    );
}

export default Btn;