import React, { useState } from "react"
import classes  from './ShowTitles.module.scss'
import {Link}   from 'react-router-dom'

const ShowTitles = (props)=>{
    // Trigger rerender using state 
    const [show, setShow] = useState(true)

    // Toggle true or false
    const showToggleHandler = () => {setShow(!show)}
    
    // Go to post
    

    // Show or hide posts in a month
    let showTitles
    show
        ? showTitles = props.posts.map( post => {
            return  <div onClick={()=>props.clicked(post._id)} className={classes.Titles}>
                        {post.title}
                    </div>
        })
        : showTitles = null
    
    // chage icon 
    let style
    show ? style = "fa fa-caret-down" : style = "fa fa-caret-right"
    return  <div className={classes.showTitles}>
                <div onClick={showToggleHandler} className={classes.Month}>
                    <i className={[style, classes.Icon].join(' ')}/> 
                    <div className={classes.MonthName}>{props.monthName}</div>
                </div>
                {showTitles}
            </div>
}

export default ShowTitles