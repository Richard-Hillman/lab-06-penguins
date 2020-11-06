import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import Create from './Create.js';
import Details from './Details.js';
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
                            path="/create" 
                            exact
                            render={(routerProps) => <Create {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:id" 
                            exact
                            render={(routerProps) => <Details {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}