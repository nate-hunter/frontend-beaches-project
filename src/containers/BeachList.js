import React from 'react';
import Beach from '../components/Beach'
import Form from '../components/Form'

const BeachList = (props) => {

  console.log('in beach list', props.beaches)

  const beachList = props.beaches.map(beach => {
    return <Beach key={beach.id} beach={beach} handleClick={props.handleClick} />
  })

  return(
    <div className="beach-list">
      <Form handleSubmit={props.handleSubmit} />
      <h1>BEACHES:</h1>
      {beachList}
    </div>
  )
};

export default BeachList;
