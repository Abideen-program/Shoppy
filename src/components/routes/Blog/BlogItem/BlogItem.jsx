import { Link } from "react-router-dom";
import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
  const {item, index, array} = props
  const {imgURL, title, paragraph, id} = item
  console.log(index)
  return (
    <div className={classes.blogBox} key={id}>
      <div className={classes.blogImage}>
        <img src={imgURL} alt="blog" />
      </div>

      <div className={classes.blogDetails}>
        <h4>{title}</h4>
        <p>
          {paragraph}
        </p>
        <Link to='/blog'>Continue reading</Link>
      </div>
      <h1>{`0${index + 1}`}/{`0${array.length}`}</h1>
    </div>
  );
};

export default BlogItem;
