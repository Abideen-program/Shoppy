import { Link } from "react-router-dom";
import video from '../../../../assets/images/about/1.mp4'
import classes from "./AboutVideo.module.css";

const AboutVideo = () => {
  return (
    <div className={classes['about-video']}>
      <h2>Download our <Link to='home'>App</Link></h2>
      <div className={classes.video}>
        <video autoPlay muted controls loop src={video}></video>
      </div>
    </div>
  );
};

export default AboutVideo;
