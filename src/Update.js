import React, { Component } from 'react';
import {
    updatePenguin,
    fetchPenguin,
    fetchSizes,
    deletePenguin

} from './Fetchers.js';
import Navigation from './Navigation.js';
import request from 'superagent';
import './update.css';



const User = { 
    userId: 1 
};

export default class Update extends Component {
 
        state = {
            sizes: [],
            penguins:[], 
            name:'fork',
            numberOfFeet: 3,
            eatsFish: true,
            sizeId: 1, 
        }

    componentDidMount = async () => {
        const sizes = await fetchSizes();
        const penguin = await fetchPenguin(this.props.match.params.id);
        const sizesStringed = penguin.size;
                
        const matchingSize = sizes.find((size)=> {
            return size.name === sizesStringed
        });

        this.setState({
            sizes: sizes,
            sizeId: matchingSize,
        })
    }

// =======================================================================================

handleSubmit = async (e) => {
    e.prevent.default();

    updatePenguin = ({
    
            name: this.state.name,
            number_of_feet: this.state.numberOfFeet,
            eats_fish: this.state.eatsFish,
            size_id: this.state.sizeId,
            owner_id: User.userId
    });
    ;

    await request 
        .put(`https://frozen-castle-37316.herokuapp.com/${this.props.match.params.id}`)
        .send(updatePenguin);

    this.props.history.push('/');
}

// ===========================================================================================

handleSizeD = (e) => {
    this.setState({ sizeId: e.target.value });

    
    this.props.history.push('/')
}

handleDelete = async (e) => { 
    e.preventDefault(); 
    await deletePenguin(this.props.match.params.id)

    this.props.history.push('/')
}

// ============================================================================================

 
render() {
    return (
        <div>
            <div className="header">
                <Navigation />
            </div>
            <form onSubmit={this.handleSubmit}>
                <label>

                    <h1>Update a Penguin</h1>

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

                <section> 

                    <h2> DELETE A PENGUIN </h2>

                    <div>{this.props.name}</div>

                    <div><button onClick={this.handleDelete}>DELETE THIS PENGUIN</button></div>

                </section>

            </form>

        </div>
    )
}


}