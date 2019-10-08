import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from './Blog';
import {Provider} from "react-redux";
import store from "./store";




ReactDOM.render(
    <Provider store={store}>
        <Blog />
    </Provider>,

    document.getElementById('root'));
