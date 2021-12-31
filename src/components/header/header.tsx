import React from 'react';
import './header.css';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
const HeaderComponent = () =>{
   
    const navigate = useNavigate();

    const navigation = () =>{
       navigate('/');
    }
    return(
        <div className='header'>
         <div className='header__logo' onClick={navigation}>
             <img src = {logo} alt= 'logo'/>
         </div>
         <div className='header__content'>
            <p>Home</p>
            <p>Cat Tinder</p>
          
         </div>
          <div className='header__icon'>
           
          </div>
        </div>
    );
}

export default HeaderComponent;