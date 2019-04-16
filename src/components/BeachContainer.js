import React from 'react';
import BeachList from './BeachList'
import Filter from './Filter'


class BeachContainer extends React.Component {

  state = {
    // filteredBeaches: [],
    term: 'All'
  };

  // handleChange = (e) => {
  //   let term = e.target.value
  //   let filteredBeaches
  //   if (e.target.value === "All") {
  //     filteredBeaches = this.props.beaches
  //   } else {
  //     filteredBeaches = this.props.beaches.filter(beach => beach.surftype === e.target.value)
  //   }
  //   this.setState({
  //     filteredBeaches,
  //     term
  //   });
  // };

  handleChange = (e) => {
    let term = e.target.value
    this.setState({term});
  }

beachList = () => {
   if (this.state.term === "All") {
     return this.props.beaches
   } else {
     return this.props.beaches.filter(beach => beach.surftype === this.state.term)
   }
}


  render(){
    console.log('TEST', this.state);

  return(
    <div>
      <Filter handleChange={this.handleChange} term={this.state.term}/>
      <BeachList
        // beaches={this.state.filteredBeaches.length > 0 ? this.state.filteredBeaches : this.props.beaches}
        beaches={this.beachList()}
        handleClick={this.props.handleClick}/>
    </div>
    );
  };
};

export default BeachContainer;
