import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { topicContext } from '../../context/TopicContext';
import './TopicCard.css'


const TopicCard = (props) => {
    const {topicDetails} = useContext(topicContext)
    return (
        <Link to={`/details/${props.item.id}`}>
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                <img className="locandina" src={props.item.img}/>
                <h1>{props.item.title}</h1>
                <h4>2017, David Ayer</h4>
                <span className="minutes">117 min</span>
                <p className="type">Action, Crime, Fantasy</p>
                </div>
                <div className="movie_desc">
                <p className="text">
                    {props.item.description}
                </p>
                </div>
                <div className="movie_social">
                <ul>
                    <li><i class="material-icons">share</i></li>
                    <li><i class="material-icons"></i></li>
                    <li><i class="material-icons">chat_bubble</i></li>
                </ul>
                </div>
            </div>
            <div className="blur_back bright_back" ></div>
        </div>
        {/* <div className="card">
            <p>{props.item.title}</p>
        </div> */}
        </Link>
    );
};

export default TopicCard;