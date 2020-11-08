import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import Create from './Create.js';
import Update from './Update.js';
import List from './List.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <List {...routerProps} />} 
                        />
                        <Route 
                            path="/Create" 
                            exact
                            render={(routerProps) => <Create {...routerProps} />} 
                        />
                        <Route 
                            path="/Update/:id" 
                            exact
                            render={(routerProps) => <Update {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}