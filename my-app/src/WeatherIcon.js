import React, {useState} from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    let states={
        "Atmosphere":"FOG",
        "Thunderstorm":"RAIN",
        "Drizzle":"RAIN",
        "Rain":"RAIN",
        "Snow":"SNOW",
        "Clear":"CLEAR_DAY",
        "Clouds":"CLOUDY"
    };
    return <ReactAnimatedWeather
    icon={states[props.info]}
    color="orange"
    size={40}
    animate={true}
  />;
}