import React from 'react';
import user from '../../../../../assets/images/user.jpg'
import classes from './Post.module.scss';
//import TextTruncate from 'react-text-truncate'; // recommend
//import { NavLink } from 'react-router-dom'



const post = (props) => (

    <article className={[classes.Post,classes.Card,props.clName].join(' ')} 
        onClick={props.clicked}>
        <div className={classes.CardTitle}><h1>{props.title}</h1></div>
        <div className={classes.CardDetails}>
            {props.author
                ? <h2>{props.author}</h2>
                : null}
            <p>{props.date}</p>
        </div> 
        <div className={classes.CardDescription}>{props.content}</div>
        <figure className={classes.CardThumbnail}>
        {props.pic 
            ? <img src={user} alt="user"/>
            : null}
        </figure>
        <div className={[
            classes.Edit,
            props.klName].join(' ')}>
            <button>Edit</button>
            <button 
                className={classes.Delete}
                onClick={props.click}
            >Delete</button>
        </div>
    </article>
    )


export default post;