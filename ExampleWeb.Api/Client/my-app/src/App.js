import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react';
function App() {
const [events, setEvents] = useState([]);
useEffect(()=> {
    fetch("https://api-examplewebapp.azurewebsites.net/WeatherForecast")
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
