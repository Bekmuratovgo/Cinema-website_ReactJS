import React, { useReducer } from "react";
import { AUTH_API } from "../components/helpers/constants";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const authContext = React.createContext();

const INIT_STATE = {};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "...":
        default:
            return state;
    }
};
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const history = useHistory();

    async function registerUser(e, history) {
        e.preventDefault();
        const newUser = {
            email: e.target[0].value,
            password: e.target[2].value,
        };
        try {
            const res = await axios.post(
                `${AUTH_API}/api/auth/register`,
                newUser
            );
            console.log(res);
            history.push("/login");
        } catch (err) {
            console.log(err.response);
        }
    }

    async function loginUser(e, history) {
        e.preventDefault();
        const user = {
            email: e.target[0].value,
            password: e.target[2].value,
        };
        try {
            const data = await axios.post(`${AUTH_API}/api/auth/login`, user);
            console.log(data);
            history.push("/");
        } catch (err) {
            console.log(err.response);
        }
    }

    let values = {
        registerUser,
        loginUser,
    };

    return (
        <authContext.Provider value={values}>{children}</authContext.Provider>
    );
};
export default AuthContextProvider;
