import { useState, useEffect } from "react";
import FeatureItems from "./FeatureItems";
import classes from './Features.module.css'

const Features = () => {
  const [features, setFeatures] = useState([]);
  const fetchFeatures = async () => {
    //to get the features image from the backend api
    const response = await fetch(
      "https://shoppy-baa30-default-rtdb.firebaseio.com/features.json"
    );
    const data = await response.json();

    //provide an array with feature items data
    const loadedFeatures = [];

    for (const key in data) {
      loadedFeatures.push({
        id: key,
        imageUrl: data[key].imageUrl,
        label: data[key].label,
        style: data[key].class
      });
    }
    
    setFeatures(loadedFeatures);
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <div className={classes.features}>
      {features.map((feature) => {
        return <FeatureItems feature={feature} key={feature.id} />;
      })}
    </div>
  );
};

export default Features;
