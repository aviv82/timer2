import './App.css';
import {useState} from 'react'
import {Button} from './components/button/Button'
import { Timer } from './components/timer/Timer';
import { renderTime } from './logic/renderTime';

function App() {

const [time, setTime] = useState(1500)

  return (
    <div className="App">
      <header className="header">
      <h1>
        Timer App
      </h1>
      <button onClick={()=> console.log(Math.floor(-1))}></button>
<Button click={()=> setTime(1500)} title="button"name="Focus"/>
<Button click={()=> setTime(1200)} title="button"name="Long Break"/>
<Button click={()=> setTime(600)} title="button"name="Short Break"/>
     
      </header>
      <Timer time={renderTime(time)}/>
<Button title="green" name="Start"/>
<Button title="red" name="Stop"/>
<Button title="blue" name="Reset"/>

    </div>
  );
}

export default App;
