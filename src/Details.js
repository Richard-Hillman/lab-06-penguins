import React, { Component } from 'react'
import {
    updatePenguin,
    fetchPenguin,
    fetchSizes,
    fetchPenguins
} from './Fetchers.js'

const User = { 
    userId: 1 
};

export default class Details extends Component {
    state = {
        size: [],
        sizeId: 1

    }

    componentDidMount = async () => {
        const sizes = await fetchSizes();
        const penguin = await fetchPenguin(this.props.match.params.id);
        const sizesStringed = penguin.size;
   
        const matchingSize = size.find((size)=> {
            return size.name === sizesStringed
        });

        this.setState({
            sizes: sizes,
            sizeId: matchingSize.id,
        })
    }

// =======================================================================================

handleSubmit = async (e) => {
    e.prevent.default();

    await updatePenguin(
        this.props.match.params.id,
        {
            size_id: this.state.sizeId,
            owner_id: User.userId
        }
    );

    this.props.history.push('/');
}

// ===========================================================================================

handleSizeD = (e) => {
    this.setState({ sizeId: e.target.value });
}

// ============================================================================================

render() {
    return (
        <div>
            <h2>Update Details</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Size: <select onChange={this.handleSizeD}>
                        {
                            this.state.sizes.map(size => <option
                                selected={this.state.sizeId === size.id}
                                key={size.id}
                                value={size.id}>
                                    {size.size}
                            </option>
                            )
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}


}