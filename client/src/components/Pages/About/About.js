import React from 'react';
import classes from './About.module.scss';
import user from '../../../assets/images/me.jpg';
const About = () => {

    let column = <div className={classes.column}>
        <div >
            <div>
                <h2 className="text-center"><i className="material-icons">flash_on</i></h2>
                <h5 className="text-center">Speeds up development</h5>

                <p className="light">With React, we can use reusable components to eliminate code that bloats up projects.</p>
            </div>
        </div>

        <div >
            <div>
                <h2 className="text-center brown-text"><i className="material-icons">group</i></h2>
                <h5 className="text-center">User Experience Focused</h5>

                <p className="light">With React we can enhance user experience by increasing speeds and localizing rendering to single components. Yielding a more responsive user experience.</p>
            </div>
        </div>

        <div>
            <div>
                <h2 className="text-center brown-text"><i className="material-icons">settings</i></h2>
                <h5 className="text-center">Easy to work with</h5>

                <p className="light">Code is much easier to read when components are split into smaller components. </p>
            </div>
        </div>

    </div>;
    return(
        <div className={['page-wrapper', classes.AboutLayout].join(' ')}>
            <div className={classes.About}>
                <figure className={classes.figure}>
                    <img src={user} alt='user' />
                </figure>
                <h1>Hello World, I&apos;m Uriel Zacarias.</h1>
                <div className={classes.bio}>
                    <p>
                        I am a full stack web developer looking for an opportunity to grow.   
                        I got my first certificate, &quot;Responsive Web Design&quot;, from FreeCodeCamp in March 2019. 
                        I then completed the &quot;Full Stack Web Developer&quot; Nanodegree at Udacity in September 2019. 
                        This certificate focused on building web applications using a Linux server (Ubuntu) and a Flask (Python) framework.
                    </p>
                    
                    <p>
                        Iv&apos;e since then focused my research on Javascript frameworks. 
                        I completed &quot;React-The Complete Guide (Incl Hooks, React Router, Redux)&quot; certificate at Udemy, in April 2020. 
                        I preffer building web applications using Express.js and React.js, although I am open to learning new technologies.
                    </p>
                </div>
                {/*  Icon Section   */}
                {column}

                
                
                
            </div>
        </div>
    );
};

export default About;