import React, {useEffect} from 'react';
import './list.css';
 import Card from '../card/cart';
 import { data } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

type CardCount = {
  count: number,
}
const CardList = (props: CardCount) =>{
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(data());
  },[dispatch]);

    const userData = useSelector((state: any) => {
        return state.cat.data;
      });

    const fourCards:any = userData.slice(0, props.count);
    console.log('Hello', fourCards);
    return(
       <main>
           <h2>Our Cats</h2>
       <div className='card__list'>
       
         {  fourCards.map(({id, name, image, description}: any) => <Card key={id} name= {name} image ={image.url} description ={description} />)}
        </div>
        </main>
    );
}

export default CardList;