import React, { Component } from 'react';
import BeachList from './containers/BeachList'
import Favorites from './containers/Favorites'
import './App.css';
import ReactWeather from 'react-open-weather';
// import 'react-open-weather/lib/css/ReactWeather.css';

class App extends Component {

  state = {
    beaches: []
  };

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/beaches")
    .then(resp => resp.json())
    .then(beaches => {
      this.setState({
        beaches
      });
    });
  };

  handleSubmit = (e, beachObj) => {
    e.preventDefault()
    this.setState({
      beaches: [beachObj, ...this.state.beaches]
    });
  };

  handleAddFaveBeach = (e, beachObj) => {
    const beachesCopy = [...this.state.beaches]
    const beach = beachesCopy.find(beach => beach.id === beachObj.id)
    beach.favorite = true
    this.setState({
      beaches: beachesCopy
    });
  };

  handleRemoveFaveBeach = (e, beachObj) => {
    const beachesCopy = [...this.state.beaches]
    const beach = beachesCopy.find(beach => beach.id === beachObj.id)
    beach.favorite = false
    this.setState({
      beaches: beachesCopy
    });
  };

  favoriteBeaches = () => {
    return this.state.beaches.filter(beach => beach.favorite)
  };
  
  render() {
    return (
      <div className="beach-container">
        <h3>OAHU 5-DAY FORECAST</h3>
        <ReactWeather forecast="5days" apikey="060f9d67f5084f699d240259191504" type="city" city="Honolulu" unit="imperial"/>
        <BeachList beaches={this.state.beaches} handleSubmit={this.handleSubmit} handleClick={this.handleAddFaveBeach}/>
        <Favorites beaches={this.favoriteBeaches()} handleClick={this.handleRemoveFaveBeach} />
      </div>
    );
  };
};

export default App;
