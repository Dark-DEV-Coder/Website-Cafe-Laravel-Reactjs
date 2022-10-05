import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    Hello
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

