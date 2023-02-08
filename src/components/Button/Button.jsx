import classes from './Button.module.css'

const BUTTON_STYLES_CLASSES = {
    normal: "button",
    inverted: "inverted",
  };
  

const Button = (props) => {
    const {children, buttonType, ...otherProps} = props
    return (
        <button className={classes[`${BUTTON_STYLES_CLASSES[buttonType]}`]} {...otherProps}>
            {children}
        </button>
    )
}

export default Button