import { Link } from "react-router-dom";
import blogImage from "../../../../assets/images/blog/b1.jpg";
import classes from "./BlogItem.module.css";

const BlogItem = () => {
  return (
    <div className={classes.blogBox}>
      <div className={classes.blogImage}>
        <img src={blogImage} alt="blog" />
      </div>

      <div className={classes.blogDetails}>
        <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magnam
          fugit! Inventore, debitis cumque aut sunt, sed...
        </p>
        <Link to='/blog'>Continue reading</Link>
      </div>
      <h1>01/01</h1>
    </div>
  );
};

export default BlogItem;
