import classes from './Background.module.scss';
import myVid from '../../../assets/videos/myVid.mp4';
import myImg from '../../../assets/images/myImg.jpg';

const background = () => {

    return (
    <div className={classes.BackgroundWrapper}>
        <video className={classes.Background} src={myVid} autoPlay={true} muted loop={true} playsInline></video>
        <img className={classes.Background} src={myImg} alt='background'/>
    </div>)
}

export default background;
