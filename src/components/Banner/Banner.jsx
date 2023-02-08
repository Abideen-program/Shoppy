import Button from '../Button/Button'
import classes from './Banner.module.css'
const Banner = () => {
    return(
        <div className={classes.banner}>
            <h4>Repair Services</h4>
            <h2>Up to <span>70% off</span> - All T-shirt & Accessories</h2>
            <Button buttonType='normal'>Explore More</Button>
        </div>
    )
}

export default Banner