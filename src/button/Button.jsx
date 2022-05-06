import './Button.css'

export const Button = ({name, title, click}) => {
    return(
        <div className="btn">
<button onClick={click}className={title}>{name}</button>
            </div>)
}