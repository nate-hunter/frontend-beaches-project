import React from 'react';

class Form extends React.Component {

  state = {
    name: '',
    island: 'Oahu',
    location: '',
    img: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    console.log('form', console.log(this.state))
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Beach Name" />
          <input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="Location on Island" />
          <input type="text" name="img" value={this.state.img} onChange={this.handleChange} placeholder="Beach Image" />
          <select type="text" name="island" value={this.state.island} onChange={this.handleChange}>
            <option value="Oahu">OAHU</option>
            <option value="Maui">MAUI</option>
            <option value="Kauai">KAUAI</option>
            <option value="Big Island">BIG ISLAND</option>
            <option value="Lanai">LANAI</option>
            <option value="Molokai">MOLOKAI</option>
          </select>
          <input type="submit" value="Add Beach"/>
        </form>
      </div>
  )};
};

export default Form;
