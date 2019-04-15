import React from 'react';
import ReactWeather from 'react-open-weather';
// import 'react-open-weather/lib/css/ReactWeather.css';

const Beach = (props) => {

  return (
    <div className="beach">
      <h3>{props.beach.name}</h3>
      <img src={props.beach.img} alt={props.beach.name} onClick={(e) => props.handleClick(e, props.beach)} />
      <p>- {props.beach.location}, {props.beach.island} -</p>
      <button className="favorite">ADD TO FAVORITE</button>
      <ReactWeather forecast="today" apikey="060f9d67f5084f699d240259191504" type="city" city="Honolulu" unit="imperial"/>
      <br/><br />
    </div>
  );
};

export default Beach;
