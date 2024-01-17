import React        from 'react';
import classes      from './Projects.module.scss';
import Project      from './Project/Project';

const Projects = props => {
    let caringvegan = 'https://caring-vegan.s3.us-west-2.amazonaws.com/assets/caringVegan.png';
    let BetterDates = 'https://caring-vegan.s3.us-west-2.amazonaws.com/assets/betterDates.png';
    
    return <div className={['page-wrapper', classes.ProjectsLayout].join(' ')}>
        <div className={classes.Projects}>
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
                ThumbnailTitle="BetterDates"
                pic={BetterDates}
                // link={'https://avenskydev.com'}
                description="Mobile app for ios and android. It helps users plan their next date"
                item1='MongoDB'
                item2='Express'
                item3='React-Native'
                item4='Node'
                item6='HTML'
                item7='Css'
                // item8='Stripe payments'
            />
        </div>
    </div>;
};

export default Projects;