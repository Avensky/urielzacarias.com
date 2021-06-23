import React, {Component}from 'react';
import './Home.module.scss';
import Layout from '../../Layout/Layout';
import classes from './Home.module.scss';
import author from '../../../assets/images/author2.png';
import github from '../../../assets/images/github.png';
import linkedin from '../../../assets/images/linkedin.png';
import veganDining from '../../../assets/images/veganDining.png';
import background1 from '../../../assets/images/background1.jpg';
import background2 from '../../../assets/images/background2.jpg';
import background3 from '../../../assets/images/background3.jpg';
import Auxiliary from '../../../hoc/Auxiliary';
//import { NavLink } from 'react-router-dom';
//import Header from '../../Layout/Header/Header';
import Project from './Project/Project';


// import $ from 'jquery'
class Home extends Component {
    
    componentDidMount(){
        
        const chartWrapper = document.querySelector(".chart-wrapper");
        const scrollDown = document.querySelector(".scroll-down");
        
        function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                        (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        }
        
        window.addEventListener("scroll", scrollHandler);
        
        function scrollHandler() {
        window.pageYOffset > 0
            ? scrollDown.classList.add("is-hidden")
            : scrollDown.classList.remove("is-hidden");
        if (isElementInViewport(chartWrapper)) chartWrapper.classList.add("in-view");
        }

    }
    
