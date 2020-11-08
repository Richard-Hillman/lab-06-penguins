import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                
                <div>
                    <Link to="/">LIST</Link>
                </div>

                <div>
                    <Link to ="/Create">Create</Link>
                </div>

                
            </div>
        )
    }
}