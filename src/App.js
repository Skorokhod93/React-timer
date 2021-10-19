import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [time, setTime] = React.useState(0)
  const [timerOn, setTimeOn] = React.useState(false)

  React.useEffect(()=>{
    let interval = null;

    if(timerOn){
      interval = setInterval(()=>{
        setTime(prevTime => prevTime + 10 )
      },10)
    } else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)


  },[timerOn])

  return(
    <div className = "App">
      <div>
          <span>{("0" + Math.floor((time / 3600000))).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          
      </div>
      <div>
        <button onClick={() => setTimeOn(true)}>Start</button>
        <button onDoubleClick={() => setTimeOn(false)}>Wait</button>
        <button onClick={() => setTimeOn(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>  
    </div>
    );

}

export default App;
