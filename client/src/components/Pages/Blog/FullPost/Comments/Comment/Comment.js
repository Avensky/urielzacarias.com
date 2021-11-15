import React, {useState} from 'react';
import classes from './Comment.module.scss'
import Modal from '../../../../../UI/Modal/Modal'

const Comment = (props) => {
    const [modal, setModal] = useState(false)
    const modalHandler = () => { setModal(true) }
    const cancelHandler = () => { setModal(false) }

    const [reply, setReply] = useState(false)
    const replyHandler = () => { setReply(true) }
 //   const cancelreplyHandler = () => { setReply(false) }

    return<div className={classes.Comment}>
        <div className={classes.AuthorWrapper}>
            <span className={classes.Author}>{props.author}</span>
            <span className={classes.Date}> on {props.date} at {props.time}</span>
        </div>
        <p className={classes.Content}>{props.content}</p>
        <Modal show={modal} modalClosed={cancelHandler}>
            <div className={classes.Modal}>
                <h1>Delete Post</h1>
                <p>Are you sure you want to delete this? This action cannot be undone.</p>
                <div className="spread">
                    <button onClick={()=>props.delete(props.replyTo, props.id)} className={["btn btn-delete", classes.Btn].join(' ')}>Delete</button>
                    <button onClick={cancelHandler} className={["btn btn-cancel", classes.Btn].join(' ')}>Cancel</button>
                </div>
            </div>
        </Modal>      
        {props.edit
            ?   <div className={['spread', classes.Edit].join(' ')}>
                    <div className={classes.EditPost}>
                        <button onCLick={replyHandler} className={["btn btn-edit", classes.Btn].join(' ')}>
                            Reply
                        </button>
                    </div>
                    <div className={[classes.EditPost, classes.DeletePost].join(' ')}>
                        <button onClick={modalHandler} className={["btn btn-delete", classes.Btn].join(' ')}>
                            Delete
                        </button>
                    </div>
                </div>
            : null}
    </div>
}

export default Comment