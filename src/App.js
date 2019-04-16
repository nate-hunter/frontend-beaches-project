import React, { Component } from 'react';
import './App.css';
import BeachContainer from './components/BeachContainer';
import Favorites from './components/Favorites';
import Form from './components/Form'

class App extends Component {
  state = {
    beaches: []
  };

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/beaches`)
    .then(resp => resp.json())
    .then(beaches => {
      this.setState({
        beaches
      });
    });
  };

  handleAddNewBeach = (e, beach) => {
    e.preventDefault()

    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: beach.name,
        location: beach.location,
        island: 'Oahu',
        img: beach.img,
        surftype: beach.surftype,
        zipcode: beach.zipcode
      })
    };
    fetch("http://localhost:3000/api/v1/beaches", fetchObj)
    .then(resp => resp.json())
    .then(beach => {
      this.setState({
        beaches: [beach, ...this.state.beaches]
      }, () => console.log(this.state.beaches));
    });
  };

  addFavoriteBeach = (e, beachObj) => {
    const beachesCopy= [...this.state.beaches]
    const beach = beachesCopy.find(beach => beach.id === beachObj.id)
    beach.favorite = true
    this.setState({
      beaches: beachesCopy
    });
  };

  removeFavoriteBeach = (e, beachObj) => {
    const beachesCopy= [...this.state.beaches]
    const beach = beachesCopy.find(beach => beach.id === beachObj.id)
    beach.favorite = false
    this.setState({
      beaches: beachesCopy
    });
  };

  favoritedBeaches = () => {
    return this.state.beaches.filter(beach => beach.favorite)
  };

  render() {
    return (
      <div className="main">
        <Form handleAdd={this.handleAddNewBeach}/>
        <BeachContainer beaches={this.state.beaches} handleClick={this.addFavoriteBeach}/>
        <Favorites beaches={this.favoritedBeaches()} handleClick={this.removeFavoriteBeach}/>
      </div>
    );
  };
};

export default App;
