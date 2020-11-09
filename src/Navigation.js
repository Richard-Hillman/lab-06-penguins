import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <span>
                    <span className="one">
                        <Link to="/">LIST</Link>
                    </span>
               
                    <span className="two">
                        <Link to ="/Create">Create</Link>
                    </span>
        
                </span>

                
            </div>
        )
    }
}