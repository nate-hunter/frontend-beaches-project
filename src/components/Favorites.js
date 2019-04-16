import React from 'react';
import Beach from './Beach';

class Favorites extends React.Component {


  render(){
    const favoritedBeaches = this.props.beaches.map(beach => {
      return <Beach key={beach.id} beach={beach} handleClick={this.props.handleClick}/>
    })
    return(
      <div className="favorites">
        <h3 className="list-header">Favorites</h3>
        {favoritedBeaches}
      </div>
    );
  };
};

export default Favorites;
