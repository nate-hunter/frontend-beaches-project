import React from 'react';

const Filter = (props) => {
  return (
    <div className="beach-filter">
      <h4>Select Beach by Activity</h4>
      <select value={props.term} onChange={props.handleChange} >
        <option value="All">All</option>
        <option value="Surf">Surf</option>
        <option value="Body Surf">Body Surf</option>
        <option value="Swim">Swim</option>
        <option value="Camp">Camp</option>
        <option value="Relax">Relax</option>
      </select>
    </div>
  )
};

export default Filter;
