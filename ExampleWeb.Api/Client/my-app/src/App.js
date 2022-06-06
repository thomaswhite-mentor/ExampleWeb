import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react';
function App() {
const [events, setEvents] = useState([]);
useEffect(()=> {
    fetch("https://api-examplewebapp.azurewebsites.net/api/WeatherForecast/GetConfig")
.then(response => response.text())
.then(data=>{
  console.log(data);
  setEvents(data);
}).catch( err=> {
  console.log("Error Reading data " + err);
})
},[])
  return (
    <div className="App">
    { 
       <ol>
         Environment: {events} 
       </ol>}
    </div>
  );
}

export default App;
