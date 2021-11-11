import React        from 'react'
import caringvegan  from '../../../assets/images/caringvegan2.png';
import author       from '../../../assets/images/author2.png';
import veganDining  from '../../../assets/images/veganDining.png';
import classes      from './Projects.module.scss'
import Project      from './Project/Project';

const Projects = props => (
    <div className={['page-wrapper', classes.ProjectsLayout].join(' ')}>
        <div className={classes.Projects}>
            <Project 
                ThumbnailTitle="CaringVegan Online Store"
                pic={caringvegan}
                link={'https://caringvegan.com/'}
                description="Mobile first approach to online shopping"
                item1='ReactJs'
                item2='ExpressJs'
                item3='MongoDb'
                item4='Stripe'
                item5='Redux'
                item6='CSS'
                item7='HTML'
            />
            <Project 
                ThumbnailTitle="Book and Author's Website"
                pic={author}
                link={'https://authorapp.herokuapp.com/'}
                description="Book, author, character's, and store website."
                item1='ReactJs'
                item2='ExpressJs'
                item3='MongoDb'
                item4='Stripe'
                item5='Redux'
                item6='CSS'
                item7='HTML'
            />
            <Project 
                ThumbnailTitle='Vegan Restaurants Reviews'
                pic={veganDining}
                link={'https://www.avensky.com/'}
                description="Vegan restaurant review app."
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
)

export default Projects