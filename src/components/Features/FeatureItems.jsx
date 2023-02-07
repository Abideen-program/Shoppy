import classes from './FeatureItems.module.css'
const FeatureItems = (props) => {
  const { imageUrl, label } = props.feature;
  return (
    <>
      <div className={classes.box}>
        <img src={imageUrl} alt="" />
        <h6>{label}</h6>
      </div>
    </>
  );
};

export default FeatureItems;
