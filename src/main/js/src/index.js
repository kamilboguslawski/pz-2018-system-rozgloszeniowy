import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducers from './reducers';
import Homepage from "./views/Homepage/Homepage";
import Login from "./views/Login/Login";
import Users from "./views/Users/Users";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/users" component={Users}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Homepage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
