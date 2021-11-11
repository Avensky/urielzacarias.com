import React from 'react';
import classes from './Navbar.module.scss';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
//import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle';
import { NavLink } from 'react-router-dom';

const navbar = ( props ) => {
    return (
        <div className={classes.Navbar}>
            {/* <SidebarToggle clicked={props.sidebarToggleClicked} />   */}
            <i className={['fa fa-bars', classes.SidebarToggle,classes.MobileLinks, classes.Mobile].join(' ')} onClick={props.sidebarToggleClicked} />

            <div className={[classes.LogoWrapper, classes.Mobile].join(' ')}>
                    <NavLink  to="/">
                        <div className={classes.Logo}>
                            <Logo />
                            <div className={classes.LogoName}>Uriel Zacarias</div>
                        </div>  
                    </NavLink >
            </div>

            <div className={[classes.MobileLinks, classes.Mobile].join(' ')}>
                <h2 className="line">
                    {/*props.isLogged !== null
                        ? <div className={classes.NavItem}><a  href="/api/logout">Logout </a></div>
                    : null*/}          
                    {props.isLogged !== null
                        ? <NavLink to="/profile"   ><h3><span className={["fa fa-user", classes.user].join(' ')} /></h3></NavLink>
                        :<NavLink to="/authentication"   ><h2 className={classes.NavItemLogo}><span className="fa fa-sign-in" /></h2></NavLink>
                    }                                  
                </h2>
            </div>
            <div className={classes.DesktopOnly}>
                <NavItems isLogged={props.isLogged} totalItems={props.totalItems}/>
            </div>
        </div>
    )
}


export default navbar;