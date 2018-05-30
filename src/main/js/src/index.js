import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducers from './reducers';
import Homepage from "./views/Homepage/Homepage";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Homepage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
