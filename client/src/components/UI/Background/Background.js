import React from 'react';
import classes from './Background.module.scss';
import myVid from '../../../assets/videos/myVid.mp4';

const background = () => {
    return (
    <div className={classes.videoWrapper}>
        <video src={myVid} autoPlay={true} muted loop={true} playsinline></video>
    </div>)
}

export default background;