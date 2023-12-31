import React, { useState } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon.js";
import WeatherTemp from "./WeatherTemp.js";
import NextDays from "./NextDays.js";

export default function Weather(){
    const [ready, setReady]=useState(false);
    const [returnedData, setReturnedData]=useState();
    const [city,setCity]=useState("Kharkiv");
    const [nextDaysData, setNextDaysData]=useState([]);

    let apiKey="1dbf926d3b4417bf379db7043bec1047";

    function handle(event){
        event.preventDefault();
        setCity(event.target.input.value);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.input.value}&units=metric&appid=${apiKey}`;
        axios.get(url).then(showResponse);
        event.target.input.value="";
    }

    function showResponse(response){
        setReturnedData(response);
        const {
            data: {
                coord: {
                    lon,
                    lat
                }
                
            }
        } = response;
        let nextDaysAPI=`https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=dc4fa97dd0aa64407o93bea76f4taaab`;
        axios.get(nextDaysAPI).then(showNextDays);
        setReady(true);
    }

    function showNextDays(response){
        const {
            data: {
                daily
            }
        }=response;
        setNextDaysData(daily);
        
    }

    function formatDate(time){
        let weekDays=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
        let today=new Date(time);
        
        let minutes=today.getMinutes();
        if(minutes.toString().length<2){
            minutes=`0${minutes}`;
        }
        let todayIndex=today.getDay()-1;
        if(todayIndex===-1){
            todayIndex=6;
        }
        let todayData=`${weekDays[todayIndex]} ${today.getHours()}:${minutes}`;
        return todayData;
    }

    if(ready){
        const {
            data: {
                main: { 
                    temp,
                    humidity
                },
                dt,
                name,
                weather: [
                    {
                        main,
                    }
                ],
                wind:{
                    speed,
                }
                
            }
        } = returnedData;

        return (<div>
            <form className="searhInput" onSubmit={handle}>
                <input id="input" type="text" />
                <label><button>Search</button></label>
            </form>
            <div className="currentWeather">
                <h1>{name}</h1>
                <p>Last update: {formatDate(dt*1000)}</p>
                <p>{main}</p>
                <WeatherTemp temperature={temp}/>
                <WeatherIcon info={main}/>
                <p>Humidity: {humidity}%</p>
                <p>Wind: {Math.round(speed)}km/h</p>
            </div>
            <div className='daysStack'>
                {nextDaysData.map(item=>{
                    if(nextDaysData.indexOf(item)!==0){
                        return <NextDays weather={nextDaysData[nextDaysData.indexOf(item)]}/>;
                    }
                    return "";
                })}
            </div>
            
        </div>); 
    }else{
        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(url).then(showResponse);

        return "Loading...";
    }
    
}