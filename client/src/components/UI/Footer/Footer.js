import React from 'react';
import classes from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = (props) => {
        return (
            <footer>
                <div className={classes.Footer}>
                    <div className={classes.bio}>
                        <h3>About Me</h3>
                        <p className="grey-text text-lighten-4">Hello! I am a self driven developer with a passion for problem solving
                        and software development. Feel free to contact me regarding any questions you may have about me or any projects I can help out with. 

                        </p>
                    </div>
                    <div className={classes.connect}>
                        <h3 className="white-text">Categories</h3>
                        <ul className={classes.NavLinks}>
                            <NavLink to="/home" className="LogoName" exact>Home</NavLink>
                            <NavLink to="/projects"                exact>Projects</NavLink>
                            <NavLink to="/about"                   exact>About</NavLink>
                            {/* <NavLink to="/blog/posts"                    exact>Blog</NavLink> */}
                            {props.isAuthenticated != null ? <NavLink to="/profile"         >Profile</NavLink> : null}
                            {props.isAuthenticated != null ? <NavLink to="/orders"          >Orders</NavLink> : null}

                            {props.isLogged        != null ? <NavLink to="/profile"         >Profile</NavLink> : null}
                            {!props.isLogged 
                                ? <NavLink to="/authentication">Sign in / Sign up</NavLink>
                                : <div className={classes.NavLink}><a  href="/api/logout">Logout</a></div>}
                        </ul>
                        {/*<ul>
                            <li className={classes.OrderbarItem} id="#all"      onClick={()=> props.getItems()}                ><NavLink to='/shop'         exact>All Items </NavLink></li>
                            <li className={classes.OrderbarItem} id="#hat"      onClick={()=> props.getItemByType('hat')}      ><NavLink to='/shop#hat'     exact>Hats      </NavLink></li>
                            <li className={classes.OrderbarItem} id="#shirt"    onClick={()=> props.getItemByType('shirt')}    ><NavLink to='/shop#shirt'   exact>Shirts    </NavLink></li>
                            <li className={classes.OrderbarItem} id="#hoodie"   onClick={()=> props.getItemByType('hoodie')}   ><NavLink to='/shop#hoodie'  exact>Hoodies   </NavLink></li>
                            <li className={classes.OrderbarItem} id="#stickers" onClick={()=> props.getItemByType('stickers')} ><NavLink to='/shop#stickers'exact>Stickers  </NavLink></li>
                            <li className={classes.OrderbarItem} id="#mug"      onClick={()=> props.getItemByType('mug')}      ><NavLink to='/shop#mug'     exact>Mugs      </NavLink></li>
                        </ul>*/}
                    </div>
                    <div className={classes.projects}>
                        <h3 className="white-text">Contact</h3>
                        <ul className={classes.Contact}>
                            <li><span className='fa fa-map-pin'  /> Address: San Diego, California, United States of America.</li>
                            <li><span className='fa fa-phone'    /> Phone: +1 (619) 621-7311</li>
                            <li><span className='fa fa-envelope' /> Email: urielzacarias@gmail.com</li>
                        </ul>
                        <div className={classes.Social} >
                            <ul>
                                <li><a className="white-text" href="https://github.com/avensky"><span className='fa fa-github' /></a></li>
                                <li><a className="white-text" href="https://www.linkedin.com/in/urielzacarias/"><span className='fa fa-linkedin' /></a></li>
                                <li><a className="white-text" href="https://avenskypro.blogspot.com/"><span className='fab fa-blogger-b' /></a></li>
                                <li><a className="white-text" href="https://www.youtube.com/channel/UCyyo9pq7jcUaXzF7FngMqkg"><span className='fa fa-youtube' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.Copyright}>
                    <p>© 2021 UrielZacarias.com All Rights Reserved - <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
                </div>
            </footer>
        );
    
};

Footer.propTypes = {
    isAuthenticated: PropTypes.bool,
    isLogged: PropTypes.bool
};
export default Footer;