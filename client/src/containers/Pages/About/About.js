import React from 'react';
import Layout from '../../Layout/Layout';
//import Header from '../../Layout/Header/Header';
import myClasses from './About.module.scss';
//import background2 from '../../../assets/images/background2.jpg'
import user from '../../../assets/images/me.jpg'
const about = () => {

    let column = <div className={myClasses.column}>
        <div >
            <div>
                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Speeds up development</h5>

                <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
        </div>

        <div className="col s12 m4">
            <div>
                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                <h5 className="center">User Experience Focused</h5>

                <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
            </div>
        </div>

        <div className="col s12 m4">
            <div>
                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                <h5 className="center">Easy to work with</h5>

                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
            </div>
        </div>

    </div>
    return(
    <Layout grid="one">
        <div className={myClasses.About}>
            <figure className={myClasses.figure}>
                <img src={user} alt='user image' />
            </figure>
            <br />
            <h1>Hello World, I'm Uriel.</h1><br />
            <div className={myClasses.bio}>
                <p>
                    I am a full stack web developer looking for an entry level position. 
                    I began developing full stack web applications in May 2019. My experience comes from
                    working on websites and blog passion projects. The first website I worked on was a prebuilt forum used by an 
                    online group of friends. This sparked my interest in building my own website. 
                </p>
                <br />
                <p>    
                    I began learning to write code
                    by reading a book called "Learn Python the Hard way" by Zed A. Shaw. I then built my first website using php by following
                    online tutorials. It was in July of 2018 when I decided to build web applications 
                    for a living and began to learn by immersion and practicing daily. 
                </p>
                <br />
                <p>    
                    I refreshed my frontend skills by completing the Responsive Web Design  
                    certificate from FreeCodeCamp in March 2019. I moved on to complete the Full Stack Web Developer Nanodegree at Udacity in September 
                    2019. This certificate focused on building web applications using an Ubuntu server and Flask frontend.
                </p>
                <br />
                <p>
                    I felt something was missing, my website ran too slow, so I began searching for something better. I decided to complete 
                    React-The Complete Guide (Incl Hooks, React Router, Redux) at Udemy in April 2020. And now I am developing web applications 
                    by reading documentations and research. 
                    </p>
                    <br />    
                <p>
                    I hope you found this information useful; I would love the opportunity to work on a team and push my limits further.

                </p>
            </div>
            
            <br />
            <br />
            <br />

            
                        {/*  Icon Section   */}
                     
                   
        </div>

    </Layout>
    )
}
export default about;