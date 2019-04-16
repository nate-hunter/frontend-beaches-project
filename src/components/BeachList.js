import React from 'react';
import Beach from './Beach'

const BeachList = (props) => {

  const beachList = props.beaches.map(beach => {
      return <Beach key={beach.id} beach={beach} handleClick={props.handleClick}/>
    })


  return(
    <div >
      <h3 className="list-header">List of Oahu Beaches</h3>
      {beachList}
    </div>
  );
};

export default BeachList;
