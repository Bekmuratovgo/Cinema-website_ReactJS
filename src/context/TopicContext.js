import React, { useReducer } from "react";
import axios from "axios";

export const topicContext = React.createContext();

const INIT_STATE = {
    topicsData: [],
    topicDetails: null,
    searchData: [],
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_TOPICS":
            return { ...state, topicsData: action.payload };
        case "GET_TOPIC_DETAILS":
            return { ...state, topicDetails: action.payload };
        case "SEARCH":
            return { ...state, searchData: action.payload };
        default:
            return state;
    }
};

const TopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function postNewTopic(topic) {
        axios.post("http://localhost:8000/topics", topic);

        await getTopics();
    }

    async function getTopics() {
        let { data } = await axios.get("http://localhost:8000/topics");

        dispatch({
            type: "GET_TOPICS",
            payload: data,
        });
    }

    async function getTopicDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/topics/${id}`);
        dispatch({
            type: "GET_TOPIC_DETAILS",
            payload: data,
        });
    }

    async function saveTopic(id, newTopic) {
        await axios.patch(`http://localhost:8000/topics/${id}`, newTopic);
        getTopicDetails(id);
    }

    async function search(value) {
        let { data } = await axios.get(
            `http://localhost:8000/topics?q=${value}`
        );
        dispatch({
            type: "SEARCH",
            payload: data,
        });
    }

    async function deleteTask(id) {
        // console.log(id );
        await axios.delete(`http://localhost:8000/topics/${id}`);
    }
    // getTopics()

    return (
        <topicContext.Provider
            value={{
                searchData: state.searchData,
                topicsData: state.topicsData,
                topicDetails: state.topicDetails,
                getTopicDetails,
                postNewTopic,
                getTopics,
                saveTopic,
                search,
                deleteTask,
            }}
        >
            {children}
        </topicContext.Provider>
    );
};
export default TopicContextProvider;
