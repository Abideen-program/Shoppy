import { useCallback, useEffect, useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import classes from "./BlogItems.module.css";

const BlogItems = () => {
    const [blogItems, setBlogItems] = useState([])
  const fetchBlogItems = useCallback(async () => {
    const response = await fetch(
      "https://shoppy-baa30-default-rtdb.firebaseio.com/blog.json"
    );
    const data = await response.json();

    const loadedData = [];

    for (const key in data) {
      loadedData.push({
        id: key,
        imgURL: data[key].imgURL,
        paragraph: data[key].paragraph,
        title: data[key].title,
      });
    }

    setBlogItems(loadedData)
  }, []);

  useEffect(() => {
    fetchBlogItems();
  }, [fetchBlogItems]);

  return (
    <div className={classes.blog}>
      {blogItems.map((item, index, arr) => {
        return <BlogItem item={item} index={index} array={arr}/>;
      })}
    </div>
  );
};

export default BlogItems;
