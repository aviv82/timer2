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

let counter = 0
if(timerId===1) {
  counter = time/2.08-720;
}else if (timerId===2) {
  counter = time/1.666-720
} else if (timerId===3){
  counter = time/.83-720;
}
let pound = {"--x": counter}

  return (
    <div className="App">
      <header className="header">
      <h1>
        Timer App
      </h1>
      <div className="upper">
<Button click={()=> {setTime(1500); setTimerId(1)}} title="button"name="Focus"/>
<Button click={()=> {setTime(1200); setTimerId(2)}} title="button"name="Long Break"/>
<Button click={()=> {setTime(600); setTimerId(3)}} title="button"name="Short Break"/>
      </div>
      </header>
      <div className='timer'>
<Timer time={renderTime(time)} blink={blink}/>
      <svg style={pound}className='circle' width="242" height="225" viewBox="0 0 242 225" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M238 112.5C238 172.154 185.897 221 121 221C56.1033 221 4 172.154 4 112.5C4 52.8465 56.1033 4 121 4C185.897 4 238 52.8465 238 112.5Z" stroke="#5869FF" strokeWidth="8"/>
</svg>
      </div>
      <div className='lower'>
      {!timerOn && (time === 1500 || time === 1200 || time === 600)  && (<Button click={()=> setTimerOn(true)}title="green" name="Start"/>)}
      {timerOn && (<Button click={()=> setTimerOn(false)}title="red" name="Stop"/>)}
      {!timerOn && (time !== 1500 && time !== 1200 && time !== 600) && (<Button click={()=> setTimerOn(true)}title="blue" name="Resume"/>)}
      {time !== 1500 && time !== 1200 && time !== 600 && (<Button click={()=> {timerId ===1?setTime(1500):timerId===2?setTime(1200):setTime(600); setTimerOn(false)}}title="blue" name="Reset"/>)}
      </div>
    </div>
  );
}

export default App;
