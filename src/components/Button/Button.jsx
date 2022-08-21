import style from './Button.module.css'

function Button({ title = 'not tittle', type = 'button', light = false}) {
    return (<button className="" type={type}>{title}</button>)
}

export default Button;