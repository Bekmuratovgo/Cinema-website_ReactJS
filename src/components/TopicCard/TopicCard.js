import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { topicContext } from '../../context/TopicContext';
import './TopicCard.css'


const TopicCard = (props) => {
    // const {topicDetails} = useContext(topicContext)
    return (
        <Link to={`/details/${props.item.id}`}>
            <div class="card movie_card">
                <img src={props.item.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                    </i>
                    <h1 class="card-title">{props.item.title}</h1>
                    <p className="card-title" style={{fontSize:"18px"}}>{props.item.description}</p>
                    <span class="movie_info">2019</span>
                    <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
                </div>
            </div>
        {/* <div className="card">
            <p>{props.item.title}</p>
        </div> */}
        </Link>
    );
};

export default TopicCard;