import React from 'react';
import AboutComponent from '../../components/about/about';
import Btn from '../../components/button/btn';
import CardList from '../../components/card_list/list';

const Home = () =>{
    return(
     <>
       <AboutComponent />
       <CardList count= {4}/>
       <Btn />
     </>
    );
}

export default Home;