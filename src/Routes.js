import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";

const Routes = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={SignIn} />

                    {/* <Route exact path="/" component={} />
                <Route exact path="/" component={}/>
                <Route exact path="/" component={} /> */}
                </Switch>
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default Routes;
