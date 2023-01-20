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
                <h5 className="text-center">Team`` Player </h5>

                <p className="light">Easy to work with and Enjoy working with others. Willing to listen and take advice. Hope to </p>
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
                <h1>Hello! Nice to meet ya, I&apos;m Uriel.</h1>
                <div className={classes.bio}>
                    <p>
                        I am a software developer from Southern Califoria and I like to develop applications on my free time. 
                        I love learning new technologies and improving my skills. Thanks for checking out my site! You can see more information 
                        about my skills and qualifications on LinkedIn, links are located at the bottom of the page.
                    </p>
                    
                    <p>
                        Some of my hobbies include singing, playing guitar, audio recording, video editing, drawing, and mountain biking. 
                        As for app development, my passion began when I bought a premade website for my guild on 
                        world of warcraft. I was fascinated by the code and it sparked my interest in writing and hosting my own website.
                    </p>
                    <p>
                        I started to write on Blogger and upload videos on YouTube. I had a lot of fun customizing content and it led me to taking online courses on 
                        hmtl, css, react, react native, and full stack web develpment. For some samples of my work, please checkout the projects section or visit my GitHub! 
                        Thank you so much for taking the time to read this and have a nice day!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;