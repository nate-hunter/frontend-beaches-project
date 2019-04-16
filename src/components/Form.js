import React from 'react';

class Form extends React.Component {

  state = {
    name: '',
    island: 'Oahu',
    location: '',
    img: '',
    surftype: '',
    zipcode: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render(){
    return(
      <div>
        <form onSubmit={(e) => {this.props.handleAdd(e, this.state)}}>
          <input value={this.props.name} name="name" placeholder="Beach Name" onChange={this.handleChange} />
          <input value={this.props.location} name="location" placeholder="Location on Island" onChange={this.handleChange} />
          <input value={this.props.img} name="img" placeholder="Image of Beach" onChange={this.handleChange} />
          <select value={this.props.surftype} name="surftype" onChange={this.handleChange} >
            <option value="Surf">Surf</option>
            <option value="Body Surf">Body Surf</option>
            <option value="Swim">Swim</option>
            <option value="Camp">Camp</option>
            <option value="Relax">Relax</option>
          </select>
          <input value={this.props.zipcode} onChange={this.handleChange} name="zipcode" placeholder="Zipcode (for weather data)" />
          <input type="submit" value="Add Beach" />
        </form>
      </div>
    );
  };
};

export default Form;
