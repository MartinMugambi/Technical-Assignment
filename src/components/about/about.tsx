import React from 'react';
import './about.css';
import cat from '../../assets/images/3d.png';
import { useNavigate } from 'react-router-dom';
const AboutComponent = () =>{
    const navigate = useNavigate();

    const navigation = () =>{
       navigate('/cats');
    }
    return(
        <div className='about'>
           <div className='about__content'>
             <h1>Refining the World of pets</h1>
              <p>The cats is the only species in the family felldae  and often refers to..</p>
              <button onClick={navigation}>see more cats</button>
           </div>
           <div className='about__image'>
            <img src= {cat}  alt= 'car_logo'/>
           </div>
            
        </div>

    );
}


export default AboutComponent;