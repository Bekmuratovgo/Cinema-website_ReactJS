import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
import CreditCard from './components/Payment/CreditCard';

const Routes = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/payment" component={CreditCard}/>
                {/* <Route exact path="/" component={} /> */}

            </Switch>
            
        </BrowserRouter>
        </>
    );
};

export default Routes;