import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';


// React Route
// -------------------
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import MessagePost from './message_board_components/message_post';
import RecommendationDescriptions from './components/current_recommendations/recommendation_descriptions';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    
    <Provider store = { createStoreWithMiddleware(reducers)} >

        <BrowserRouter>
            <div>
                <Switch>
                    <Route path = '/description/:id' component = { RecommendationDescriptions } />
                    <Route path= '/messagePost' component = { MessagePost } /> 
                    <Route path = '/' component = { App } />
                   
                </Switch>
            </div>
        
        </BrowserRouter>
       
    </ Provider>

, document.getElementById('root'));


