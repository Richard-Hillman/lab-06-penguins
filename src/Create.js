import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { fetchSizes, createPenguin } from './Fetchers.js';

// ==========================================================================

const User = {
    userId: 1
};

export default class Create extends Compnent {
    state = {
        sizes: []
    }
} 

componentDidMount = async () => {
    const sizes = await fetchSizes();
    this.setState({ sizes });
}

handleSubmit = async (e) => {
    e.preventDefault(); 

    await createPenguins({
        name: this.state.name,
        number_of_feet: this.state.numberOfFeet,
        eats_fish: this.state.eatsFish,
        size_id: this.state.sizeId,
        owner_id: User.userId
    });

    this.props.history.push('/')
} 

// ============================================================================

handleName = (e) => {
    this.setState({name: e.target.value})
}

handleFeet = (e) => {
    this.setState({numberOfFeet: e.target.value})
}

handleTruthD = (e) => {
    this.setState({eatsFish: e.target.value});
}

handleSizeD = (e) => {
    this.setState({sizeId: e.target.value});
}

// =============================================================================

render() {
    return (
        
        <form onSubmit={this.handleSubmit}>
            <label>

                <h1>Create a Penguin</h1>

                <div>
                    <input onChange={this.handleName} type='text' defaultValue='Penguin Species'> </input>
                </div>
                
                <div>
                    <input onChange={this.handleFeet} type='number' defaultValue='Number Of Feet'> </input>
                </div>

            </label>

            <label>

                <select onChange={this.handleTruthD}>
                    <option value='true'>TRUE</option>
                    <option value='false'>FALSE</option>
                </select>

                <select onChange={this.handleSizeD}> 
                    {
                        this.state.sizes.map(size => <option key={size.id} value={size.id}>
                            {size.size}
                        </option>)
                    }
                </select>
            </label>

        </form>
    )
}
