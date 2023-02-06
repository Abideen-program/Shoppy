import {ReactComponent as Cart} from '../../assets/cart.svg'
import classes from './CartIcon.module.css'

const CartIcon = () => {
    return (
        <div className={classes.cartIconContainer}>
            <Cart className={classes.cartIcon}/>
            <span className={classes.itemCount}>0</span>
        </div>
    )
}

export default CartIcon