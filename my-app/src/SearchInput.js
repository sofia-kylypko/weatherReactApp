import React, {useState} from "react";
import axios from "axios";

import Weather from "./Weather.js";

export default function SearchInput(){
    const apiKey="9cb72bec958f8fb02391985ed7b219d2";

    let [city, setCity] = useState("Kharkiv");
    let [forecast, setData]=useState();

    function submitting(event){
        event.preventDefault();
        let userInput=event.target.input.value;
        setCity(userInput);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=9cb72bec958f8fb02391985ed7b219d2`;
        axios.get(url).then(showResponse);
    }

    function showResponse(response){
        console.log(response);
        setData(response);
        // setReady(true);
    }

    function initialForecast(){
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9cb72bec958f8fb02391985ed7b219d2`;
        axios.get(url).then(showResponse);
    }

    return (
        <div > 
            <form className="searhInput" onSubmit={submitting}>
                <input id="input" type="text" />
                <label><button>Search</button></label>
                <label><button>Current</button></label>
            </form>
            {/* <Weather cityName={city} weather={forecast}/> */}
        </div>
    );
}