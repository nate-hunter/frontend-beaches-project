import React from 'react';
import BeachList from './BeachList'
import Filter from './Filter'


class BeachContainer extends React.Component {

  state = {
    filteredBeaches: []
  };

  handleChange = (e) => {
    let filteredBeaches
    if (e.target.value === "All") {
      filteredBeaches = this.props.beaches
    } else {
      filteredBeaches = this.props.beaches.filter(beach => beach.surftype === e.target.value)
    }
    this.setState({
      filteredBeaches
    });
  };

  render(){


  return(
    <div className="beach-container">
      <Filter handleChange={this.handleChange}/>
      <BeachList
        beaches={this.state.filteredBeaches.length > 0 ? this.state.filteredBeaches : this.props.beaches}
        handleClick={this.handleClick}/>
    </div>
    );
  };
};

export default BeachContainer;
