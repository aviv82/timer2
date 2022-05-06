import './Button.css'

export const Button = ({name, title}) => {
    return(
        <div className="btn">
<button className={title}>{name}</button>
            </div>)
}