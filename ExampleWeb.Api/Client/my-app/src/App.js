import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react';
function App() {
const [events, setEvents] = useState([]);
useEffect(()=> {
fetch("https://localhost:7014/WeatherForecast")
.then(response => response.json())
.then(data=>{
  setEvents(data);
})  
},[])
  return (
    <div className="App">
     {events.map(event =>(
       <ol>
         Date: {event.date}
       </ol>
     ))}
    </div>
  );
}

export default App;
