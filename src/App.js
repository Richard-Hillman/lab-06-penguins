
import React from 'react';
import './App.css';
import fetch from 'superagent';


export default class App extends React.Component {

  state = {
    penguinData:[], 
    name:'',
    number_of_feet:'',
    eats_fish:'',
    size:'',
  };

  componentDidMount = async () => {
    const response = await fetch.get('https://frozen-castle-37316.herokuapp.com/penguins');
    this.setState({ penguinData: response.body});
  }

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
        This is the header
        </header>
      </div>
console.log(penguinData);
      <div calssName="map">
        {
          this.state.penguinData.map(penguin => 
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

