import React from 'react';
import classes from './Logo.module.scss';
import myLogo from '../../assets/images/logo.png';

const logo = (props) => (
<div className={classes.Logo} style={{height: props.height}}>
    <img src={myLogo}  alt="Logo" />
</div>
)

export default logo;