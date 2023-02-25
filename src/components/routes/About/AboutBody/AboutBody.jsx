import aboutImage from "../../../../assets/images/about/a6.jpg";
import classes from "./AboutBody.module.css";

const AboutBody = () => {
  return (
    <div className={classes.body}>
      <div className={classes.about}>
        <div className={classes["about-image"]}>
          <img src={aboutImage} alt="about" />
        </div>

        <div className={classes.description}>
          <h2>Who are we</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo,
            neque in ratione quisquam quia vero nulla assumenda commodi sed
            expedita quibusdam, harum hic. A quo pariatur libero veniam eum unde
            amet nesciunt architecto aperiam distinctio illo aut autem ut esse
            expedita dolorum soluta, ea, illum officiis. Animi, accusamus
            distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
