import classes from './FristSmallBanner.module.css'
import UseBanners from './UseBanners'

const FirstSmallBanner = () => {
    const createFirstBanner = () => {
        return (
            ['Crazy Deals', 'buy 1 get 1 free', 'The best dresses are on sale at Shoppy',]
        )
    }
    return (
        <UseBanners onBanner={createFirstBanner} className={classes.banner}/>
    )
}

export default FirstSmallBanner