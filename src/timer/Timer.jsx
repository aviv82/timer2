import './Timer.css'

export const Timer = ({time}) => {
    return(
<div className="timer">
    <h1 className="clock">{time}</h1>
</div>
)
}