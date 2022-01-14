import React from 'react';

import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';

import Home from '../pages/Home'
import ChatRoom from '../pages/ChatRoom'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/chatroom" component={ChatRoom} />
                <Redirect to="/" ></Redirect>
            </Switch>
        </Router>
    );
};

export default Routes;