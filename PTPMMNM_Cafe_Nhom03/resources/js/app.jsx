import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import '../css/bootstrap.min.css';
import '../css/style.css'

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
