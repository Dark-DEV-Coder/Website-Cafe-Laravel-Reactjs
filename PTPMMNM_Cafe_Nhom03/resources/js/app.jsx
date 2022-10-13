import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/admin/login';
import '../css/bootstrap.min.css';
import '../css/style.css'

if (document.getElementById('app')) {
    ReactDOM.render(<Login />, document.getElementById('app'));
}
