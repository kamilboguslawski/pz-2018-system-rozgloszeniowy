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
import Register from "./views/Register/Register";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
                <Route path="/" component={Homepage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
