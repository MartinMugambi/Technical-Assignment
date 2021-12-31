import React from 'react';
import CardList from '../../components/card_list/list';
import './cat.css';
const CatSection= () =>{
    return(
        <div className='main'>
              
          <CardList count= {30} />
          </div>
    );
}

export default CatSection;