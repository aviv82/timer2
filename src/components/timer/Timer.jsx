import './Timer.css'

export const Timer = ({time, blink}) => {
    let isBlink = 'off'
    if(blink){
        isBlink ='on';
    } else {
        isBlink = 'off';
    };
    return(
<div className="timer">
    <span className="clock">{time.minutes}</span><span className={isBlink}>:</span><span>{time.seconds}</span>
</div>
)
}