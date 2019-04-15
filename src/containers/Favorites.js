import React from 'react';
import Beach from '../components/Beach'

const Favorites = (props) =>  {

  const favoritedBeaches = props.beaches.map(beach => {
    return <Beach key={beach.id} beach={beach} handleClick={props.handleClick} />
  })

  return(
    <div className="favorites">
      <h1>FAVORITES:</h1>
      {favoritedBeaches}
    </div>
  );
};

export default Favorites;
