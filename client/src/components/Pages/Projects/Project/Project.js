import React from 'react';
//import user from '../../../../../assets/images/user.jpg'
//import user from '../../../../assets/images/author2.png'
import classes from './Project.module.scss';
//import TextTruncate from 'react-text-truncate'; // recommend
//import { NavLink } from 'react-router-dom'



const project = (props) => (
        <div className={[classes.Project].join(' ')}  onClick={props.clicked}>
            <div className={classes.CardThumbnail}>
                <a href={props.link}>
                {props.ThumbnailTitle      
                    ? <div className={classes.ThumbnailTitle}>{props.ThumbnailTitle}</div>
                    : null}
                {props.pic      
                    ? <div className={classes.picWrapper}><img src={props.pic} alt="user"/></div>
                    : null}

                {props.vid      ? <div className={classes.iframeContainer}><iframe 
                    src={props.vid}
                    style={{height: '360px', maxHeight: '100%', width: '100%'}} 
                    frameBorder='0'
                    //allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='YouTube video player'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    /></div>
                : null}
                </a>  
            </div>

        {props.description
            ?   <div className={classes.description} >
                    <div className={classes.descriptionTitle}>{props.description}</div>
                    <ul>
                        {props.item1 ? <li>{props.item1 }</li>: null}
                        {props.item2 ? <li>{props.item2 }</li>: null}
                        {props.item3 ? <li>{props.item3 }</li>: null}
                        {props.item4 ? <li>{props.item4 }</li>: null}
                        {props.item5 ? <li>{props.item5 }</li>: null}
                        {props.item6 ? <li>{props.item6 }</li>: null}
                        {props.item7 ? <li>{props.item7 }</li>: null}
                        {props.item8 ? <li>{props.item8 }</li>: null}
                        {props.item9 ? <li>{props.item9 }</li>: null}
                        {props.item10? <li>{props.item10}</li>: null}
                    </ul>
                </div>
            : null }
        </div> 
    );

export default project;