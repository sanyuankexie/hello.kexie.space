import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

import './assets/css/bootstrap.min.css';
import './assets/css/Projects-Horizontal.css';

import './theme.less';

import React from 'react';


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

