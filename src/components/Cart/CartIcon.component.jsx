import { useContext } from 'react'
import { CartContext } from './CartContext'
import {ReactComponent as Cart} from '../../assets/cart.svg'
import classes from './CartIcon.module.css'

const CartIcon = () => {
    const {setCartShown} = useContext(CartContext)

    const showCartHandler = () => {
        setCartShown(true)
    }
    return (
        <div className={classes.cartIconContainer} onClick={showCartHandler}>
            <Cart className={classes.cartIcon}/>
            <span className={classes.itemCount}>0</span>
        </div>
    )
}

export default CartIcon