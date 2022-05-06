import './App.css';
import {useState} from 'react'
import {Button} from './button/Button'
import { Timer } from './timer/Timer';

function App() {
const [time, setTime] = useState(30)
  return (
    <div className="App">
      <header className="header">
      <h1>
        Timer App
      </h1>
<Button click={()=> setTime(30)} title="button"name="Focus"/>
<Button click={()=> setTime(20)} title="button"name="Short Break"/>
<Button click={()=> setTime(10)} title="button"name="Long Break"/>
     
      </header>
      <Timer time={time}/>
<Button title="green" name="Start"/>
<Button title="red" name="Stop"/>
<Button title="blue" name="Reset"/>

    </div>
  );
}

export default App;
