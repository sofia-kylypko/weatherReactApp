import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
  const getIcon = weather => {
    const states={
      FOG: ['Atmosphere',"mist","smoke","haze","sand/dust whirls","fog","sand","dust","volcanic ash","squalls","tornado"],
      RAIN: ['Thunderstorm', 'Drizzle', 'Rain',"shower rain","rain","thunderstorm","light intensity drizzle","drizzle","heavy intensity drizzle","light intensity drizzle rain","drizzle rain","heavy intensity drizzle rain","shower rain and drizzle","heavy shower rain and drizzle","shower drizzle","thunderstorm with rain","thunderstorm with heavy rain","light thunderstorm","	heavy thunderstorm","ragged thunderstorm","thunderstorm with light drizzle","thunderstorm with drizzle","thunderstorm with heavy drizzle","light rain","moderate rain","heavy intensity rain","very heavy rain","extreme rain","freezing rain","light intensity shower rain","shower rain","heavy intensity shower rain","ragged shower rain"],
      SNOW: ['Snow',"snow","light snow","heavy snow","sleet","light shower sleet","shower sleet","light rain and snow","rain and snow","light shower snow","shower snow","heavy shower snow"],
      CLEAR_DAY: ["clear sky",'Clear',"sky is clear"],
      CLOUDY: ['Clouds', 'Overcast clouds',"few clouds", "scattered clouds", "broken clouds","few clouds","scattered clouds","broken clouds","overcast clouds"]
    };
    
    const state = Object.keys(states).find(key => {
      const data = states[key].map(state => state.toLowerCase());
      return data.includes(weather.toLowerCase());
    });
    
    return state;
  };
   
  return <ReactAnimatedWeather
    icon={getIcon(props.info)}
    color="orange"
    size={40}
    animate={true}
  />;
}