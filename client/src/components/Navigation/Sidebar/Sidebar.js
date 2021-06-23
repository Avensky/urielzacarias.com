import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './Sidebar.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';
import { NavLink } from 'react-router-dom';

const sidebar = (props) => {
    let attachedClasses = [classes.Sidebar, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidebar, classes.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <nav 
                role="navigation" 
                className={attachedClasses.join(' ')} 
                onClick={props.closed}
            >
                <div className={[classes.Logo, classes.Mobile].join(' ')}>
                <NavLink  to="/">
                    <Logo />
                </NavLink>
                </div>
                <div className={[classes.Navbar, classes.DesktopOnly].join(' ')}>
                    <NavItems isLoggedIn={props.isLogged} logout={props.logout}/>
                </div>
            </nav>
        </Auxiliary>
    );
}

export default sidebar;