import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import Home from './components/Home';
/* CRUD*/
// import AddTopics from './components/AddTopics/AddTopics';
import Admin from './components/Admin/Admin';
import TodoList from './components/TopicList/TopicList';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Footer from './components/Footer/Footer';

const Routes = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/list" component={TodoList}/>
                <Route exact path="/details/:id" component={TopicDetails} />
            </Switch>
            <Footer />
        </BrowserRouter>
        </>
    );
};

export default Routes;