    render() {
        let section1 = (
            <div className={["container", classes.Home].join(' ')}>
               
                <h1>Hello, I'm <span className={classes.highlight}>Uriel Zacarias</span></h1>
                <h4>Full Stack Web Developer</h4>
                <div className={classes.Skip}>
                    <a href="#skills">Skip to Skills Section</a>
                </div>
                
                <div className="position-absolute scroll-down">Scroll Down</div>
            </div>
            )

        let section2 = (
            <div className={classes.vh}>
                <div className="section">
                    <div className='container'>
                        <div className={['text-center', classes.header].join(' ')}>
                            <h1><a href="#skills">Skills</a> <a href="#home"><span className="fa fa-angle-up"></span></a>
                            <a href="#projects"><span className="fa fa-angle-down"></span></a></h1>
                        </div>
                    </div>
                    <a href='#projects' >
                    <div className={["d-flex", "section", classes.ParallaxHalf].join(' ')} >            
                        {/* <div className="position-relative flex-grow-1 bg-img"></div> */}
                        <div className={[classes.Skills, "d-flex justify-content-center align-items-center flex-grow-1"].join(' ')}>
                            <div className={[classes.Skills,"position-relative chart-wrapper"].join(' ')}>
                                <ul className={[classes.SkillChart, "chart-skills"].join(' ')}>
                                    <li className="position-relative">
                                        <span>CSS</span>
                                    </li>
                                    <li className="position-relative">
                                        <span>HTML</span>
                                    </li>
                                    <li className="position-relative">
                                        <span>JavaScript</span>
                                    </li>
                                    <li className="position-relative">
                                        <span>Python</span>
                                    </li>
                                    <li className="position-relative">
                                        <span>Node</span>
                                    </li>
                                </ul>
                                <ul className="d-flex position-absolute chart-levels">
                                    <li className="flex-grow-1 position-relative">
                                        <span className="position-absolute">Novice</span>
                                    </li>
                                    <li className="flex-grow-1 position-relative">
                                        <span className="position-absolute">Beginner</span>
                                    </li>
                                    <li className="flex-grow-1 position-relative">
                                        <span className="position-absolute">Intermediate</span>
                                    </li>
                                    <li className="flex-grow-1 position-relative">
                                        <span className="position-absolute">Advanced</span>
                                    </li>
                                    <li className="flex-grow-1 position-relative">
                                        <span className="position-absolute">Expert</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        )
        
        let section3 = (
            <div className={classes.vh}>
                <div className="section">
                    <div className='container'>
                        <div className={['text-center', classes.header].join(' ')}>
                            <h1 className="text-center"><a href="#projects">Recent Projects</a> <a href="#skills"> <span className="fa fa-angle-up"></span></a> <a href="#footer"><span className="fa fa-angle-down"></span></a></h1>
                        </div>
                    </div>     
                    <div className={classes.Projects}>
                        <Project 
                            btn="Book and Author's Website"
                            pic={author}
                            link={'https://authorapp.herokuapp.com/'}
                            description="This website shows information abt the book, 
                            author's, character's, and store."
                            item1='ReactJs'
                            item2='ExpressJs'
                            item3='MongoDb'
                            item4='Stripe'
                            item5='Redux'
                            item6='CSS'
                            item7='HTML'
                        />
                        <Project 
                            btn='Vegan Restaurants Reviews by Cities in CA'
                            pic={veganDining}
                            link={'https://www.avensky.com/'}
                            description="The purpose of this web app is to allow users to post 
                            reviews on vegan restaurants located in California."
                            item1='Ubuntu18'
                            item2='Python3'
                            item3='PostgreSQL'
                            item4='Apache2'
                            item5='Flask'
                            item6='CSS'
                            item7='HTML'
                        />
                    </div>
                </div>
            </div>
        )
        
        let section4 = (
            <div className={classes.vh}>
                <div className="section">
                    <div className='container'>
                        <div className={['text-center', classes.header].join(' ')}>
                            <h1 className="text-center">About Me <a href="#projects"><span className="fa fa-angle-up"></span></a> <a href="#footer"><span className="fa fa-angle-down"></span></a>
                            </h1>
                        </div>
                    </div>
            
                    <div className={classes.Projects}>                        
                            <Project 
                                description="Github"
                                pic={github}
                                link={'https://github.com/Avensky'}
                                btn='GitHub'
                            />
                            <Project 
                                description="LinkedIn"
                                pic={linkedin}
                                link={'https://linkedin.com/in/urielzacarias'}
                                btn='LinkedIn'
                            />
                            <Project 
                                description="YouTube Videos"
                                vid={'https://www.youtube.com/embed/U9Us6g84wP0'}
                            />
                            <Project 
                                description="TikTok"
                                tik={true}
                            />     
                    </div>
                </div>
            </div>
        )
        // let section25 = (
        //     <div className="container">
        //         <div className="section">
        //             <div className="row">
        //                 <div className="col s12 center">
        //                     <h3><i className="mdi-content-send brown-text"></i></h3>
        //                     <h4>Contact Us</h4>
        //                     <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        //                 </div>
        //             </div>
        //         </div>
        //   </div>
        // )
// 
        // let section27 = (
        //     <div className="parallax-container valign-wrapper">
        //         <div className="section no-pad-bot">
        //             <div className="container">
        //                 <div className="row center">
        //                     <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="parallax">
        //             <img src={background2} alt="Unsplashed background img 3" />
        //         </div>
        //     </div>
        // )
// 


        // let section3 = (         
        //     <a href='#about'>
        //         <div id="index-banner" className={["parallax-container", classes.ParallaxContainer].join(' ')}>
        //             <div className={["section no-pad-bot", classes.AboutSection].join(' ')}>
        //                 <div className="container">
        //                     <br /><br />
        //                     <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
        //                     <div className="row center">
        //                         <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        //                     </div>
        //                     <br /><br />
        //                 </div>
        //             </div>
        //             <div className="parallax">
        //                 <img src={background1} alt="Unsplashed background img 1" />
        //             </div>
        //         </div>
        //     </a>
        // )
// 
        // let section4 = (
        //     <a href='#end' >
        //         <div className="container">
        //             <div className="section">
        //                 {/*  Icon Section   */} 
        //                 <div className={["row", classes.About].join(' ')}>
        //                     <div className="col s12 m4">
        //                         <div className="icon-block">
        //                             <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
        //                             <h5 className="center">Speeds up development</h5>
// 
        //                             <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
        //                         </div>
        //                     </div>
        //                     <div className="col s12 m4">
        //                         <div className="icon-block">
        //                             <h2 className="center brown-text"><i className="material-icons">group</i></h2>
        //                             <h5 className="center">User Experience Focused</h5>
// 
        //                             <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
        //                         </div>
        //                     </div>
        //                     <div className="col s12 m4">
        //                         <div className="icon-block">
        //                             <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
        //                             <h5 className="center">Easy to work with</h5>
        //                             <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </a>
        // )
// 
        // let section5 = (
        //     <a href="#footer">
        //         <div  className={["parallax-container valign-wrapper", classes.ParallaxContainer].join(' ')}>
        //             <div className="section no-pad-bot">
        //                 <div className="container">
        //                     <div className="row center">
        //                         <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="parallax"><img src={background3} alt="Unsplashed background img 3" /></div>
        //         </div>
        //     </a>
        // )
        
        return (
            <Auxiliary>
                <Layout>
                    <div id="home" className={classes.Next}></div>
                    {section1}
                    <div id="skills" className={classes.Next}></div>
                    {section2}
                    <div id="projects" className={classes.Next}></div>
                    {section3}

                </Layout>
            </Auxiliary>
        ) 
    }
}
export default Home;