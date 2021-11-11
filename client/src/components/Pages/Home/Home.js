import React from 'react';
import './Home.module.scss';
import classes from './Home.module.scss';
import {Link} from 'react-router-dom';

const Home = () => {
        return (
            <div className={['page-wrapper', classes.HomeLayout].join(' ')}>
                <div className={classes.Home}>
                    <div className={classes.Section1}>
                        <h1>Hello, I'm <span className={classes.highlight}>Uriel Zacarias</span></h1>
                        <h4>Full Stack Web Developer</h4>
                        <div className={classes.Skip}>
                            <Link to="/projects"><b>Checkout Projects</b></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        ) 
}
export default Home;