import React from 'react';
// import classes from '../../../containers/Pages/Pages.module.scss'
import myClasses from './Navbar.module.scss'
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle';
import { NavLink } from 'react-router-dom';

const navbar = (props) => (
    <div className={[myClasses.Navbar, 'scroll-down-nav'].join(' ')}>
        <SidebarToggle clicked={props.sidebarToggleClicked}/>
        <div className={[myClasses.MobileLinks, myClasses.Mobile].join(' ')}>
        <div className={[myClasses.Logo, myClasses.Mobile].join(' ')}>
            <NavLink  to="/home">
                    <Logo />   
            </NavLink>
        </div>
        </div>
        <div className={myClasses.DesktopOnly}>
            <NavItems isLoggedIn={props.isLogged}/>
        </div>
    </div>
);

export default navbar;