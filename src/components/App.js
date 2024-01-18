
import React from "react";
import './../styles/App.css';

const App = () => {
  
  const weather= {temperature:25, conditions: "Sunny"};
  const tempColor= weather.temperature>20 ? "red": "blue";
  // console.log(tempColor);
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Weather Report</h1>
        <p>Temperature: <span style={{color:tempColor}}>{weather.temperature}</span></p>
        <p>Conditions: <span>{weather.conditions}</span></p>
    </div>
  )
}

export default App
