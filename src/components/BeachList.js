import React from 'react';
import Beach from './Beach'

const BeachList = (props) => {

  const beachList = props.beaches.map(beach => {
      return <Beach key={beach.id} beach={beach} handleClick={props.handleClick}/>
    })


  return(
    <div className="beach-list">
      <h5>BEACHES</h5>
      {beachList}
    </div>
  );
};

export default BeachList;
