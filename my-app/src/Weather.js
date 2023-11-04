import React from "react";

export default function Weather(){
    return (
        <div className="currentWeather">
            <h1>Current city Name</h1>
            <p>Update date and time</p>
            <p>Weather state</p>
            <p>temperature</p>
            <img src="https://cdn-icons-png.flaticon.com/128/3222/3222791.png" alt="" />
            <p>Precipitation</p>
            <p>Wind</p>
        </div>
    );
}