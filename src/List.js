
import React from 'react';
import './App.css';
import { fetchpenguins } from './Fetchers.js'

export default class List extends React.Component {

  state = {
    penguins:[], 
    name:'',
    number_of_feet:'',
    eats_fish:'',
    size:''
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
        <header className="App-header">
        This is the header
        </header>
      </div>
console.log(penguins);
      <div calssName="map">
        {
          penguins.map(penguin => 
            <div>
              <h2>Penguin Type: {penguin.name}</h2>
              <div>Number Of Feet: {penguin.number_of_feet}</div>
              <div>Eats Fish: {penguin.eats_fish.toString()}</div>
              <div>How Large: {penguin.size}</div>
            </div>
          )
        }
      </div>
      </>
    );
  }

}

