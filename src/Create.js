
import React, { Component } from 'react'
import { fetchSizes, createPenguin } from './Fetchers.js';
import Navigation from './Navigation.js'
// ==========================================================================


const User = {
    userId: 1,
};

export default class Create extends Component {
    state = {
        sizes: [],
        penguins:[], 
        name:'fork',
        numberOfFeet: 3,
        eatsFish: true,
        sizeId: 1 
    }


    componentDidMount = async () => {
        const sizes = await fetchSizes()
        this.setState({ sizes });
    }

    handleSubmit = async (e) => {
        e.preventDefault(); 

        await createPenguin({
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
        console.log(this.state)
        return (
            <>
            <Navigation />

            <form onSubmit={this.handleSubmit}>
                <label>

                    <h1>Create a Penguin</h1>

                    <div>
                        Name Of Species:
                    </div>
                    <div>     
                        <input onChange={this.handleName} type="text" defaultValue="Penguin Species" value={this.state.name} /> 
                    </div>
                    
                    <div>
                        <div>
                        Number Of Feet: 
                        </div>
                        <input onChange={this.handleFeet} type="number" defaultValue="0" value={this.state.numberOfFeet}/>
                    </div>

                </label>

                <label>

                    <select onChange={this.handleTruthD}>
                        <option value={true}>TRUE</option>
                        <option value={false}>FALSE</option>
                    </select>

                    <select onChange={this.handleSizeD}> 
                        {
                            this.state.sizes.map(size => <option key={size.id} value={size.id}>
                                {size.size}
                            </option>)
                        }
                    </select>
                </label>

                <button>Submit</button>

            </form>

            </>
        )
    }
}