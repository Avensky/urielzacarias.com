import React from 'react'
import classes from './Footer.module.scss'
//import { NavLink } from 'react-router-dom';

const Footer = (props) => {
        return (
            <footer>
                <div className={classes.Footer}>
                    <div className={classes.bio}>
                        <h3>About</h3>
                        <p className="grey-text text-lighten-4">I am a self motivated Full Stack Web Developer looking for work. 
                        My strengths are in using React.js for frontend and Node.js for backend. I host my websites using Ubuntu servers on AWS lightsail.</p>
                    </div>
                    <div className={classes.connect}>
                        <h3 className="white-text">Categories</h3>
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
                            <li><span className='fa fa-map-pin'  /> Address: 1674 Palm Ave #12 San Diego, CA 92154</li>
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
                    <p>© 2021 UrielZacarias.com All Rights Reserved - <a href="https://urielzacarias.com">Privacy Policy</a></p>
                </div>
            </footer>
        )
    
}

export default Footer;