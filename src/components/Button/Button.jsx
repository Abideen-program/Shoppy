import classes from './Button.module.css'
const Button = (props) => {
    const {children} = props
    return (
        <button className={classes.button}>
            {children}
        </button>
    )
}

export default Button