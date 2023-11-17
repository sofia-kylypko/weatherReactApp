import React from "react";

import WeatherIcon from "./WeatherIcon.js";

export default function NextDays(props){
    if(props.weather){
        const {
            temperature:{
                maximum,
                minimum
            },
            condition:{
                description
            },
            time
        }=props.weather;
        
        function formatDate(time){
            let weekDays=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
            let today=new Date(time*1000);
            let todayIndex=today.getDay()-1;
            if(todayIndex===-1){
                todayIndex=6;
            }
            return weekDays[todayIndex];
        }
        console.log(props.weather)
        return(
            <div className="nextDays">
                <h2>{formatDate(time)}</h2>
                <WeatherIcon info={description}/>
                <p>{Math.round(maximum)} | <span className="minimum">{Math.round(minimum)}</span> °C</p>
            </div>
        );
    }
}
