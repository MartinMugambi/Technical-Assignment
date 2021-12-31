import React,{useState,useEffect}  from  'react';
import './card.css';
import logo from '../../assets/images/logo.png';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { useDispatch, useSelector } from 'react-redux';
import { SettingsRemote } from '@material-ui/icons';

type CardProps = {
  name: any,
  image: any,
  description: any,
}


const Card = (props: CardProps) =>{
 
  const likes = useSelector((state: any) => {
    return state.counter.likes;
  });
  const disLikes = useSelector((state: any) => {
    return state.counter.disLikes;
  });
  const dispatch = useDispatch();

  const [count, setCount] = useState(likes);
  const [count2, setCount2] = useState(count);

    return(
         <div className='card'>
             <div className='card__info_pic'>
             <img src= {props.image} alt='cat_photo' loading='lazy' />
             </div>
             <div className='card__info_content'>
                <h4>{props.name}</h4>
             </div>
             <div className='card__info_desc'>
                <p>{props.description.slice(0, 120)}</p>
             </div>
             <div className='card__info_icon'>
               <div className='card__info_icon2'>
                 <ThumbDownAltIcon onClick={()=>setCount(count+1)} />
                 <span>{count}</span>
               <FavoriteBorderIcon onClick={()=>setCount2(count2+1)} />
               <span>{count2}</span>
               </div>
               <img src={logo} alt='icon'/>
             </div>
             
        </div>
    );
}

export default Card;