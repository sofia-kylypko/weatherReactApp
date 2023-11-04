import './App.css';

import SearchInput from "./SearchInput.js";
import Weather from "./Weather.js";
import NextDays from "./NextDays.js";

function App() {
  return (
    <div className="App">
      <header><h1>Weather React App</h1></header>
      <main>
        <SearchInput />
        <Weather />
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
