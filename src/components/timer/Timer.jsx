import './Timer.css'

export const Timer = ({time}) => {
    return(
<div className="timer">
    <h1 className="clock">{time.minutes}:{time.seconds}</h1>
</div>
)
}