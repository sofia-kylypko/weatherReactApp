import React, {useState} from "react";

export default function WeatherTemp(props){
    let [unit, setUnit]=useState("celsium");
    let temp=props.temperature;

    if(unit==="celsium"){
        return (
            <div>
                <h1 className="temperature">
                <span className="value">{Math.round(temp)}</span>
                <span id="celsiumMode" className="activeMode" onClick={changeMode}>°C</span> | 
                <span id="farenheitMode" onClick={changeMode}>°F</span>
                </h1>
            </div>
        );
    }else{
        return (
        <div>
            <h1 className="temperature">
            <span className="value">{Math.round(temp*9/5+32)}</span>
            <span id="celsiumMode" onClick={changeMode}>°C</span> | 
            <span id="farenheitMode" className="activeMode" onClick={changeMode}>°F</span>
            </h1>
        </div>);
    }

    function changeMode(event){
        let valueArea=document.getElementsByClassName("value");
        console.log(valueArea.value);
        if(event.target.id==="celsiumMode" && event.target.className!=="activeMode"){
            event.target.className="activeMode";
            document.getElementById("farenheitMode").classList.remove("activeMode");
            //fareinheit to celcium
            setUnit("celsium");
        }else if(event.target.id==="farenheitMode" && event.target.className!=="activeMode"){
            event.target.className="activeMode";
            document.getElementById("celsiumMode").classList.remove("activeMode");
            //from celcium to fareinheit
            setUnit("fareinheit");
        }
    }

}