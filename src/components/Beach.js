import React from 'react';
import Type from './Type'
import ReactWeather from 'react-open-weather';

const Beach = (props) => {

  // const surfTypes = props.beach.surftype.split(', ').map(t => {
  //   return <Type type={t} key={t}/>
  // })

  return(
    <div className="beach">
      <h2>{props.beach.name}</h2>
      <img src={props.beach.img} alt={props.beach.name} />
      <p>- {props.beach.location}, {props.beach.island} -</p>
      {props.beach.favorite ? <button className="remove" onClick={(e) => props.handleClick(e, props.beach)}>REMOVE</button> :
        <button className="favorite" onClick={(e) => props.handleClick(e, props.beach)}>ADD TO FAVORITE</button>}
      <p><b>Favorite Activity:</b> {props.beach.surftype}</p>
      <ReactWeather forecast="today" apikey="060f9d67f5084f699d240259191504" type="city" city="Honolulu" unit="imperial"/>
    </div>
  );
};

export default Beach;

// {props.beach.favorite ? <button className="remove" onClick={(e) => props.handleClick(e, props.beach)}>REMOVE</button> :
//   <button className="favorite" onClick={(e) => props.handleClick(e, props.beach)}>ADD TO FAVORITE</button>}
