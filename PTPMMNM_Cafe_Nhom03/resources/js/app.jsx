import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import '../css/bootstrap.min.css';
import '../css/style.css'
import App from './components/admin/App';

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
