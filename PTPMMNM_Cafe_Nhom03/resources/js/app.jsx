import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../css/bootstrap.min.css';
import '../css/style.css';
import LoginIndex from './features/Login';
import HeaderAdmin from './components/admin/header_admin';
import App from './components/App';
if (document.getElementById('root')) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App></App>
                {/* <LoginIndex /> */}
            </BrowserRouter>

        </React.StrictMode>
        , document.getElementById('root'));
}
if (document.getElementById('Login')) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <LoginIndex />
            </BrowserRouter>

        </React.StrictMode>
        , document.getElementById('Login'));
}
if (document.getElementById('homeAdmin')) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <HeaderAdmin></HeaderAdmin>
            </BrowserRouter>

        </React.StrictMode>
        , document.getElementById('homeAdmin'));
}