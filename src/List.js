
import React from 'react';
import './App.css';
import { fetchPenguins } from './Fetchers.js'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

export default class List extends React.Component {

  state = {
    penguins:[], 
    name:'',
    number_of_feet:'',
    eats_fish:'',
    sizes:'',
    size_id:''
  }

  componentDidMount = async () => {
    const penguins = await fetchPenguins();

    // const response = await fetch.get('https://frozen-castle-37316.herokuapp.com/penguins');
    this.setState({ penguins });
  }

  render() {
    const { penguins } = this.state; 
    return (
      <>
      <div className="App">
        <header>
          <Navigation />
        </header>
      </div>

      <div className="map">
        {
          penguins.map(penguin => 
            <div className="penguinS">
              <Link to={`/update/${penguin.id}`}>
                Penguin Type: {penguin.name}
              </Link>
              <div>Number Of Feet: {penguin.number_of_feet}</div>
              <div>Eats Fish: {penguin.eats_fish.toString()}</div>
              <div>How Large: {penguin.sizes}</div>
            </div>
          )
        }
      </div>
      </>
    );
  }

}

