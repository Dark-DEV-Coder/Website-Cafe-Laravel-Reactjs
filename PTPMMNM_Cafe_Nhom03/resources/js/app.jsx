import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import '../css/bootstrap.min.css';
import '../css/style.css';
import App from './components/admin/App';
// import { BrowserRouter } from 'react-router-dom';
if (document.getElementById('app')) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>

        </React.StrictMode>
        , document.getElementById('app'));
}
