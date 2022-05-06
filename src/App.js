import './App.css';
import {useState} from 'react'
import {Button} from './button/Button'
import { Timer } from './timer/Timer';

function App() {
  const upperButtons = [{name: 
  "Focus",
class:"button"}, {name: 
  "Short Break",
class:"button"},
{name: 
  "Long Break",
class:"button"},
]
const lowerButtons = [{name: 
  "Start",
handle: "startHandle", 
class:"green"}, {name: 
  "Stop",
handle: "stopHandle", 
class:"red"},
{name: 
  "Reset",
handle: "resetHandle", 
class:"blue"},
]

const [time, setTime] = useState(1800)
  return (
    <div className="App">
      <header className="header">
      <h1>
        Timer App
      </h1>
     {upperButtons.map((button, index) => 
<Button key={index} title={button.class} name={button.name}/>
     )}
      </header>
      <Timer time={time}/>
      {lowerButtons.map((button, index) => 
<Button key={index} title={button.class} name={button.name}/>
     )}
    </div>
  );
}

export default App;
