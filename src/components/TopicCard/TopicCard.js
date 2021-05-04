import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { topicContext } from '../../context/TopicContext';
import './TopicCard.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const TopicCard = (props) => {
    const {addProductToCard, checkProductInCart} = useContext(topicContext)
    return (
        <div class="card movie_card">
            <div style={{position: 'relative'}} >
                    <img src={props.item.img} class="card-img-top" alt="..."/>
                    <div style={{position: 'absolute', top: '10px'}} class="movie_info">
                        
                        <button  onClick={() => addProductToCard(props.item)} 
                            color={checkProductInCart(props.item.id) ? "secondary" : "primary"}>
                                <i class="fas fa-shopping-cart"/>
                            </button>
                    </div>
                </div>
            <Link to={`/details/${props.item.id}`}>
                
                <div class="card-body">
                    <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                    </i>
                    <h1 class="card-title">{props.item.title}</h1>
                    <p className="card-desc" style={{fontSize:"18px"}}>{props.item.description}</p>
                    <Typography variant="h6" style={{color: "black"}}>
                        {props.item.price} сом
                    </Typography>
                    {/* <span class="movie_info">2019</span> */}
                    <span class="movie_info" style={{float:"right"}}><i class="fas fa-star"></i> 9 / 10</span>
                    
                </div>
            </Link>
        </div>
    );
};

export default TopicCard;