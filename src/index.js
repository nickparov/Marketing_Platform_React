import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import search_reducer from './store/reducers/search_reducer';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(search_reducer, composeEnhancers());

const app = (<BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider> 
            </BrowserRouter>);

ReactDOM.render(app, document.getElementById('root'));
