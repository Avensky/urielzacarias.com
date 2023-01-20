import React        from 'react';
import caringvegan  from '../../../assets/images/caringvegan2.png';
import author       from '../../../assets/images/author2.png';
import avensky      from '../../../assets/images/avensky.png';
import classes      from './Projects.module.scss';
import Project      from './Project/Project';

const Projects = props => (
    <div className={['page-wrapper', classes.ProjectsLayout].join(' ')}>
        <div className={classes.Projects}>
        <Project 
                ThumbnailTitle='Avensky'
                pic={avensky}
                link={'https://www.avensky.com/'}
                description="Modern E-commerce Web App"
                item1='MongoDB'
                item2='Express'
                item3='React'
                item4='Node'
                item5='TypeScript'
                item6='HTML'
                item7='Css'
                item8='Automatic Deployment'
                item9='Automatic Testing'
                item10='Automatic Emails'
            />

            <Project 
                ThumbnailTitle="CaringVegan"
                pic={caringvegan}
                link={'https://caringvegan.com/'}
                description="Mobile first approach to online shopping"
                item1='MongoDB'
                item2='Express'
                item3='React'
                item4='Node'
                item5='Ubuntu'
                item6='HTML'
                item7='Css'
                item8='Stripe payments'
            />
            <Project 
                ThumbnailTitle="Overthrone"
                pic={author}
                link={'https://avenskydev.com'}
                description="Book website with info on the authors, the characters, and store."
                item1='MongoDB'
                item2='Express'
                item3='React'
                item4='Node'
                item6='HTML'
                item7='Css'
                item8='Stripe payments'
            />
        </div>
    </div>
);

export default Projects;