import React from 'react';

const Type = (props) => {
  return(
    <div>
      {props.type.split(/\"|\[|\]/)}
    </div>
  );
};

export default Type;
