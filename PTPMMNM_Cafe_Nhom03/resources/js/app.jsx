import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import '../css/bootstrap.min.css';
import '../css/style.css'
import App from './components/admin/App';
import TTT from './ttt';
// import { BrowserRouter } from 'react-router-dom';
if (document.getElementById('app')) {
    ReactDOM.render(
        // <BrowserRouter>
        <App />
        //* </BrowserRouter> */ }
        , document.getElementById('app'));
}
if (document.getElementById('ttt')) {
    ReactDOM.render(
        // <BrowserRouter>
        <TTT />
        //* </BrowserRouter> */ }
        , document.getElementById('ttt'));
}
