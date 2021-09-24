import React from 'react';
import classes from './SidebarToggle.module.scss'

const sidebarToggle = (props) => (
    <div 
        className={[classes.SidebarToggle].join(' ')} 
        onClick={props.clicked}
        data-target="nav-mobile"
    >
        <i className={["material-icons", classes.materialIcons].join(' ')}>menu</i>
    </div>
);

export default sidebarToggle;