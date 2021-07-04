import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

import './theme.less';

import React from 'react';


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

