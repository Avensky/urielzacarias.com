import React from 'react';
import classes from './NavItems.module.scss';
import NavItem from './NavItem/NavItem';
import { NavLink } from 'react-router-dom';
import Logo from '../../UI/Logo/Logo';

const navItems = ( props ) => (
    <div className={classes.Desktop}>
            <NavLink  to="/home"className={classes.LogoWrapper}>
                <div className={classes.Logo}>
                    <Logo />
                </div>  
            </NavLink >
        <ul className={classes.NavItems}>
            <NavItem link="/home" myClass="LogoName" exact>Uriel Zacarias</NavItem>
            <NavItem link="/projects"                exact>Projects</NavItem>
            <NavItem link="/about"                   exact>About</NavItem>
            <NavItem link="/blog/posts"              exact>Blog</NavItem>
            {props.isAuthenticated != null ? <NavItem link="/profile"          >Profile</NavItem> : null}
            {props.isAuthenticated != null ? <NavItem link="/orders"          >Orders</NavItem> : null}

            {props.isLogged != null ? <NavItem link="/profile"          >Profile</NavItem> : null}
            {!props.isLogged
                ? <NavItem link="/authentication"   >Sign in / Sign up</NavItem>
                : <div className={classes.NavItem}><a  href="/api/logout">Logout</a></div>}

        </ul>
    </div>

);

export default navItems;
