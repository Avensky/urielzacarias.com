import React, {useState} from 'react';
import user from '../../../../../assets/images/user.jpg'
import classes from './Post.module.scss';
import { Link, NavLink } from 'react-router-dom';
import Modal from '../../../../UI/Modal/Modal';

const Post = (props) => {
    const [modal, setModal] = useState(false)
    const modalHandler = () => { setModal(true) }
    const cancelHandler = () => { setModal(false) }
    return(<article className={[classes.Post,classes.Card,props.clName].join(' ')} >
        {props.date     ? <div className={classes.CardDate}><p>{props.date}</p></div>           : null}
        {props.title    
            ? <div className={classes.Title} onClick={()=>props.loadData(props.id)} >
                <NavLink 
                    to={'/blog/fullpost/' + props.id}
                    className={classes.Title}
                >{props.title}</NavLink>
            </div>         
            : null}
        {props.content  ? <div className={classes.CardDescription}><p>{props.content}</p></div> : null}
        
        
        {props.pic 
            ? <figure className={classes.CardThumbnail}><img src={user} alt="user"/></figure>
            : null}
        <Modal show={modal} modalClosed={cancelHandler}>
            <div className={classes.Modal}>
                <h1>Delete Post</h1>
                <p>Are you sure you want to delete this? This action cannot be undone.</p>
                <div className="spread">
                    <button onClick={()=>props.delete(props.id)} className={["btn btn-delete", classes.Btn].join(' ')}>Delete</button>
                    <button onClick={cancelHandler} className={["btn btn-cancel", classes.Btn].join(' ')}>Cancel</button>
                </div>
            </div>
        </Modal>      
        {props.edit
            ?   <div className={['spread', classes.Edit].join(' ')}>
                    <NavLink to={'/blog/editpost/' + props.id} className={classes.EditPost}>
                        <button className={["btn btn-edit", classes.Btn].join(' ')}>
                            Edit
                        </button>
                    </NavLink>
                    <div className={[classes.EditPost, classes.DeletePost].join(' ')}>
                        <button onClick={modalHandler} className={["btn btn-delete", classes.Btn].join(' ')}>
                            Delete
                        </button>
                    </div>
                </div>
            : null}

        {props.edit2
            ? <div className={[classes.Edit,props.klName].join(' ')}>
                <Link to={'/blog/editpost/' + props.id}>Edit</Link>
                <button>Edit</button>
                <button 
                    className={classes.Delete}
                    onClick={props.click}
                >Delete</button>
            </div>
            : null}

        {props.author&&props.time 
            ? <div className={classes.CardAuthor}><p>Posted by {props.author} at {props.time} </p></div>       
            : null}
    </article>
)}
export default Post;