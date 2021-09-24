import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavItem.module.scss';

const navItem = (props) => (
    <li className={classes.NavItem}>
        <NavLink 
            to={props.link} 
            exact={props.exact}
            activeClassName={classes.active}>{props.children} 
        </NavLink>
    </li>    
)



export default navItem;