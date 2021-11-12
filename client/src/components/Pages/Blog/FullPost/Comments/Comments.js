import Comment from "./Comment/Comment"
import classes from './Comments.module.scss'
const Comments = (props) => {
    let commentCounter
    let count = props.comments.length
    console.log('props.comments', count )

    if (count > 1){ commentCounter = <p className={classes.Counter}>({count}) Comments:</p>
    } else if (count === 1){commentCounter = <p className={classes.Counter}>(1) Comment:</p>
    } else {commentCounter = <p className={classes.Counter}>No Comments</p>}

    let comments = null
    if (props.comments) {
        comments = props.comments.map( comment => {
            const d = new Date(comment.date);
            const months = [ "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December" ];
            const month = (d.getMonth()+1);
            const selectedMonth = months[month]
            const days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]
            const day = d.getDay()
            const selectedDay = days[day]
            const date = selectedDay + ', ' + selectedMonth  + " " + (d.getDate()) + ", " + d.getFullYear();
            const time = d.toLocaleTimeString('en-US')

            let edit = false

            if (props.user){
                console.log('comment user ', comment.author)
                console.log('user ', props.user)
                if  (comment.author === props.user._id) {edit = true}
            } else {
                   if (comment.author === "Anonymous") {edit = true}
            }
          
         


            return <Comment 
                delete  = {props.delete}
                replyTo = {comment.replyTo}
                id      = {comment._id}
                author  = {comment.author}
                date    = {date}
                time    = {time}
                content = {comment.content}
                edit    = {edit}
            />
        })
    }

    return <div className={classes.CommentsWrapper}>
        {commentCounter}
        <div className={classes.Comments}>
            {comments}
        </div>
    </div>
}

export default Comments