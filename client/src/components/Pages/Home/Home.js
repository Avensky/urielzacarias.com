import React from 'react';
import './Home.module.scss';
import classes from './Home.module.scss';
import {Link} from 'react-router-dom';

const Home = () => {
        return (
            <div className={['page-wrapper', classes.HomeLayout].join(' ')}>
                <div className={classes.Home}>
                    <div className={classes.Section1}>
                        <h1>Hello World, I&apos;m <span className={classes.highlight}>Uriel Zacarias</span></h1>
                        <h4>A Software Developer</h4>
                        <div className={classes.Skip}>
                            <Link to="/projects"><b>Checkout my Projects</b></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
};
export default Home;