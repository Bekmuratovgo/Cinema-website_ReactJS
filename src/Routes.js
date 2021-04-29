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
                <Route exact path="/" component={Home}  />
                {/* <Route exact path="/" component={} />
                <Route exact path="/" component={}/>
                <Route exact path="/" component={} /> */}

            </Switch>
            
        </BrowserRouter>
        </>
    );
};

export default Routes;