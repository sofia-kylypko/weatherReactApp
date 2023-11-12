import './App.css';
import React, {useState} from "react"; 

import SearchInput from "./SearchInput.js";
import NextDays from "./NextDays.js";
import Weather from "./Weather.js";

function App() {
  let defaultCity="Kharkiv";

  return (
    <div className="App">
      <header><h1>Weather React App</h1></header>
      <main>
        <Weather cityName={defaultCity}/>
        <div className='daysStack'>
          <NextDays />
          <NextDays />
          <NextDays />
          <NextDays />
          <NextDays />
        </div>
      </main>
      <footer><a href='https://github.com/sofia-kylypko/weatherReactApp/tree/master'>open source</a></footer>
    </div>
  );
}

export default App;
