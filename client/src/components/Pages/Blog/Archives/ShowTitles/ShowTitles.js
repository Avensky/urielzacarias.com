import React, { useState } from "react"
import classes  from './ShowTitles.module.scss'

const ShowTitles = (props)=>{
    // Trigger rerender using state 
    const [show, setShow] = useState(props.show)

    // Toggle true or false
    const showToggleHandler = () => {setShow(!show)}
    
    // Show or hide posts in a month
    let showTitles
    show
        ? showTitles = props.posts.map( post => {
            return  <div onClick={()=>props.loadData(post._id)} className={classes.Titles} key={post._id}>
                        <li>{post.title}</li>
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