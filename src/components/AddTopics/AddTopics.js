import React, { useContext, useState } from 'react';
import { topicContext } from '../../context/TopicContext';

const AddTopics = () => {
    const [topic, setTopic] = useState({
            title: '',
            description: '',
            img: '',
            // subTitle: '',
            // secondDescription: '',
            // secondImg:''
    })
    const {postNewTopic} = useContext(topicContext)

    const handleValues = (e) => {
        // console.log(e.target.value);
        let newTopic = {
            ...topic,
            [e.target.name]: e.target.value
        }
        setTopic(newTopic)
    }

    const handleClick = () =>{
        postNewTopic(topic)

        setTopic({
            title: '',
            description: '',
            img: '',
            secondImg: ''
            // subTitle: '',
            // secondDescription: '',
        })
    }

    return (
        <div className="inps">
            <input className="inp-add" value={topic.title} name="title" onChange={handleValues} type="text" placeholder="Заголовок"/>
            <input className="inp-add" value={topic.description} name="description" onChange={handleValues} type="text" placeholder="Описание"/>
            <input className="inp-add" value={topic.img} name="img" onChange={handleValues} type="text" placeholder="Изображение"/>
            <input className="inp-add" value={topic.secondImg} name="secondImg" onChange={handleValues} type="text" placeholder="Второе изображение"/>
            {/* <input className="inp-add" value={topic.subTitle} name="subTitle" onChange={handleValues} type="text" placeholder="Подзаголовок"/>
        <input className="inp-add" value={topic.secondImg} name="secondImg" onChange={handleValues} type="text" placeholder="Второе изображение"/> */}
            {/* <input className="inp-add" value={topic.secondDescription} name="secondDescription" onChange={handleValues} type="text" placeholder="Второе описание"/> */}
            <button className="btn-add" onClick={handleClick}>Добавить</button>
        </div>
    );
};

export default AddTopics;