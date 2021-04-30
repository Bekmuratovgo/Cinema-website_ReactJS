import React, { useContext, useEffect, useState } from 'react';
import { topicContext } from '../../context/TopicContext'
import './TopicDetails.css'

import AddTopics from '../AddTopics/AddTopics';
import TopicList from '../TopicList/TopicList';

const TopicDetails = (props) => {
    const { getTopicDetails, topicDetails, saveTopic, deleteTask} = useContext(topicContext)
    const [editStatus, setEditStatus] = useState(false)
    const [editedTopic, setEditedTopic] = useState();

    const handleValue = (e) => {
        let newtopic = {
            ...editedTopic,
            [e.target.name]: e.target.value
        }
        setEditedTopic(newtopic)
    }

    const handleSave = () =>{
        saveTopic(props.match.params.id, editedTopic)
        setEditStatus(false)
    }

    useEffect(() =>{
        // setTimeout(() => {

        //     getTopicDetails(props.match.params.id)
        // }, 300)

        getTopicDetails(props.match.params.id)

    },[props.match.params.id])

    // const style = {
    //     background: `url(${topicDetails.secondImg})`,
    // }
    
    return (
        
        <div>
           {topicDetails ? (
              <div>
                 <div className="wraper">
                    <div className="main-left">
                       <div className="main-box">
                           {editStatus ? (
                            <div className="edit-textareas">
                               <textarea name="title" onChange={handleValue}>{topicDetails.title}</textarea>
                               <textarea name="description" className="box-desc" onChange={handleValue} >{topicDetails.description}</textarea>
                               <textarea name="img" onChange={handleValue}>{topicDetails.img}</textarea>
                               {/* <textarea name="secondImg" onChange={handleValue}>{topicDetails.secondImg}</textarea> */}
                               {/* <textarea name="subTitle" onChange={handleValue}>{topicDetails.subTitle}</textarea> */}
                               {/* <textarea name="secondDescription" className="box-desc" onChange={handleValue}>{topicDetails.secondDescription}</textarea> */}
                            
                                {/* <div class="product-item">
                                    <div class="product-list">
                                    <textarea name="img" onChange={handleValue}>{topicDetails.img}</textarea>
                                        <h3 onChange={handleValue}>{topicDetails.title}</h3>
                                        <span class="price" onChange={handleValue}>{topicDetails.description}</span>
                                    </div>
                                </div> */}
                                </div>
                           ) : (
                            <>

                                <div class="card movie_card">
                                    <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/detective-pikachu-trailer-poster-main.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                                        </i>
                                        <h5 class="card-title">POKEMON Detective Pikachu</h5>
                                        <span class="movie_info">2019</span>
                                        <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
                                    </div>
                                    </div>
                                

                                {/* <div className="movie_card" id="bright">
                                <div className="info_section">
                                    <div className="movie_header">
                                    <img className="locandina" src={topicDetails.img}/>
                                    <h1>{topicDetails.title}</h1>
                                    <h4>2017, David Ayer</h4>
                                    <span className="minutes">117 min</span>
                                    <p className="type">Action, Crime, Fantasy</p>
                                    </div>
                                    <div className="movie_desc">
                                    <p className="text">
                                      {topicDetails.description}
                                    </p>
                                    </div>
                                    <div className="movie_social">
                                    <ul>
                                        <li><i className="material-icons">share</i></li>
                                        <li><i className="material-icons"></i></li>
                                        <li><i className="material-icons">chat_bubble</i></li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="blur_back bright_back"></div>
                                </div> */}
{/* 
                                <h1>{topicDetails.title}</h1>
                                <p className="box-desc">{topicDetails.description}</p>
                                <img  src={topicDetails.img} alt="topic-img"/> */}
                                {/* <h2>{topicDetails.subTitle}</h2> */}
                                {/* <p className="box-desc">{topicDetails.secondDescription}</p> */}
                                {/* <img src={topicDetails.secondImg} alt="topic-img"/> */}
                            </>
                           )}
                        
                          <div className="details_btns">
                              {editStatus ? (
                            <button className="trio" onClick={handleSave}>
                                <img src="https://www.shareicon.net/data/512x512/2015/06/23/58789_add_512x512.png" alt="btn-icon" />
                                Сохранить
                            </button>
                              ) : (
                            <button className="trio"  onClick={() => setEditStatus(true)}>
                                <img src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png" alt="btn-icon" />
                                Редактировать
                            </button>
                              )}
                            
                            <button className="trio" onClick={() => deleteTask()}>
                                <img src="https://www.shareicon.net/data/512x512/2015/06/23/58789_add_512x512.png"  alt="btn-icon"/>
                                Удалить
                            </button>
                        </div>
                       </div>    
                    </div>
                 </div>
              </div>
           )
           : (<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)}
        </div>
     );
  };

export default TopicDetails;