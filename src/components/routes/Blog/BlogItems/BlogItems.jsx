import BlogItem from '../BlogItem/BlogItem'
import classes from './BlogItems.module.css'

const BlogItems = () => {
    return (
        <div className={classes.blog}>
            <BlogItem />
        </div>
    )
}

export default BlogItems