import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import Home from './components/Home';

const Routes = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Switch>
                <h1>asd</h1>
                <Route exact path="/" component={Home}  />
                

            </Switch>
            
        </BrowserRouter>
        </>
    );
};

export default Routes;