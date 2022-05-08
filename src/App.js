import './App.css';
import {useState, useEffect, useRef} from 'react'
import {Button} from './components/button/Button'
import { Timer } from './components/timer/Timer';
import { renderTime } from './logic/renderTime';

function App() {

const [time, setTime] = useState(1500);
const [timerOn, setTimerOn] = useState(false);
const [timerId, setTimerId] = useState(1)
const [blink, setBlink] =useState(false)

useEffect(()=> {
  setTimerOn(false)
  },[timerId])

useEffect(()=> {
  let intervalID = ()=>{};
if (timerOn) {
  setBlink(true);
intervalID = setInterval(() => {setTime(prev => prev -1)}, 1000
)
} else {
  setBlink(false);
clearInterval(intervalID);
}
return ()=> clearInterval(intervalID);
},[timerOn])



  return (
    <div className="App">
      <header className="header">
      <h1>
        Timer App
      </h1>
<Button click={()=> {setTime(1500); setTimerId(1)}} title="button"name="Focus"/>
<Button click={()=> {setTime(1200); setTimerId(2)}} title="button"name="Long Break"/>
<Button click={()=> {setTime(600); setTimerId(3)}} title="button"name="Short Break"/>
     
      </header>
      <Timer time={renderTime(time)} blink={blink}/>
<Button click={()=> setTimerOn(true)}title="green" name="Start"/>
<Button click={()=> setTimerOn(false)}title="red" name="Stop"/>
<Button click={()=> setTimerOn(true)}title="blue" name="Resume"/>
<Button click={()=> {timerId ===1?setTime(1500):timerId===2?setTime(1200):setTime(600); setTimerOn(false)}}title="blue" name="Reset"/>
    </div>
  );
}

export default App;
