import Button from "../Button/Button";

const UseBanners = (props) => {
  const { className, onBanner } = props;
  const [h4, h2, p, boolean] = onBanner;

  return (
    <div className={className}>
      <h4>{h4}</h4>
      <h2>{h2}</h2>
      <p>{p}</p>
      {!boolean && <Button buttonType="inverted">Learn More</Button>}
      {boolean && <Button buttonType="inverted">Collection</Button>}
    </div>
  );
};

export default UseBanners;
